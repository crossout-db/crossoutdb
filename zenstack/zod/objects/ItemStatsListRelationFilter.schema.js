"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStatsListRelationFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemStatsWhereInput_schema_1 = require("./ItemStatsWhereInput.schema");
exports.ItemStatsListRelationFilterObjectSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => ItemStatsWhereInput_schema_1.ItemStatsWhereInputObjectSchema).optional(), some: zod_1.z.lazy(() => ItemStatsWhereInput_schema_1.ItemStatsWhereInputObjectSchema).optional(), none: zod_1.z.lazy(() => ItemStatsWhereInput_schema_1.ItemStatsWhereInputObjectSchema).optional()
}).strict();
