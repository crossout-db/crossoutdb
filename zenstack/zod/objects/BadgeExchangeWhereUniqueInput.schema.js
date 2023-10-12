"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeExchangeWhereUniqueInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const BadgeExchangeWhereInput_schema_1 = require("./BadgeExchangeWhereInput.schema");
const IntFilter_schema_1 = require("./IntFilter.schema");
const BoolFilter_schema_1 = require("./BoolFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const ItemRelationFilter_schema_1 = require("./ItemRelationFilter.schema");
const ItemWhereInput_schema_1 = require("./ItemWhereInput.schema");
exports.BadgeExchangeWhereUniqueInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), AND: zod_1.z.union([zod_1.z.lazy(() => BadgeExchangeWhereInput_schema_1.BadgeExchangeWhereInputObjectSchema),
        zod_1.z.lazy(() => BadgeExchangeWhereInput_schema_1.BadgeExchangeWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => BadgeExchangeWhereInput_schema_1.BadgeExchangeWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => BadgeExchangeWhereInput_schema_1.BadgeExchangeWhereInputObjectSchema),
        zod_1.z.lazy(() => BadgeExchangeWhereInput_schema_1.BadgeExchangeWhereInputObjectSchema).array()]).optional(), itemId: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), quantity: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), badges: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), active: zod_1.z.union([zod_1.z.lazy(() => BoolFilter_schema_1.BoolFilterObjectSchema),
        zod_1.z.boolean()]).optional(), timestamp: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), item: zod_1.z.union([zod_1.z.lazy(() => ItemRelationFilter_schema_1.ItemRelationFilterObjectSchema),
        zod_1.z.lazy(() => ItemWhereInput_schema_1.ItemWhereInputObjectSchema)]).optional()
}).strict();
