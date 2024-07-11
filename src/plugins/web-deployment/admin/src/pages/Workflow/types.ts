export interface SortingType {
  [propKey: string]: "asc" | "desc";
}

export interface ColumnType {
  label: string;
  id: string;
}
export interface TableProps {
  data: any;
  columns: ColumnType[];
  onEditTableRow?: (id: string, data: any) => Promise<void>;
  sorting?: SortingType;
  setSorting?: (sorting: SortingType) => void;
}

export interface PaginationType {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}


export interface TablePaginationProps {
  pagination: PaginationType;
}

export interface HomePageContentProps extends TableProps, TablePaginationProps {
  showNoDataMessage: boolean;
  noDataMessage?: string;
}

export const columns = [
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
