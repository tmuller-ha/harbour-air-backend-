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
} from "@strapi/design-system";
import { request } from '@strapi/helper-plugin';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

const ContentTypePage = () => {
    //TODO: Need to implement dynamic content type page here
    const {contentType} = useParams<{contentType: string}>();

    useEffect(() => {
      request(`/forms/${contentType}`, {
        method: "GET"
      }).then((response: any) => {
        setContentTypeData(response);
      })
    },[contentType]);
    const [contentTypeData, setContentTypeData] = useState<any[]>();
    console.log('contentTypeData',contentTypeData);
         
  return (
    <Layout>
      <BaseHeaderLayout
        title={`${contentType.charAt(0).toUpperCase() + contentType.slice(1)}`}
        subtitle={`${contentTypeData?.length} queries found`}
        as="h2"
      />
      <Box padding={8}>
        <Table>
          <Thead>
            <Tr>
              {
                contentTypeData ? Object.keys(contentTypeData?.[0]).map((field: string, index: number) => {
                  return (
                    <Th key={index}>{field.toUpperCase()}</Th>
                  )
                }) : null
              }
            </Tr>
          </Thead>
          <Tbody>
            {
              contentTypeData?.map((content) => {
                console.log('content',content);
                return (
                  <Tr>
                    {
                      Object.keys(content).map((field) => {
                        return (
                          <Td>{content[field]}</Td>
                        )
                      })
                    }
                  </Tr>
                )
              })
            }
          </Tbody>
        </Table>
      </Box>
    </Layout>
  )
}

export default ContentTypePage