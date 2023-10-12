"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStatsCreateManyItemInputEnvelopeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemStatsCreateManyItemInput_schema_1 = require("./ItemStatsCreateManyItemInput.schema");
exports.ItemStatsCreateManyItemInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => ItemStatsCreateManyItemInput_schema_1.ItemStatsCreateManyItemInputObjectSchema),
        zod_1.z.lazy(() => ItemStatsCreateManyItemInput_schema_1.ItemStatsCreateManyItemInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
