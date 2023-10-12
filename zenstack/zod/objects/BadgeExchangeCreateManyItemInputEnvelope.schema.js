"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeExchangeCreateManyItemInputEnvelopeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const BadgeExchangeCreateManyItemInput_schema_1 = require("./BadgeExchangeCreateManyItemInput.schema");
exports.BadgeExchangeCreateManyItemInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => BadgeExchangeCreateManyItemInput_schema_1.BadgeExchangeCreateManyItemInputObjectSchema),
        zod_1.z.lazy(() => BadgeExchangeCreateManyItemInput_schema_1.BadgeExchangeCreateManyItemInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
