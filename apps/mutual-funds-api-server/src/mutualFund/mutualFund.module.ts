import { Module } from "@nestjs/common";
import { MutualFundModuleBase } from "./base/mutualFund.module.base";
import { MutualFundService } from "./mutualFund.service";
import { MutualFundController } from "./mutualFund.controller";
import { MutualFundResolver } from "./mutualFund.resolver";

@Module({
  imports: [MutualFundModuleBase],
  controllers: [MutualFundController],
  providers: [MutualFundService, MutualFundResolver],
  exports: [MutualFundService],
})
export class MutualFundModule {}
