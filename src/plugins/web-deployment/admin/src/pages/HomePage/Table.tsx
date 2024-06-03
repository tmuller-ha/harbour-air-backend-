import React from "react";
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
} from "@strapi/design-system";

interface ColumnType {
  label: string;
  id: string;
}

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

const columns = [
  {
    label: "User",
    id: "user",
  },
  {
    label: "Created At",
    id: "createdAt",
  },
  {
    label: "Updated At",
    id: "updatedAt",
  },
  {
    label: "Status",
    id: "status",
  },
];

// TODO: Need to implement the sorting and filtering functionality

const Table = (props: TableProps) => {
  const { data } = props;
  return (
    <StrapiTable>
      <Thead>
        <Tr>
          {columns?.map((header) => {
            const { label, id } = header || {};
            return (
              <Th key={id} style={{ color: "#666687" }}>
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
          const { id, user, status, updatedAt, createdAt } = attributes || {};
          return (
            <Tr key={id}>
              <TableBodyCell cellData={user || "-"} />
              <TableBodyCell cellData={createdAt?.split("T")[0]} />
              <TableBodyCell cellData={updatedAt?.split("T")[0]} />
              <TableBodyCell cellData={status || "-"} />
            </Tr>
          );
        })}
      </Tbody>
    </StrapiTable>
  );
};

export default Table;
