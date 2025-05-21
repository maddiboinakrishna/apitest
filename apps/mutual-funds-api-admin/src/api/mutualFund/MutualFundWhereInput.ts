import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MutualFundWhereInput = {
  amcName?: StringNullableFilter;
  fundType?: StringNullableFilter;
  id?: StringFilter;
  inceptionDate?: DateTimeNullableFilter;
  nav?: StringNullableFilter;
  schemeName?: StringNullableFilter;
};
