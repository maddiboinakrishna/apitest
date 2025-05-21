import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const MutualFundCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="amcName" source="amcName" />
        <TextInput label="fundType	" source="fundType" />
        <DateTimeInput label="inceptionDate	" source="inceptionDate" />
        <TextInput label="nav" source="nav" />
        <TextInput label="schemeName" source="schemeName" />
      </SimpleForm>
    </Create>
  );
};
