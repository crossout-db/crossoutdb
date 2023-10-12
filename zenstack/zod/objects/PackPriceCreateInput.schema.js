"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackPriceCreateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackCreateNestedOneWithoutPackPricesInput_schema_1 = require("./PackCreateNestedOneWithoutPackPricesInput.schema");
exports.PackPriceCreateInputObjectSchema = zod_1.z.object({
    timestamp: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), priceUSD: zod_1.z.number(), priceEUR: zod_1.z.number(), priceGBP: zod_1.z.number(), priceRUB: zod_1.z.number(), discount: zod_1.z.number(), pack: zod_1.z.lazy(() => PackCreateNestedOneWithoutPackPricesInput_schema_1.PackCreateNestedOneWithoutPackPricesInputObjectSchema)
}).strict();
