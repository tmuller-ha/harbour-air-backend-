/*
 *
 * HomePage
 *
 */

import {
  Layout,
  BaseHeaderLayout,
  Box,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Link,
  Typography,
} from "@strapi/design-system";
import { LoadingIndicatorPage } from "@strapi/helper-plugin";
import { request } from "@strapi/helper-plugin";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [forms, setForms] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    request("/forms").then((response: any) => {
      setForms(response);
      setIsLoading(false);
    });
  }, []);

  console.log(forms);

  if(isLoading) return <LoadingIndicatorPage/>
  return (
    <Layout>
      <BaseHeaderLayout
        title="Forms"
        subtitle="Choose the appropriate form"
        as="h2"
      />
      <Box padding={8}>
        <Table>
          <Thead>
            <Tr>
              <Th><Typography textColor="neutral600" variant="sigma">ID</Typography></Th>
              <Th><Typography textColor="neutral600" variant="sigma">NAME</Typography></Th>
            </Tr>
          </Thead>
          <Tbody>
            {forms.map((val: any, index: number) => {
              return (
                <Tr>
                  <Td>{index + 1}</Td>
                  <Td>{val.info.displayName}</Td>
                  <Td>
                    <Link to={`/plugins/forms/${val.info.pluralName}`}>
                      Open
                    </Link>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
    </Layout>
  );
};

export default HomePage;
