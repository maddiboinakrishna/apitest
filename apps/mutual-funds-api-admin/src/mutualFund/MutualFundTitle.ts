import { MutualFund as TMutualFund } from "../api/mutualFund/MutualFund";

export const MUTUALFUND_TITLE_FIELD = "amcName";

export const MutualFundTitle = (record: TMutualFund): string => {
  return record.amcName?.toString() || String(record.id);
};
