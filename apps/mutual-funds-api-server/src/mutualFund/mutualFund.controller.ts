import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MutualFundService } from "./mutualFund.service";
import { MutualFundControllerBase } from "./base/mutualFund.controller.base";

@swagger.ApiTags("mutualFunds")
@common.Controller("mutualFunds")
export class MutualFundController extends MutualFundControllerBase {
  constructor(protected readonly service: MutualFundService) {
    super(service);
  }
}
