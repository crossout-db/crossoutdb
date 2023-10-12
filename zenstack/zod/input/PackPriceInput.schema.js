"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackPriceInputSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
;
const PackPriceSelect_schema_1 = require("../objects/PackPriceSelect.schema");
const PackPriceInclude_schema_1 = require("../objects/PackPriceInclude.schema");
const PackPriceWhereUniqueInput_schema_1 = require("../objects/PackPriceWhereUniqueInput.schema");
const PackPriceWhereInput_schema_1 = require("../objects/PackPriceWhereInput.schema");
const PackPriceOrderByWithRelationInput_schema_1 = require("../objects/PackPriceOrderByWithRelationInput.schema");
const PackPriceScalarFieldEnum_schema_1 = require("../enums/PackPriceScalarFieldEnum.schema");
const PackPriceCreateInput_schema_1 = require("../objects/PackPriceCreateInput.schema");
const PackPriceUncheckedCreateInput_schema_1 = require("../objects/PackPriceUncheckedCreateInput.schema");
const PackPriceCreateManyInput_schema_1 = require("../objects/PackPriceCreateManyInput.schema");
const PackPriceUpdateInput_schema_1 = require("../objects/PackPriceUpdateInput.schema");
const PackPriceUncheckedUpdateInput_schema_1 = require("../objects/PackPriceUncheckedUpdateInput.schema");
const PackPriceUpdateManyMutationInput_schema_1 = require("../objects/PackPriceUpdateManyMutationInput.schema");
const PackPriceUncheckedUpdateManyInput_schema_1 = require("../objects/PackPriceUncheckedUpdateManyInput.schema");
const PackPriceCountAggregateInput_schema_1 = require("../objects/PackPriceCountAggregateInput.schema");
const PackPriceMinAggregateInput_schema_1 = require("../objects/PackPriceMinAggregateInput.schema");
const PackPriceMaxAggregateInput_schema_1 = require("../objects/PackPriceMaxAggregateInput.schema");
const PackPriceAvgAggregateInput_schema_1 = require("../objects/PackPriceAvgAggregateInput.schema");
const PackPriceSumAggregateInput_schema_1 = require("../objects/PackPriceSumAggregateInput.schema");
const PackPriceOrderByWithAggregationInput_schema_1 = require("../objects/PackPriceOrderByWithAggregationInput.schema");
const PackPriceScalarWhereWithAggregatesInput_schema_1 = require("../objects/PackPriceScalarWhereWithAggregatesInput.schema");
exports.PackPriceInputSchema = {
    findUnique: zod_1.z.object({ select: zod_1.z.lazy(() => PackPriceSelect_schema_1.PackPriceSelectObjectSchema.optional()), include: zod_1.z.lazy(() => PackPriceInclude_schema_1.PackPriceIncludeObjectSchema.optional()), where: PackPriceWhereUniqueInput_schema_1.PackPriceWhereUniqueInputObjectSchema }), findFirst: zod_1.z.object({ select: zod_1.z.lazy(() => PackPriceSelect_schema_1.PackPriceSelectObjectSchema.optional()), include: zod_1.z.lazy(() => PackPriceInclude_schema_1.PackPriceIncludeObjectSchema.optional()), where: PackPriceWhereInput_schema_1.PackPriceWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([PackPriceOrderByWithRelationInput_schema_1.PackPriceOrderByWithRelationInputObjectSchema, PackPriceOrderByWithRelationInput_schema_1.PackPriceOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: PackPriceWhereUniqueInput_schema_1.PackPriceWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(PackPriceScalarFieldEnum_schema_1.PackPriceScalarFieldEnumSchema).optional() }), findMany: zod_1.z.object({ select: zod_1.z.lazy(() => PackPriceSelect_schema_1.PackPriceSelectObjectSchema.optional()), include: zod_1.z.lazy(() => PackPriceInclude_schema_1.PackPriceIncludeObjectSchema.optional()), where: PackPriceWhereInput_schema_1.PackPriceWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([PackPriceOrderByWithRelationInput_schema_1.PackPriceOrderByWithRelationInputObjectSchema, PackPriceOrderByWithRelationInput_schema_1.PackPriceOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: PackPriceWhereUniqueInput_schema_1.PackPriceWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(PackPriceScalarFieldEnum_schema_1.PackPriceScalarFieldEnumSchema).optional() }), create: zod_1.z.object({ select: zod_1.z.lazy(() => PackPriceSelect_schema_1.PackPriceSelectObjectSchema.optional()), include: zod_1.z.lazy(() => PackPriceInclude_schema_1.PackPriceIncludeObjectSchema.optional()), data: zod_1.z.union([PackPriceCreateInput_schema_1.PackPriceCreateInputObjectSchema, PackPriceUncheckedCreateInput_schema_1.PackPriceUncheckedCreateInputObjectSchema]) }), createMany: zod_1.z.object({ data: zod_1.z.union([PackPriceCreateManyInput_schema_1.PackPriceCreateManyInputObjectSchema, zod_1.z.array(PackPriceCreateManyInput_schema_1.PackPriceCreateManyInputObjectSchema)]) }), 'delete': zod_1.z.object({ select: zod_1.z.lazy(() => PackPriceSelect_schema_1.PackPriceSelectObjectSchema.optional()), include: zod_1.z.lazy(() => PackPriceInclude_schema_1.PackPriceIncludeObjectSchema.optional()), where: PackPriceWhereUniqueInput_schema_1.PackPriceWhereUniqueInputObjectSchema }), deleteMany: zod_1.z.object({ where: PackPriceWhereInput_schema_1.PackPriceWhereInputObjectSchema.optional() }), update: zod_1.z.object({ select: zod_1.z.lazy(() => PackPriceSelect_schema_1.PackPriceSelectObjectSchema.optional()), include: zod_1.z.lazy(() => PackPriceInclude_schema_1.PackPriceIncludeObjectSchema.optional()), data: zod_1.z.union([PackPriceUpdateInput_schema_1.PackPriceUpdateInputObjectSchema, PackPriceUncheckedUpdateInput_schema_1.PackPriceUncheckedUpdateInputObjectSchema]), where: PackPriceWhereUniqueInput_schema_1.PackPriceWhereUniqueInputObjectSchema }), updateMany: zod_1.z.object({ data: zod_1.z.union([PackPriceUpdateManyMutationInput_schema_1.PackPriceUpdateManyMutationInputObjectSchema, PackPriceUncheckedUpdateManyInput_schema_1.PackPriceUncheckedUpdateManyInputObjectSchema]), where: PackPriceWhereInput_schema_1.PackPriceWhereInputObjectSchema.optional() }), upsert: zod_1.z.object({ select: zod_1.z.lazy(() => PackPriceSelect_schema_1.PackPriceSelectObjectSchema.optional()), include: zod_1.z.lazy(() => PackPriceInclude_schema_1.PackPriceIncludeObjectSchema.optional()), where: PackPriceWhereUniqueInput_schema_1.PackPriceWhereUniqueInputObjectSchema, create: zod_1.z.union([PackPriceCreateInput_schema_1.PackPriceCreateInputObjectSchema, PackPriceUncheckedCreateInput_schema_1.PackPriceUncheckedCreateInputObjectSchema]), update: zod_1.z.union([PackPriceUpdateInput_schema_1.PackPriceUpdateInputObjectSchema, PackPriceUncheckedUpdateInput_schema_1.PackPriceUncheckedUpdateInputObjectSchema]) }), aggregate: zod_1.z.object({ where: PackPriceWhereInput_schema_1.PackPriceWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([PackPriceOrderByWithRelationInput_schema_1.PackPriceOrderByWithRelationInputObjectSchema, PackPriceOrderByWithRelationInput_schema_1.PackPriceOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: PackPriceWhereUniqueInput_schema_1.PackPriceWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), _count: zod_1.z.union([zod_1.z.literal(true), PackPriceCountAggregateInput_schema_1.PackPriceCountAggregateInputObjectSchema]).optional(), _min: PackPriceMinAggregateInput_schema_1.PackPriceMinAggregateInputObjectSchema.optional(), _max: PackPriceMaxAggregateInput_schema_1.PackPriceMaxAggregateInputObjectSchema.optional(), _avg: PackPriceAvgAggregateInput_schema_1.PackPriceAvgAggregateInputObjectSchema.optional(), _sum: PackPriceSumAggregateInput_schema_1.PackPriceSumAggregateInputObjectSchema.optional() }), groupBy: zod_1.z.object({ where: PackPriceWhereInput_schema_1.PackPriceWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([PackPriceOrderByWithAggregationInput_schema_1.PackPriceOrderByWithAggregationInputObjectSchema, PackPriceOrderByWithAggregationInput_schema_1.PackPriceOrderByWithAggregationInputObjectSchema.array()]).optional(), having: PackPriceScalarWhereWithAggregatesInput_schema_1.PackPriceScalarWhereWithAggregatesInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), by: zod_1.z.array(PackPriceScalarFieldEnum_schema_1.PackPriceScalarFieldEnumSchema), _count: zod_1.z.union([zod_1.z.literal(true), PackPriceCountAggregateInput_schema_1.PackPriceCountAggregateInputObjectSchema]).optional(), _min: PackPriceMinAggregateInput_schema_1.PackPriceMinAggregateInputObjectSchema.optional(), _max: PackPriceMaxAggregateInput_schema_1.PackPriceMaxAggregateInputObjectSchema.optional(), _avg: PackPriceAvgAggregateInput_schema_1.PackPriceAvgAggregateInputObjectSchema.optional(), _sum: PackPriceSumAggregateInput_schema_1.PackPriceSumAggregateInputObjectSchema.optional() }), count: zod_1.z.object({ where: PackPriceWhereInput_schema_1.PackPriceWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([PackPriceOrderByWithRelationInput_schema_1.PackPriceOrderByWithRelationInputObjectSchema, PackPriceOrderByWithRelationInput_schema_1.PackPriceOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: PackPriceWhereUniqueInput_schema_1.PackPriceWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(PackPriceScalarFieldEnum_schema_1.PackPriceScalarFieldEnumSchema).optional(), select: zod_1.z.union([zod_1.z.literal(true), PackPriceCountAggregateInput_schema_1.PackPriceCountAggregateInputObjectSchema]).optional() })
};
