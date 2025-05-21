import * as graphql from "@nestjs/graphql";
import { MutualFundResolverBase } from "./base/mutualFund.resolver.base";
import { MutualFund } from "./base/MutualFund";
import { MutualFundService } from "./mutualFund.service";

@graphql.Resolver(() => MutualFund)
export class MutualFundResolver extends MutualFundResolverBase {
  constructor(protected readonly service: MutualFundService) {
    super(service);
  }
}
