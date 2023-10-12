"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackPriceSelectObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackArgs_schema_1 = require("./PackArgs.schema");
exports.PackPriceSelectObjectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(), pack: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => PackArgs_schema_1.PackArgsObjectSchema)]).optional(), packId: zod_1.z.boolean().optional(), timestamp: zod_1.z.boolean().optional(), priceUSD: zod_1.z.boolean().optional(), priceEUR: zod_1.z.boolean().optional(), priceGBP: zod_1.z.boolean().optional(), priceRUB: zod_1.z.boolean().optional(), discount: zod_1.z.boolean().optional()
}).strict();
