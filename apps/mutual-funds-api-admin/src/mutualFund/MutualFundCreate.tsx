import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MutualFundCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="amcName" source="amcName" />
        <TextInput label="category" source="category" />
        <TextInput label="riskLevel" source="riskLevel" />
        <TextInput label="schemeName" source="schemeName" />
      </SimpleForm>
    </Create>
  );
};
