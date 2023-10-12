"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStatsCreateManyReleaseInputEnvelopeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemStatsCreateManyReleaseInput_schema_1 = require("./ItemStatsCreateManyReleaseInput.schema");
exports.ItemStatsCreateManyReleaseInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => ItemStatsCreateManyReleaseInput_schema_1.ItemStatsCreateManyReleaseInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsCreateManyReleaseInput_schema_1.ItemStatsCreateManyReleaseInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
