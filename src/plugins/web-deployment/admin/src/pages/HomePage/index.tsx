import { useQueryParams } from "@strapi/strapi/admin";
/*
 *
 * HomePage
 *
 */
const qs = require("qs");
import React, { useEffect, useState, useMemo, useCallback } from "react";
import {
  Layout,
  ContentLayout,
  BaseHeaderLayout,
  Button,
  Flex,
} from "@strapi/design-system";
import HomePageContent from "../Workflow/HomePageContent";
import deploymentService from "../../api/deployment";
import { request } from "@strapi/helper-plugin";
import { ColumnType, columns } from "../Workflow/types";

interface Role {
  code: string;
  description: string;
  id: number;
  name: string;
}

interface UserResponse {
  blocked: boolean;
  createdAt: string;
  email: string;
  firstname: string;
  id: number;
  isActive: boolean;
  lastname: string;
  preferedLanguage: string | null;
  roles: Role[];
  updatedAt: string;
  username: string | null;
}

const HomePage = () => {
  const [data, setData] = useState<ColumnType[]>([]);
  const [currentUser, setCurrentUser] = useState<UserResponse>();

  const [{ query }, setQuery] = useQueryParams();
  const { page = 1, pageSize = 10 } = query || {};
  const [totalWorkFlowCount, setTotalWorkFlowCount] = useState<number>(0);

  const paginationNumber = useMemo(() => page - 1, [page]);

  const startingPage = useMemo(
    () => pageSize * paginationNumber,
    [pageSize, paginationNumber]
  );

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
    request("/admin/users/me").then((response: { data: UserResponse }) => {
      setCurrentUser(response.data);
    });
    fetchWorkFlowStatus();
  }, [page, pageSize]);

  const onTriggerDeploy = async () => {
    try {
      const deployment = await deploymentService.createDeployment({
        user: `${currentUser?.firstname || ""} ${currentUser?.lastname || ""}`,
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
    <Layout>
      <BaseHeaderLayout title="Web Deployment" as="h2" />
      <Flex gap={4} justifyContent="end" padding={[8, 8, 8, 8]}>
        <Button onClick={onTriggerDeploy}>Trigger Deploy</Button>
      </Flex>
      <ContentLayout>
        <HomePageContent
          pagination={pagination}
          columns={columns}
          showNoDataMessage={!Boolean(data?.length)}
          data={data}
          noDataMessage="You don't have any queries yet"
        />
      </ContentLayout>
    </Layout>
  );
};

export default HomePage;
