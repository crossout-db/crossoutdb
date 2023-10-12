"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStatsArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemStatsSelect_schema_1 = require("./ItemStatsSelect.schema");
const ItemStatsInclude_schema_1 = require("./ItemStatsInclude.schema");
exports.ItemStatsArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => ItemStatsSelect_schema_1.ItemStatsSelectObjectSchema).optional(), include: zod_1.z.lazy(() => ItemStatsInclude_schema_1.ItemStatsIncludeObjectSchema).optional()
}).strict();
