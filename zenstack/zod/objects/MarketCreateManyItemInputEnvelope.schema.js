"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketCreateManyItemInputEnvelopeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const MarketCreateManyItemInput_schema_1 = require("./MarketCreateManyItemInput.schema");
exports.MarketCreateManyItemInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => MarketCreateManyItemInput_schema_1.MarketCreateManyItemInputObjectSchema),
        zod_1.z.lazy(() => MarketCreateManyItemInput_schema_1.MarketCreateManyItemInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
