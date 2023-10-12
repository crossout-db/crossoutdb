"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RarityInputSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
;
const RaritySelect_schema_1 = require("../objects/RaritySelect.schema");
const RarityInclude_schema_1 = require("../objects/RarityInclude.schema");
const RarityWhereUniqueInput_schema_1 = require("../objects/RarityWhereUniqueInput.schema");
const RarityWhereInput_schema_1 = require("../objects/RarityWhereInput.schema");
const RarityOrderByWithRelationInput_schema_1 = require("../objects/RarityOrderByWithRelationInput.schema");
const RarityScalarFieldEnum_schema_1 = require("../enums/RarityScalarFieldEnum.schema");
const RarityCreateInput_schema_1 = require("../objects/RarityCreateInput.schema");
const RarityUncheckedCreateInput_schema_1 = require("../objects/RarityUncheckedCreateInput.schema");
const RarityCreateManyInput_schema_1 = require("../objects/RarityCreateManyInput.schema");
const RarityUpdateInput_schema_1 = require("../objects/RarityUpdateInput.schema");
const RarityUncheckedUpdateInput_schema_1 = require("../objects/RarityUncheckedUpdateInput.schema");
const RarityUpdateManyMutationInput_schema_1 = require("../objects/RarityUpdateManyMutationInput.schema");
const RarityUncheckedUpdateManyInput_schema_1 = require("../objects/RarityUncheckedUpdateManyInput.schema");
const RarityCountAggregateInput_schema_1 = require("../objects/RarityCountAggregateInput.schema");
const RarityMinAggregateInput_schema_1 = require("../objects/RarityMinAggregateInput.schema");
const RarityMaxAggregateInput_schema_1 = require("../objects/RarityMaxAggregateInput.schema");
const RarityAvgAggregateInput_schema_1 = require("../objects/RarityAvgAggregateInput.schema");
const RaritySumAggregateInput_schema_1 = require("../objects/RaritySumAggregateInput.schema");
const RarityOrderByWithAggregationInput_schema_1 = require("../objects/RarityOrderByWithAggregationInput.schema");
const RarityScalarWhereWithAggregatesInput_schema_1 = require("../objects/RarityScalarWhereWithAggregatesInput.schema");
exports.RarityInputSchema = {
    findUnique: zod_1.z.object({ select: zod_1.z.lazy(() => RaritySelect_schema_1.RaritySelectObjectSchema.optional()), include: zod_1.z.lazy(() => RarityInclude_schema_1.RarityIncludeObjectSchema.optional()), where: RarityWhereUniqueInput_schema_1.RarityWhereUniqueInputObjectSchema }), findFirst: zod_1.z.object({ select: zod_1.z.lazy(() => RaritySelect_schema_1.RaritySelectObjectSchema.optional()), include: zod_1.z.lazy(() => RarityInclude_schema_1.RarityIncludeObjectSchema.optional()), where: RarityWhereInput_schema_1.RarityWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([RarityOrderByWithRelationInput_schema_1.RarityOrderByWithRelationInputObjectSchema, RarityOrderByWithRelationInput_schema_1.RarityOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: RarityWhereUniqueInput_schema_1.RarityWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(RarityScalarFieldEnum_schema_1.RarityScalarFieldEnumSchema).optional() }), findMany: zod_1.z.object({ select: zod_1.z.lazy(() => RaritySelect_schema_1.RaritySelectObjectSchema.optional()), include: zod_1.z.lazy(() => RarityInclude_schema_1.RarityIncludeObjectSchema.optional()), where: RarityWhereInput_schema_1.RarityWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([RarityOrderByWithRelationInput_schema_1.RarityOrderByWithRelationInputObjectSchema, RarityOrderByWithRelationInput_schema_1.RarityOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: RarityWhereUniqueInput_schema_1.RarityWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(RarityScalarFieldEnum_schema_1.RarityScalarFieldEnumSchema).optional() }), create: zod_1.z.object({ select: zod_1.z.lazy(() => RaritySelect_schema_1.RaritySelectObjectSchema.optional()), include: zod_1.z.lazy(() => RarityInclude_schema_1.RarityIncludeObjectSchema.optional()), data: zod_1.z.union([RarityCreateInput_schema_1.RarityCreateInputObjectSchema, RarityUncheckedCreateInput_schema_1.RarityUncheckedCreateInputObjectSchema]) }), createMany: zod_1.z.object({ data: zod_1.z.union([RarityCreateManyInput_schema_1.RarityCreateManyInputObjectSchema, zod_1.z.array(RarityCreateManyInput_schema_1.RarityCreateManyInputObjectSchema)]) }), 'delete': zod_1.z.object({ select: zod_1.z.lazy(() => RaritySelect_schema_1.RaritySelectObjectSchema.optional()), include: zod_1.z.lazy(() => RarityInclude_schema_1.RarityIncludeObjectSchema.optional()), where: RarityWhereUniqueInput_schema_1.RarityWhereUniqueInputObjectSchema }), deleteMany: zod_1.z.object({ where: RarityWhereInput_schema_1.RarityWhereInputObjectSchema.optional() }), update: zod_1.z.object({ select: zod_1.z.lazy(() => RaritySelect_schema_1.RaritySelectObjectSchema.optional()), include: zod_1.z.lazy(() => RarityInclude_schema_1.RarityIncludeObjectSchema.optional()), data: zod_1.z.union([RarityUpdateInput_schema_1.RarityUpdateInputObjectSchema, RarityUncheckedUpdateInput_schema_1.RarityUncheckedUpdateInputObjectSchema]), where: RarityWhereUniqueInput_schema_1.RarityWhereUniqueInputObjectSchema }), updateMany: zod_1.z.object({ data: zod_1.z.union([RarityUpdateManyMutationInput_schema_1.RarityUpdateManyMutationInputObjectSchema, RarityUncheckedUpdateManyInput_schema_1.RarityUncheckedUpdateManyInputObjectSchema]), where: RarityWhereInput_schema_1.RarityWhereInputObjectSchema.optional() }), upsert: zod_1.z.object({ select: zod_1.z.lazy(() => RaritySelect_schema_1.RaritySelectObjectSchema.optional()), include: zod_1.z.lazy(() => RarityInclude_schema_1.RarityIncludeObjectSchema.optional()), where: RarityWhereUniqueInput_schema_1.RarityWhereUniqueInputObjectSchema, create: zod_1.z.union([RarityCreateInput_schema_1.RarityCreateInputObjectSchema, RarityUncheckedCreateInput_schema_1.RarityUncheckedCreateInputObjectSchema]), update: zod_1.z.union([RarityUpdateInput_schema_1.RarityUpdateInputObjectSchema, RarityUncheckedUpdateInput_schema_1.RarityUncheckedUpdateInputObjectSchema]) }), aggregate: zod_1.z.object({ where: RarityWhereInput_schema_1.RarityWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([RarityOrderByWithRelationInput_schema_1.RarityOrderByWithRelationInputObjectSchema, RarityOrderByWithRelationInput_schema_1.RarityOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: RarityWhereUniqueInput_schema_1.RarityWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), _count: zod_1.z.union([zod_1.z.literal(true), RarityCountAggregateInput_schema_1.RarityCountAggregateInputObjectSchema]).optional(), _min: RarityMinAggregateInput_schema_1.RarityMinAggregateInputObjectSchema.optional(), _max: RarityMaxAggregateInput_schema_1.RarityMaxAggregateInputObjectSchema.optional(), _avg: RarityAvgAggregateInput_schema_1.RarityAvgAggregateInputObjectSchema.optional(), _sum: RaritySumAggregateInput_schema_1.RaritySumAggregateInputObjectSchema.optional() }), groupBy: zod_1.z.object({ where: RarityWhereInput_schema_1.RarityWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([RarityOrderByWithAggregationInput_schema_1.RarityOrderByWithAggregationInputObjectSchema, RarityOrderByWithAggregationInput_schema_1.RarityOrderByWithAggregationInputObjectSchema.array()]).optional(), having: RarityScalarWhereWithAggregatesInput_schema_1.RarityScalarWhereWithAggregatesInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), by: zod_1.z.array(RarityScalarFieldEnum_schema_1.RarityScalarFieldEnumSchema), _count: zod_1.z.union([zod_1.z.literal(true), RarityCountAggregateInput_schema_1.RarityCountAggregateInputObjectSchema]).optional(), _min: RarityMinAggregateInput_schema_1.RarityMinAggregateInputObjectSchema.optional(), _max: RarityMaxAggregateInput_schema_1.RarityMaxAggregateInputObjectSchema.optional(), _avg: RarityAvgAggregateInput_schema_1.RarityAvgAggregateInputObjectSchema.optional(), _sum: RaritySumAggregateInput_schema_1.RaritySumAggregateInputObjectSchema.optional() }), count: zod_1.z.object({ where: RarityWhereInput_schema_1.RarityWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([RarityOrderByWithRelationInput_schema_1.RarityOrderByWithRelationInputObjectSchema, RarityOrderByWithRelationInput_schema_1.RarityOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: RarityWhereUniqueInput_schema_1.RarityWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(RarityScalarFieldEnum_schema_1.RarityScalarFieldEnumSchema).optional(), select: zod_1.z.union([zod_1.z.literal(true), RarityCountAggregateInput_schema_1.RarityCountAggregateInputObjectSchema]).optional() })
};
