/*
 *
 * HomePage
 *
 */

import React, { useEffect, useState } from "react";
import pluginId from "../../pluginId";
import {
  Layout,
  ContentLayout,
  BaseHeaderLayout,
  Button,
  Flex,
  ModalLayout,
  DatePicker,
  Typography,
} from "@strapi/design-system";
import Table from "./Table";
import deploymentService from "../../api/deployment";
import { request } from "@strapi/helper-plugin";

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
  const [data, setData] = useState([]);
  const [currentUser, setCurrentUser] = useState<UserResponse>();

  // TODO: Implement the fetchData function with react query
  const fetchData = async () => {
    deploymentService.getDeployments().then((response) => {
      setData(response.data);
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
  }, []);

  const onTriggerDeploy = async () => {
    try {
      const deployment = await deploymentService.createDeployment({
        user: `${currentUser?.firstname || ""} ${currentUser?.lastname || ""}`,
      });
      console.log(deployment);
      await deploymentService.triggerDeploy(`${deployment?.data?.id}`);
      fetchData();
    } catch (error) {
      /**
       * TODO: Notify the user that the deployment failed
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
        <Table data={data} />
      </ContentLayout>
    </Layout>
  );
};

export default HomePage;
