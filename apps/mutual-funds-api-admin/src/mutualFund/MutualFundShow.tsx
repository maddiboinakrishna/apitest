import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const MutualFundShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amcName" source="amcName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="fundType	" source="fundType" />
        <TextField label="ID" source="id" />
        <TextField label="inceptionDate	" source="inceptionDate" />
        <TextField label="nav" source="nav" />
        <TextField label="schemeName" source="schemeName" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
