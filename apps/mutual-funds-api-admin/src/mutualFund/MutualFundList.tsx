import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MutualFundList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Mutual Funds"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="amcName" source="amcName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="fundType	" source="fundType" />
        <TextField label="ID" source="id" />
        <TextField label="inceptionDate	" source="inceptionDate" />
        <TextField label="nav" source="nav" />
        <TextField label="schemeName" source="schemeName" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
