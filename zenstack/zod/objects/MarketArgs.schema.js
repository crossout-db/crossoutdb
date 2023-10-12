"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const MarketSelect_schema_1 = require("./MarketSelect.schema");
const MarketInclude_schema_1 = require("./MarketInclude.schema");
exports.MarketArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => MarketSelect_schema_1.MarketSelectObjectSchema).optional(), include: zod_1.z.lazy(() => MarketInclude_schema_1.MarketIncludeObjectSchema).optional()
}).strict();
