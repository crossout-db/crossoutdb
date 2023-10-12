"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStatsCreateManyUserInputEnvelopeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemStatsCreateManyUserInput_schema_1 = require("./ItemStatsCreateManyUserInput.schema");
exports.ItemStatsCreateManyUserInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => ItemStatsCreateManyUserInput_schema_1.ItemStatsCreateManyUserInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsCreateManyUserInput_schema_1.ItemStatsCreateManyUserInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
