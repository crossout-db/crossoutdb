"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCreateManyFactionInputEnvelopeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemCreateManyFactionInput_schema_1 = require("./ItemCreateManyFactionInput.schema");
exports.ItemCreateManyFactionInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => ItemCreateManyFactionInput_schema_1.ItemCreateManyFactionInputObjectSchema),
        zod_1.z.lazy(() => ItemCreateManyFactionInput_schema_1.ItemCreateManyFactionInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
