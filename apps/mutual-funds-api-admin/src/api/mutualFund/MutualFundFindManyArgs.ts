import { MutualFundWhereInput } from "./MutualFundWhereInput";
import { MutualFundOrderByInput } from "./MutualFundOrderByInput";

export type MutualFundFindManyArgs = {
  where?: MutualFundWhereInput;
  orderBy?: Array<MutualFundOrderByInput>;
  skip?: number;
  take?: number;
};
