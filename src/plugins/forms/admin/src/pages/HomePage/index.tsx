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
} from "@strapi/design-system";
import { request } from "@strapi/helper-plugin";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    request("/forms").then((response: any) => {
      setForms(response);
    });
  }, []);

  console.log(forms);

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
              <Th>ID</Th>
              <Th>NAME</Th>
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
