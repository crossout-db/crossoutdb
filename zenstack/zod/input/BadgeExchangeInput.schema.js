"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeExchangeInputSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
;
const BadgeExchangeSelect_schema_1 = require("../objects/BadgeExchangeSelect.schema");
const BadgeExchangeInclude_schema_1 = require("../objects/BadgeExchangeInclude.schema");
const BadgeExchangeWhereUniqueInput_schema_1 = require("../objects/BadgeExchangeWhereUniqueInput.schema");
const BadgeExchangeWhereInput_schema_1 = require("../objects/BadgeExchangeWhereInput.schema");
const BadgeExchangeOrderByWithRelationInput_schema_1 = require("../objects/BadgeExchangeOrderByWithRelationInput.schema");
const BadgeExchangeScalarFieldEnum_schema_1 = require("../enums/BadgeExchangeScalarFieldEnum.schema");
const BadgeExchangeCreateInput_schema_1 = require("../objects/BadgeExchangeCreateInput.schema");
const BadgeExchangeUncheckedCreateInput_schema_1 = require("../objects/BadgeExchangeUncheckedCreateInput.schema");
const BadgeExchangeCreateManyInput_schema_1 = require("../objects/BadgeExchangeCreateManyInput.schema");
const BadgeExchangeUpdateInput_schema_1 = require("../objects/BadgeExchangeUpdateInput.schema");
const BadgeExchangeUncheckedUpdateInput_schema_1 = require("../objects/BadgeExchangeUncheckedUpdateInput.schema");
const BadgeExchangeUpdateManyMutationInput_schema_1 = require("../objects/BadgeExchangeUpdateManyMutationInput.schema");
const BadgeExchangeUncheckedUpdateManyInput_schema_1 = require("../objects/BadgeExchangeUncheckedUpdateManyInput.schema");
const BadgeExchangeCountAggregateInput_schema_1 = require("../objects/BadgeExchangeCountAggregateInput.schema");
const BadgeExchangeMinAggregateInput_schema_1 = require("../objects/BadgeExchangeMinAggregateInput.schema");
const BadgeExchangeMaxAggregateInput_schema_1 = require("../objects/BadgeExchangeMaxAggregateInput.schema");
const BadgeExchangeAvgAggregateInput_schema_1 = require("../objects/BadgeExchangeAvgAggregateInput.schema");
const BadgeExchangeSumAggregateInput_schema_1 = require("../objects/BadgeExchangeSumAggregateInput.schema");
const BadgeExchangeOrderByWithAggregationInput_schema_1 = require("../objects/BadgeExchangeOrderByWithAggregationInput.schema");
const BadgeExchangeScalarWhereWithAggregatesInput_schema_1 = require("../objects/BadgeExchangeScalarWhereWithAggregatesInput.schema");
exports.BadgeExchangeInputSchema = {
    findUnique: zod_1.z.object({ select: zod_1.z.lazy(() => BadgeExchangeSelect_schema_1.BadgeExchangeSelectObjectSchema.optional()), include: zod_1.z.lazy(() => BadgeExchangeInclude_schema_1.BadgeExchangeIncludeObjectSchema.optional()), where: BadgeExchangeWhereUniqueInput_schema_1.BadgeExchangeWhereUniqueInputObjectSchema }), findFirst: zod_1.z.object({ select: zod_1.z.lazy(() => BadgeExchangeSelect_schema_1.BadgeExchangeSelectObjectSchema.optional()), include: zod_1.z.lazy(() => BadgeExchangeInclude_schema_1.BadgeExchangeIncludeObjectSchema.optional()), where: BadgeExchangeWhereInput_schema_1.BadgeExchangeWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([BadgeExchangeOrderByWithRelationInput_schema_1.BadgeExchangeOrderByWithRelationInputObjectSchema, BadgeExchangeOrderByWithRelationInput_schema_1.BadgeExchangeOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: BadgeExchangeWhereUniqueInput_schema_1.BadgeExchangeWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(BadgeExchangeScalarFieldEnum_schema_1.BadgeExchangeScalarFieldEnumSchema).optional() }), findMany: zod_1.z.object({ select: zod_1.z.lazy(() => BadgeExchangeSelect_schema_1.BadgeExchangeSelectObjectSchema.optional()), include: zod_1.z.lazy(() => BadgeExchangeInclude_schema_1.BadgeExchangeIncludeObjectSchema.optional()), where: BadgeExchangeWhereInput_schema_1.BadgeExchangeWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([BadgeExchangeOrderByWithRelationInput_schema_1.BadgeExchangeOrderByWithRelationInputObjectSchema, BadgeExchangeOrderByWithRelationInput_schema_1.BadgeExchangeOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: BadgeExchangeWhereUniqueInput_schema_1.BadgeExchangeWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(BadgeExchangeScalarFieldEnum_schema_1.BadgeExchangeScalarFieldEnumSchema).optional() }), create: zod_1.z.object({ select: zod_1.z.lazy(() => BadgeExchangeSelect_schema_1.BadgeExchangeSelectObjectSchema.optional()), include: zod_1.z.lazy(() => BadgeExchangeInclude_schema_1.BadgeExchangeIncludeObjectSchema.optional()), data: zod_1.z.union([BadgeExchangeCreateInput_schema_1.BadgeExchangeCreateInputObjectSchema, BadgeExchangeUncheckedCreateInput_schema_1.BadgeExchangeUncheckedCreateInputObjectSchema]) }), createMany: zod_1.z.object({ data: zod_1.z.union([BadgeExchangeCreateManyInput_schema_1.BadgeExchangeCreateManyInputObjectSchema, zod_1.z.array(BadgeExchangeCreateManyInput_schema_1.BadgeExchangeCreateManyInputObjectSchema)]) }), 'delete': zod_1.z.object({ select: zod_1.z.lazy(() => BadgeExchangeSelect_schema_1.BadgeExchangeSelectObjectSchema.optional()), include: zod_1.z.lazy(() => BadgeExchangeInclude_schema_1.BadgeExchangeIncludeObjectSchema.optional()), where: BadgeExchangeWhereUniqueInput_schema_1.BadgeExchangeWhereUniqueInputObjectSchema }), deleteMany: zod_1.z.object({ where: BadgeExchangeWhereInput_schema_1.BadgeExchangeWhereInputObjectSchema.optional() }), update: zod_1.z.object({ select: zod_1.z.lazy(() => BadgeExchangeSelect_schema_1.BadgeExchangeSelectObjectSchema.optional()), include: zod_1.z.lazy(() => BadgeExchangeInclude_schema_1.BadgeExchangeIncludeObjectSchema.optional()), data: zod_1.z.union([BadgeExchangeUpdateInput_schema_1.BadgeExchangeUpdateInputObjectSchema, BadgeExchangeUncheckedUpdateInput_schema_1.BadgeExchangeUncheckedUpdateInputObjectSchema]), where: BadgeExchangeWhereUniqueInput_schema_1.BadgeExchangeWhereUniqueInputObjectSchema }), updateMany: zod_1.z.object({ data: zod_1.z.union([BadgeExchangeUpdateManyMutationInput_schema_1.BadgeExchangeUpdateManyMutationInputObjectSchema, BadgeExchangeUncheckedUpdateManyInput_schema_1.BadgeExchangeUncheckedUpdateManyInputObjectSchema]), where: BadgeExchangeWhereInput_schema_1.BadgeExchangeWhereInputObjectSchema.optional() }), upsert: zod_1.z.object({ select: zod_1.z.lazy(() => BadgeExchangeSelect_schema_1.BadgeExchangeSelectObjectSchema.optional()), include: zod_1.z.lazy(() => BadgeExchangeInclude_schema_1.BadgeExchangeIncludeObjectSchema.optional()), where: BadgeExchangeWhereUniqueInput_schema_1.BadgeExchangeWhereUniqueInputObjectSchema, create: zod_1.z.union([BadgeExchangeCreateInput_schema_1.BadgeExchangeCreateInputObjectSchema, BadgeExchangeUncheckedCreateInput_schema_1.BadgeExchangeUncheckedCreateInputObjectSchema]), update: zod_1.z.union([BadgeExchangeUpdateInput_schema_1.BadgeExchangeUpdateInputObjectSchema, BadgeExchangeUncheckedUpdateInput_schema_1.BadgeExchangeUncheckedUpdateInputObjectSchema]) }), aggregate: zod_1.z.object({ where: BadgeExchangeWhereInput_schema_1.BadgeExchangeWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([BadgeExchangeOrderByWithRelationInput_schema_1.BadgeExchangeOrderByWithRelationInputObjectSchema, BadgeExchangeOrderByWithRelationInput_schema_1.BadgeExchangeOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: BadgeExchangeWhereUniqueInput_schema_1.BadgeExchangeWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), _count: zod_1.z.union([zod_1.z.literal(true), BadgeExchangeCountAggregateInput_schema_1.BadgeExchangeCountAggregateInputObjectSchema]).optional(), _min: BadgeExchangeMinAggregateInput_schema_1.BadgeExchangeMinAggregateInputObjectSchema.optional(), _max: BadgeExchangeMaxAggregateInput_schema_1.BadgeExchangeMaxAggregateInputObjectSchema.optional(), _avg: BadgeExchangeAvgAggregateInput_schema_1.BadgeExchangeAvgAggregateInputObjectSchema.optional(), _sum: BadgeExchangeSumAggregateInput_schema_1.BadgeExchangeSumAggregateInputObjectSchema.optional() }), groupBy: zod_1.z.object({ where: BadgeExchangeWhereInput_schema_1.BadgeExchangeWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([BadgeExchangeOrderByWithAggregationInput_schema_1.BadgeExchangeOrderByWithAggregationInputObjectSchema, BadgeExchangeOrderByWithAggregationInput_schema_1.BadgeExchangeOrderByWithAggregationInputObjectSchema.array()]).optional(), having: BadgeExchangeScalarWhereWithAggregatesInput_schema_1.BadgeExchangeScalarWhereWithAggregatesInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), by: zod_1.z.array(BadgeExchangeScalarFieldEnum_schema_1.BadgeExchangeScalarFieldEnumSchema), _count: zod_1.z.union([zod_1.z.literal(true), BadgeExchangeCountAggregateInput_schema_1.BadgeExchangeCountAggregateInputObjectSchema]).optional(), _min: BadgeExchangeMinAggregateInput_schema_1.BadgeExchangeMinAggregateInputObjectSchema.optional(), _max: BadgeExchangeMaxAggregateInput_schema_1.BadgeExchangeMaxAggregateInputObjectSchema.optional(), _avg: BadgeExchangeAvgAggregateInput_schema_1.BadgeExchangeAvgAggregateInputObjectSchema.optional(), _sum: BadgeExchangeSumAggregateInput_schema_1.BadgeExchangeSumAggregateInputObjectSchema.optional() }), count: zod_1.z.object({ where: BadgeExchangeWhereInput_schema_1.BadgeExchangeWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([BadgeExchangeOrderByWithRelationInput_schema_1.BadgeExchangeOrderByWithRelationInputObjectSchema, BadgeExchangeOrderByWithRelationInput_schema_1.BadgeExchangeOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: BadgeExchangeWhereUniqueInput_schema_1.BadgeExchangeWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(BadgeExchangeScalarFieldEnum_schema_1.BadgeExchangeScalarFieldEnumSchema).optional(), select: zod_1.z.union([zod_1.z.literal(true), BadgeExchangeCountAggregateInput_schema_1.BadgeExchangeCountAggregateInputObjectSchema]).optional() })
};
