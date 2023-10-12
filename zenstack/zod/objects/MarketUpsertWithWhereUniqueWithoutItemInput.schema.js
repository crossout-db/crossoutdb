"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketUpsertWithWhereUniqueWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const MarketWhereUniqueInput_schema_1 = require("./MarketWhereUniqueInput.schema");
const MarketUpdateWithoutItemInput_schema_1 = require("./MarketUpdateWithoutItemInput.schema");
const MarketUncheckedUpdateWithoutItemInput_schema_1 = require("./MarketUncheckedUpdateWithoutItemInput.schema");
const MarketCreateWithoutItemInput_schema_1 = require("./MarketCreateWithoutItemInput.schema");
const MarketUncheckedCreateWithoutItemInput_schema_1 = require("./MarketUncheckedCreateWithoutItemInput.schema");
exports.MarketUpsertWithWhereUniqueWithoutItemInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => MarketWhereUniqueInput_schema_1.MarketWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => MarketUpdateWithoutItemInput_schema_1.MarketUpdateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => MarketUncheckedUpdateWithoutItemInput_schema_1.MarketUncheckedUpdateWithoutItemInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => MarketCreateWithoutItemInput_schema_1.MarketCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => MarketUncheckedCreateWithoutItemInput_schema_1.MarketUncheckedCreateWithoutItemInputObjectSchema)])
}).strict();
