"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketListRelationFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const MarketWhereInput_schema_1 = require("./MarketWhereInput.schema");
exports.MarketListRelationFilterObjectSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => MarketWhereInput_schema_1.MarketWhereInputObjectSchema).optional(), some: zod_1.z.lazy(() => MarketWhereInput_schema_1.MarketWhereInputObjectSchema).optional(), none: zod_1.z.lazy(() => MarketWhereInput_schema_1.MarketWhereInputObjectSchema).optional()
}).strict();
