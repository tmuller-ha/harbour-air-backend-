/*
 *
 * HomePage
 *
 */

import { Layout, BaseHeaderLayout, Box, Table, Thead, Tr, Th, Tbody, Td, Link } from '@strapi/design-system';

const HomePage = () => {
  return (
    <Layout>
      <BaseHeaderLayout title="Forms" subtitle="Choose the appropriate form" as="h2" />
      <Box padding={8}>
        <Table>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>NAME</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td><Link to="/plugins/forms/chartered-flights">Chartered Flights</Link></Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td><Link to="/plugins/forms/tours">Tours</Link></Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Layout>
  );
};

export default HomePage;
