import {
  IconButton,
  Flex,
  Typography,
  Badge,
  Link,
  Status,
  Table as StrapiTable,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Tooltip,
} from '@strapi/design-system';

import { columns } from '../types';

export interface TableProps {
  data: any;
}

const TableBodyCell = ({ cellData }: any) => {
  return (
    <Td>
      <Typography textColor="neutral800">{cellData}</Typography>
    </Td>
  );
};

//TODO: Need to implement the sorting and filtering functionality

const Table = (props: TableProps) => {
  const { data } = props;

  return (
    <StrapiTable>
      <Thead>
        <Tr>
          {columns?.map((header) => {
            const { label, id } = header || {};
            return (
              <Th key={id} style={{ color: '#666687' }}>
                <Typography textColor="neutral600" variant="sigma">
                  {label}
                </Typography>
              </Th>
            );
          })}
        </Tr>
      </Thead>
      <Tbody>
        {data?.map((attributes: any) => {
          const { id, user, deploymentStatus, updatedAt, createdAt } = attributes || {};
          return (
            <Tr key={id}>
              <TableBodyCell cellData={id} />
              <TableBodyCell cellData={user || '-'} />
              <TableBodyCell cellData={new Date(createdAt).toLocaleString()} />
              <TableBodyCell cellData={new Date(updatedAt).toLocaleString()} />
              <TableBodyCell cellData={deploymentStatus || '-'} />
            </Tr>
          );
        })}
      </Tbody>
    </StrapiTable>
  );
};

export default Table;
