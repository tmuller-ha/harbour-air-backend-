import Table from '../components/Table';
import TablePagination from '../components/TablePagination';
import { EmptyStateLayout } from '@strapi/design-system';
import { HomePageContentProps } from '../types';

const HomePageContent = (props: HomePageContentProps) => {
  const { data, pagination, showNoDataMessage, noDataMessage } = props;

  return (
    <>
      {showNoDataMessage ? (
        <EmptyStateLayout content={noDataMessage} />
      ) : (
        <>
          <Table data={data} />
          <TablePagination pagination={pagination} />
        </>
      )}
    </>
  );
};

export default HomePageContent;
