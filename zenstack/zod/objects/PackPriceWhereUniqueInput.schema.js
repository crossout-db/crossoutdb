"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackPriceWhereUniqueInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackPriceWhereInput_schema_1 = require("./PackPriceWhereInput.schema");
const IntFilter_schema_1 = require("./IntFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const PackRelationFilter_schema_1 = require("./PackRelationFilter.schema");
const PackWhereInput_schema_1 = require("./PackWhereInput.schema");
exports.PackPriceWhereUniqueInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), AND: zod_1.z.union([zod_1.z.lazy(() => PackPriceWhereInput_schema_1.PackPriceWhereInputObjectSchema),
        zod_1.z.lazy(() => PackPriceWhereInput_schema_1.PackPriceWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => PackPriceWhereInput_schema_1.PackPriceWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => PackPriceWhereInput_schema_1.PackPriceWhereInputObjectSchema),
        zod_1.z.lazy(() => PackPriceWhereInput_schema_1.PackPriceWhereInputObjectSchema).array()]).optional(), packId: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), timestamp: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), priceUSD: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), priceEUR: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), priceGBP: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), priceRUB: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), discount: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), pack: zod_1.z.union([zod_1.z.lazy(() => PackRelationFilter_schema_1.PackRelationFilterObjectSchema),
        zod_1.z.lazy(() => PackWhereInput_schema_1.PackWhereInputObjectSchema)]).optional()
}).strict();
