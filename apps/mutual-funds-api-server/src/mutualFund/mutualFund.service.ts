import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MutualFundServiceBase } from "./base/mutualFund.service.base";

@Injectable()
export class MutualFundService extends MutualFundServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
