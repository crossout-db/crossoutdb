"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketUpdateWithWhereUniqueWithoutItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const MarketWhereUniqueInput_schema_1 = require("./MarketWhereUniqueInput.schema");
const MarketUpdateWithoutItemInput_schema_1 = require("./MarketUpdateWithoutItemInput.schema");
const MarketUncheckedUpdateWithoutItemInput_schema_1 = require("./MarketUncheckedUpdateWithoutItemInput.schema");
exports.MarketUpdateWithWhereUniqueWithoutItemInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => MarketWhereUniqueInput_schema_1.MarketWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => MarketUpdateWithoutItemInput_schema_1.MarketUpdateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => MarketUncheckedUpdateWithoutItemInput_schema_1.MarketUncheckedUpdateWithoutItemInputObjectSchema)])
}).strict();
