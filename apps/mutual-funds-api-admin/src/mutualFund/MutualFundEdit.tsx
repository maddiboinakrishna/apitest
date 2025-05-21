import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const MutualFundEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="amcName" source="amcName" />
        <TextInput label="fundType	" source="fundType" />
        <DateTimeInput label="inceptionDate	" source="inceptionDate" />
        <TextInput label="nav" source="nav" />
        <TextInput label="schemeName" source="schemeName" />
      </SimpleForm>
    </Edit>
  );
};
