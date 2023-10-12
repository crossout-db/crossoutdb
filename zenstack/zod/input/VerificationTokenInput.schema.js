"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenInputSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
;
const VerificationTokenSelect_schema_1 = require("../objects/VerificationTokenSelect.schema");
;
const VerificationTokenWhereUniqueInput_schema_1 = require("../objects/VerificationTokenWhereUniqueInput.schema");
const VerificationTokenWhereInput_schema_1 = require("../objects/VerificationTokenWhereInput.schema");
const VerificationTokenOrderByWithRelationInput_schema_1 = require("../objects/VerificationTokenOrderByWithRelationInput.schema");
const VerificationTokenScalarFieldEnum_schema_1 = require("../enums/VerificationTokenScalarFieldEnum.schema");
const VerificationTokenCreateInput_schema_1 = require("../objects/VerificationTokenCreateInput.schema");
const VerificationTokenUncheckedCreateInput_schema_1 = require("../objects/VerificationTokenUncheckedCreateInput.schema");
const VerificationTokenCreateManyInput_schema_1 = require("../objects/VerificationTokenCreateManyInput.schema");
const VerificationTokenUpdateInput_schema_1 = require("../objects/VerificationTokenUpdateInput.schema");
const VerificationTokenUncheckedUpdateInput_schema_1 = require("../objects/VerificationTokenUncheckedUpdateInput.schema");
const VerificationTokenUpdateManyMutationInput_schema_1 = require("../objects/VerificationTokenUpdateManyMutationInput.schema");
const VerificationTokenUncheckedUpdateManyInput_schema_1 = require("../objects/VerificationTokenUncheckedUpdateManyInput.schema");
const VerificationTokenCountAggregateInput_schema_1 = require("../objects/VerificationTokenCountAggregateInput.schema");
const VerificationTokenMinAggregateInput_schema_1 = require("../objects/VerificationTokenMinAggregateInput.schema");
const VerificationTokenMaxAggregateInput_schema_1 = require("../objects/VerificationTokenMaxAggregateInput.schema");
const VerificationTokenOrderByWithAggregationInput_schema_1 = require("../objects/VerificationTokenOrderByWithAggregationInput.schema");
const VerificationTokenScalarWhereWithAggregatesInput_schema_1 = require("../objects/VerificationTokenScalarWhereWithAggregatesInput.schema");
exports.VerificationTokenInputSchema = {
    findUnique: zod_1.z.object({ select: zod_1.z.lazy(() => VerificationTokenSelect_schema_1.VerificationTokenSelectObjectSchema.optional()), where: VerificationTokenWhereUniqueInput_schema_1.VerificationTokenWhereUniqueInputObjectSchema }), findFirst: zod_1.z.object({ select: zod_1.z.lazy(() => VerificationTokenSelect_schema_1.VerificationTokenSelectObjectSchema.optional()), where: VerificationTokenWhereInput_schema_1.VerificationTokenWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([VerificationTokenOrderByWithRelationInput_schema_1.VerificationTokenOrderByWithRelationInputObjectSchema, VerificationTokenOrderByWithRelationInput_schema_1.VerificationTokenOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: VerificationTokenWhereUniqueInput_schema_1.VerificationTokenWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(VerificationTokenScalarFieldEnum_schema_1.VerificationTokenScalarFieldEnumSchema).optional() }), findMany: zod_1.z.object({ select: zod_1.z.lazy(() => VerificationTokenSelect_schema_1.VerificationTokenSelectObjectSchema.optional()), where: VerificationTokenWhereInput_schema_1.VerificationTokenWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([VerificationTokenOrderByWithRelationInput_schema_1.VerificationTokenOrderByWithRelationInputObjectSchema, VerificationTokenOrderByWithRelationInput_schema_1.VerificationTokenOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: VerificationTokenWhereUniqueInput_schema_1.VerificationTokenWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(VerificationTokenScalarFieldEnum_schema_1.VerificationTokenScalarFieldEnumSchema).optional() }), create: zod_1.z.object({ select: zod_1.z.lazy(() => VerificationTokenSelect_schema_1.VerificationTokenSelectObjectSchema.optional()), data: zod_1.z.union([VerificationTokenCreateInput_schema_1.VerificationTokenCreateInputObjectSchema, VerificationTokenUncheckedCreateInput_schema_1.VerificationTokenUncheckedCreateInputObjectSchema]) }), createMany: zod_1.z.object({ data: zod_1.z.union([VerificationTokenCreateManyInput_schema_1.VerificationTokenCreateManyInputObjectSchema, zod_1.z.array(VerificationTokenCreateManyInput_schema_1.VerificationTokenCreateManyInputObjectSchema)]) }), 'delete': zod_1.z.object({ select: zod_1.z.lazy(() => VerificationTokenSelect_schema_1.VerificationTokenSelectObjectSchema.optional()), where: VerificationTokenWhereUniqueInput_schema_1.VerificationTokenWhereUniqueInputObjectSchema }), deleteMany: zod_1.z.object({ where: VerificationTokenWhereInput_schema_1.VerificationTokenWhereInputObjectSchema.optional() }), update: zod_1.z.object({ select: zod_1.z.lazy(() => VerificationTokenSelect_schema_1.VerificationTokenSelectObjectSchema.optional()), data: zod_1.z.union([VerificationTokenUpdateInput_schema_1.VerificationTokenUpdateInputObjectSchema, VerificationTokenUncheckedUpdateInput_schema_1.VerificationTokenUncheckedUpdateInputObjectSchema]), where: VerificationTokenWhereUniqueInput_schema_1.VerificationTokenWhereUniqueInputObjectSchema }), updateMany: zod_1.z.object({ data: zod_1.z.union([VerificationTokenUpdateManyMutationInput_schema_1.VerificationTokenUpdateManyMutationInputObjectSchema, VerificationTokenUncheckedUpdateManyInput_schema_1.VerificationTokenUncheckedUpdateManyInputObjectSchema]), where: VerificationTokenWhereInput_schema_1.VerificationTokenWhereInputObjectSchema.optional() }), upsert: zod_1.z.object({ select: zod_1.z.lazy(() => VerificationTokenSelect_schema_1.VerificationTokenSelectObjectSchema.optional()), where: VerificationTokenWhereUniqueInput_schema_1.VerificationTokenWhereUniqueInputObjectSchema, create: zod_1.z.union([VerificationTokenCreateInput_schema_1.VerificationTokenCreateInputObjectSchema, VerificationTokenUncheckedCreateInput_schema_1.VerificationTokenUncheckedCreateInputObjectSchema]), update: zod_1.z.union([VerificationTokenUpdateInput_schema_1.VerificationTokenUpdateInputObjectSchema, VerificationTokenUncheckedUpdateInput_schema_1.VerificationTokenUncheckedUpdateInputObjectSchema]) }), aggregate: zod_1.z.object({ where: VerificationTokenWhereInput_schema_1.VerificationTokenWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([VerificationTokenOrderByWithRelationInput_schema_1.VerificationTokenOrderByWithRelationInputObjectSchema, VerificationTokenOrderByWithRelationInput_schema_1.VerificationTokenOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: VerificationTokenWhereUniqueInput_schema_1.VerificationTokenWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), _count: zod_1.z.union([zod_1.z.literal(true), VerificationTokenCountAggregateInput_schema_1.VerificationTokenCountAggregateInputObjectSchema]).optional(), _min: VerificationTokenMinAggregateInput_schema_1.VerificationTokenMinAggregateInputObjectSchema.optional(), _max: VerificationTokenMaxAggregateInput_schema_1.VerificationTokenMaxAggregateInputObjectSchema.optional() }), groupBy: zod_1.z.object({ where: VerificationTokenWhereInput_schema_1.VerificationTokenWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([VerificationTokenOrderByWithAggregationInput_schema_1.VerificationTokenOrderByWithAggregationInputObjectSchema, VerificationTokenOrderByWithAggregationInput_schema_1.VerificationTokenOrderByWithAggregationInputObjectSchema.array()]).optional(), having: VerificationTokenScalarWhereWithAggregatesInput_schema_1.VerificationTokenScalarWhereWithAggregatesInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), by: zod_1.z.array(VerificationTokenScalarFieldEnum_schema_1.VerificationTokenScalarFieldEnumSchema), _count: zod_1.z.union([zod_1.z.literal(true), VerificationTokenCountAggregateInput_schema_1.VerificationTokenCountAggregateInputObjectSchema]).optional(), _min: VerificationTokenMinAggregateInput_schema_1.VerificationTokenMinAggregateInputObjectSchema.optional(), _max: VerificationTokenMaxAggregateInput_schema_1.VerificationTokenMaxAggregateInputObjectSchema.optional() }), count: zod_1.z.object({ where: VerificationTokenWhereInput_schema_1.VerificationTokenWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([VerificationTokenOrderByWithRelationInput_schema_1.VerificationTokenOrderByWithRelationInputObjectSchema, VerificationTokenOrderByWithRelationInput_schema_1.VerificationTokenOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: VerificationTokenWhereUniqueInput_schema_1.VerificationTokenWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(VerificationTokenScalarFieldEnum_schema_1.VerificationTokenScalarFieldEnumSchema).optional(), select: zod_1.z.union([zod_1.z.literal(true), VerificationTokenCountAggregateInput_schema_1.VerificationTokenCountAggregateInputObjectSchema]).optional() })
};