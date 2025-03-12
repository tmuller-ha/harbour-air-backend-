import qs from 'qs';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Main, Button, Flex } from '@strapi/design-system';
import { Layouts, useQueryParams } from '@strapi/admin/strapi-admin';
import HomePageContent from './HomePageContent';
import deploymentService from '../api/deployment';
import { columns, ColumnType } from '../types';
import { useFetchClient } from '@strapi/strapi/admin';

interface Role {
  code: string;
  description: string;
  id: number;
  name: string;
}

interface UserResponse {
  blocked?: boolean;
  createdAt?: string;
  email?: string;
  firstname: string;
  id?: number;
  isActive?: boolean;
  lastname?: string;
  preferedLanguage?: string | null;
  roles?: Role[];
  updatedAt?: string;
  username?: string | null;
}

const HomePage = () => {
  const [data, setData] = useState<ColumnType[]>([]);
  const [currentUser, setCurrentUser] = useState<UserResponse>();

  const [{ query }, setQuery] = useQueryParams({ page: 0, pageSize: 10 });
  const { page = 1, pageSize = 10 } = query || {};
  const [totalWorkFlowCount, setTotalWorkFlowCount] = useState<number>(0);
  const { get } = useFetchClient();

  const paginationNumber = useMemo(() => page - 1, [page]);

  const startingPage = useMemo(() => pageSize * paginationNumber, [pageSize, paginationNumber]);

  const totalPageCount = useMemo(
    () => Math.ceil(totalWorkFlowCount / pageSize),
    [totalWorkFlowCount, pageSize]
  );

  const getAllWorkFlowPagination = useCallback(() => {
    const getQuery = () =>
      qs.stringify({
        page: startingPage,
        pageSize: pageSize,
      });

    return getQuery();
  }, [startingPage, pageSize]);

  useEffect(() => {
    setQuery({
      ...query,
      page: 1,
      pageSize: 10,
    });
  }, []);

  const pagination = useMemo(
    () => ({
      page,
      pageCount: totalPageCount,
      pageSize,
      total: totalWorkFlowCount,
    }),
    [page, totalPageCount, totalWorkFlowCount, pageSize]
  );

  // TODO: Implement the fetchData function with react query
  const fetchData = async () => {
    deploymentService
      .getDeployments(`start=${(page - 1) * pageSize}&limit=${pageSize}`)
      .then((response: any) => {
        setData(response.data);
        setTotalWorkFlowCount(response.totalCount || 0);
        getAllWorkFlowPagination();
      });
  };

  const fetchWorkFlowStatus = async () => {
    await deploymentService.getWorkFlowStatus();
  };

  useEffect(() => {
    fetchData();
    get('/admin/users/me').then((response: { data: { data: UserResponse } }) => {
      const { data } = response.data;
      setCurrentUser(data);
    });
    fetchWorkFlowStatus();
  }, [page, pageSize]);

  const onTriggerDeploy = async () => {
    try {
      const deployment = await deploymentService.createDeployment({
        data: { user: `${currentUser?.firstname || ''} ${currentUser?.lastname || ''}` },
      });
      await deploymentService.triggerDeploy(`${deployment?.data?.id}`);
      fetchData();
    } catch (error) {
      /**
       * //TODO: Notify the user that the deployment failed
       */
      console.error(error);
    }
  };

  return (
    <Main>
      <Layouts.Content>
        <Flex style={{ justifyContent: 'end', marginTop: '100px', marginBottom: '20px' }}>
          <Button onClick={onTriggerDeploy}>Trigger deployment</Button>
        </Flex>
        <HomePageContent
          pagination={pagination}
          columns={columns}
          showNoDataMessage={!Boolean(data?.length)}
          data={data}
          noDataMessage="You don't have any queries yet"
        />
      </Layouts.Content>
    </Main>
  );
};

export { HomePage };
