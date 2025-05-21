import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MutualFundWhereInput = {
  amcName?: StringNullableFilter;
  category?: StringNullableFilter;
  id?: StringFilter;
  riskLevel?: StringNullableFilter;
  schemeName?: StringNullableFilter;
};
