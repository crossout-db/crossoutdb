"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketCreateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateNestedOneWithoutMarketInput_schema_1 = require("./ItemCreateNestedOneWithoutMarketInput.schema");
exports.MarketCreateInputObjectSchema = zod_1.z.object({
    marketDef: zod_1.z.string(), sellPriceMin: zod_1.z.number(), sellOrders: zod_1.z.number(), buyPriceMax: zod_1.z.number(), buyOrders: zod_1.z.number(), craftCost: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), timestamp: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), item: zod_1.z.lazy(() => ItemCreateNestedOneWithoutMarketInput_schema_1.ItemCreateNestedOneWithoutMarketInputObjectSchema)
}).strict();
