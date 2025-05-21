import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MutualFundEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="amcName" source="amcName" />
        <TextInput label="category" source="category" />
        <TextInput label="riskLevel" source="riskLevel" />
        <TextInput label="schemeName" source="schemeName" />
      </SimpleForm>
    </Edit>
  );
};
