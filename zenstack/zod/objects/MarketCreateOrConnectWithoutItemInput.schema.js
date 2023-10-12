"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketCreateOrConnectWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const MarketWhereUniqueInput_schema_1 = require("./MarketWhereUniqueInput.schema");
const MarketCreateWithoutItemInput_schema_1 = require("./MarketCreateWithoutItemInput.schema");
const MarketUncheckedCreateWithoutItemInput_schema_1 = require("./MarketUncheckedCreateWithoutItemInput.schema");
exports.MarketCreateOrConnectWithoutItemInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => MarketWhereUniqueInput_schema_1.MarketWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => MarketCreateWithoutItemInput_schema_1.MarketCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => MarketUncheckedCreateWithoutItemInput_schema_1.MarketUncheckedCreateWithoutItemInputObjectSchema)])
}).strict();
