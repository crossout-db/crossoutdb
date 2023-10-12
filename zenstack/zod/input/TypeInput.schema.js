"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeInputSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
;
const TypeSelect_schema_1 = require("../objects/TypeSelect.schema");
const TypeInclude_schema_1 = require("../objects/TypeInclude.schema");
const TypeWhereUniqueInput_schema_1 = require("../objects/TypeWhereUniqueInput.schema");
const TypeWhereInput_schema_1 = require("../objects/TypeWhereInput.schema");
const TypeOrderByWithRelationInput_schema_1 = require("../objects/TypeOrderByWithRelationInput.schema");
const TypeScalarFieldEnum_schema_1 = require("../enums/TypeScalarFieldEnum.schema");
const TypeCreateInput_schema_1 = require("../objects/TypeCreateInput.schema");
const TypeUncheckedCreateInput_schema_1 = require("../objects/TypeUncheckedCreateInput.schema");
const TypeCreateManyInput_schema_1 = require("../objects/TypeCreateManyInput.schema");
const TypeUpdateInput_schema_1 = require("../objects/TypeUpdateInput.schema");
const TypeUncheckedUpdateInput_schema_1 = require("../objects/TypeUncheckedUpdateInput.schema");
const TypeUpdateManyMutationInput_schema_1 = require("../objects/TypeUpdateManyMutationInput.schema");
const TypeUncheckedUpdateManyInput_schema_1 = require("../objects/TypeUncheckedUpdateManyInput.schema");
const TypeCountAggregateInput_schema_1 = require("../objects/TypeCountAggregateInput.schema");
const TypeMinAggregateInput_schema_1 = require("../objects/TypeMinAggregateInput.schema");
const TypeMaxAggregateInput_schema_1 = require("../objects/TypeMaxAggregateInput.schema");
const TypeAvgAggregateInput_schema_1 = require("../objects/TypeAvgAggregateInput.schema");
const TypeSumAggregateInput_schema_1 = require("../objects/TypeSumAggregateInput.schema");
const TypeOrderByWithAggregationInput_schema_1 = require("../objects/TypeOrderByWithAggregationInput.schema");
const TypeScalarWhereWithAggregatesInput_schema_1 = require("../objects/TypeScalarWhereWithAggregatesInput.schema");
exports.TypeInputSchema = {
    findUnique: zod_1.z.object({ select: zod_1.z.lazy(() => TypeSelect_schema_1.TypeSelectObjectSchema.optional()), include: zod_1.z.lazy(() => TypeInclude_schema_1.TypeIncludeObjectSchema.optional()), where: TypeWhereUniqueInput_schema_1.TypeWhereUniqueInputObjectSchema }), findFirst: zod_1.z.object({ select: zod_1.z.lazy(() => TypeSelect_schema_1.TypeSelectObjectSchema.optional()), include: zod_1.z.lazy(() => TypeInclude_schema_1.TypeIncludeObjectSchema.optional()), where: TypeWhereInput_schema_1.TypeWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([TypeOrderByWithRelationInput_schema_1.TypeOrderByWithRelationInputObjectSchema, TypeOrderByWithRelationInput_schema_1.TypeOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: TypeWhereUniqueInput_schema_1.TypeWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(TypeScalarFieldEnum_schema_1.TypeScalarFieldEnumSchema).optional() }), findMany: zod_1.z.object({ select: zod_1.z.lazy(() => TypeSelect_schema_1.TypeSelectObjectSchema.optional()), include: zod_1.z.lazy(() => TypeInclude_schema_1.TypeIncludeObjectSchema.optional()), where: TypeWhereInput_schema_1.TypeWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([TypeOrderByWithRelationInput_schema_1.TypeOrderByWithRelationInputObjectSchema, TypeOrderByWithRelationInput_schema_1.TypeOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: TypeWhereUniqueInput_schema_1.TypeWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(TypeScalarFieldEnum_schema_1.TypeScalarFieldEnumSchema).optional() }), create: zod_1.z.object({ select: zod_1.z.lazy(() => TypeSelect_schema_1.TypeSelectObjectSchema.optional()), include: zod_1.z.lazy(() => TypeInclude_schema_1.TypeIncludeObjectSchema.optional()), data: zod_1.z.union([TypeCreateInput_schema_1.TypeCreateInputObjectSchema, TypeUncheckedCreateInput_schema_1.TypeUncheckedCreateInputObjectSchema]) }), createMany: zod_1.z.object({ data: zod_1.z.union([TypeCreateManyInput_schema_1.TypeCreateManyInputObjectSchema, zod_1.z.array(TypeCreateManyInput_schema_1.TypeCreateManyInputObjectSchema)]) }), 'delete': zod_1.z.object({ select: zod_1.z.lazy(() => TypeSelect_schema_1.TypeSelectObjectSchema.optional()), include: zod_1.z.lazy(() => TypeInclude_schema_1.TypeIncludeObjectSchema.optional()), where: TypeWhereUniqueInput_schema_1.TypeWhereUniqueInputObjectSchema }), deleteMany: zod_1.z.object({ where: TypeWhereInput_schema_1.TypeWhereInputObjectSchema.optional() }), update: zod_1.z.object({ select: zod_1.z.lazy(() => TypeSelect_schema_1.TypeSelectObjectSchema.optional()), include: zod_1.z.lazy(() => TypeInclude_schema_1.TypeIncludeObjectSchema.optional()), data: zod_1.z.union([TypeUpdateInput_schema_1.TypeUpdateInputObjectSchema, TypeUncheckedUpdateInput_schema_1.TypeUncheckedUpdateInputObjectSchema]), where: TypeWhereUniqueInput_schema_1.TypeWhereUniqueInputObjectSchema }), updateMany: zod_1.z.object({ data: zod_1.z.union([TypeUpdateManyMutationInput_schema_1.TypeUpdateManyMutationInputObjectSchema, TypeUncheckedUpdateManyInput_schema_1.TypeUncheckedUpdateManyInputObjectSchema]), where: TypeWhereInput_schema_1.TypeWhereInputObjectSchema.optional() }), upsert: zod_1.z.object({ select: zod_1.z.lazy(() => TypeSelect_schema_1.TypeSelectObjectSchema.optional()), include: zod_1.z.lazy(() => TypeInclude_schema_1.TypeIncludeObjectSchema.optional()), where: TypeWhereUniqueInput_schema_1.TypeWhereUniqueInputObjectSchema, create: zod_1.z.union([TypeCreateInput_schema_1.TypeCreateInputObjectSchema, TypeUncheckedCreateInput_schema_1.TypeUncheckedCreateInputObjectSchema]), update: zod_1.z.union([TypeUpdateInput_schema_1.TypeUpdateInputObjectSchema, TypeUncheckedUpdateInput_schema_1.TypeUncheckedUpdateInputObjectSchema]) }), aggregate: zod_1.z.object({ where: TypeWhereInput_schema_1.TypeWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([TypeOrderByWithRelationInput_schema_1.TypeOrderByWithRelationInputObjectSchema, TypeOrderByWithRelationInput_schema_1.TypeOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: TypeWhereUniqueInput_schema_1.TypeWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), _count: zod_1.z.union([zod_1.z.literal(true), TypeCountAggregateInput_schema_1.TypeCountAggregateInputObjectSchema]).optional(), _min: TypeMinAggregateInput_schema_1.TypeMinAggregateInputObjectSchema.optional(), _max: TypeMaxAggregateInput_schema_1.TypeMaxAggregateInputObjectSchema.optional(), _avg: TypeAvgAggregateInput_schema_1.TypeAvgAggregateInputObjectSchema.optional(), _sum: TypeSumAggregateInput_schema_1.TypeSumAggregateInputObjectSchema.optional() }), groupBy: zod_1.z.object({ where: TypeWhereInput_schema_1.TypeWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([TypeOrderByWithAggregationInput_schema_1.TypeOrderByWithAggregationInputObjectSchema, TypeOrderByWithAggregationInput_schema_1.TypeOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TypeScalarWhereWithAggregatesInput_schema_1.TypeScalarWhereWithAggregatesInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), by: zod_1.z.array(TypeScalarFieldEnum_schema_1.TypeScalarFieldEnumSchema), _count: zod_1.z.union([zod_1.z.literal(true), TypeCountAggregateInput_schema_1.TypeCountAggregateInputObjectSchema]).optional(), _min: TypeMinAggregateInput_schema_1.TypeMinAggregateInputObjectSchema.optional(), _max: TypeMaxAggregateInput_schema_1.TypeMaxAggregateInputObjectSchema.optional(), _avg: TypeAvgAggregateInput_schema_1.TypeAvgAggregateInputObjectSchema.optional(), _sum: TypeSumAggregateInput_schema_1.TypeSumAggregateInputObjectSchema.optional() }), count: zod_1.z.object({ where: TypeWhereInput_schema_1.TypeWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([TypeOrderByWithRelationInput_schema_1.TypeOrderByWithRelationInputObjectSchema, TypeOrderByWithRelationInput_schema_1.TypeOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: TypeWhereUniqueInput_schema_1.TypeWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(TypeScalarFieldEnum_schema_1.TypeScalarFieldEnumSchema).optional(), select: zod_1.z.union([zod_1.z.literal(true), TypeCountAggregateInput_schema_1.TypeCountAggregateInputObjectSchema]).optional() })
};
