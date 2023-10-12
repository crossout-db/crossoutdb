"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionInputSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
;
const SessionSelect_schema_1 = require("../objects/SessionSelect.schema");
const SessionInclude_schema_1 = require("../objects/SessionInclude.schema");
const SessionWhereUniqueInput_schema_1 = require("../objects/SessionWhereUniqueInput.schema");
const SessionWhereInput_schema_1 = require("../objects/SessionWhereInput.schema");
const SessionOrderByWithRelationInput_schema_1 = require("../objects/SessionOrderByWithRelationInput.schema");
const SessionScalarFieldEnum_schema_1 = require("../enums/SessionScalarFieldEnum.schema");
const SessionCreateInput_schema_1 = require("../objects/SessionCreateInput.schema");
const SessionUncheckedCreateInput_schema_1 = require("../objects/SessionUncheckedCreateInput.schema");
const SessionCreateManyInput_schema_1 = require("../objects/SessionCreateManyInput.schema");
const SessionUpdateInput_schema_1 = require("../objects/SessionUpdateInput.schema");
const SessionUncheckedUpdateInput_schema_1 = require("../objects/SessionUncheckedUpdateInput.schema");
const SessionUpdateManyMutationInput_schema_1 = require("../objects/SessionUpdateManyMutationInput.schema");
const SessionUncheckedUpdateManyInput_schema_1 = require("../objects/SessionUncheckedUpdateManyInput.schema");
const SessionCountAggregateInput_schema_1 = require("../objects/SessionCountAggregateInput.schema");
const SessionMinAggregateInput_schema_1 = require("../objects/SessionMinAggregateInput.schema");
const SessionMaxAggregateInput_schema_1 = require("../objects/SessionMaxAggregateInput.schema");
const SessionOrderByWithAggregationInput_schema_1 = require("../objects/SessionOrderByWithAggregationInput.schema");
const SessionScalarWhereWithAggregatesInput_schema_1 = require("../objects/SessionScalarWhereWithAggregatesInput.schema");
exports.SessionInputSchema = {
    findUnique: zod_1.z.object({ select: zod_1.z.lazy(() => SessionSelect_schema_1.SessionSelectObjectSchema.optional()), include: zod_1.z.lazy(() => SessionInclude_schema_1.SessionIncludeObjectSchema.optional()), where: SessionWhereUniqueInput_schema_1.SessionWhereUniqueInputObjectSchema }), findFirst: zod_1.z.object({ select: zod_1.z.lazy(() => SessionSelect_schema_1.SessionSelectObjectSchema.optional()), include: zod_1.z.lazy(() => SessionInclude_schema_1.SessionIncludeObjectSchema.optional()), where: SessionWhereInput_schema_1.SessionWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([SessionOrderByWithRelationInput_schema_1.SessionOrderByWithRelationInputObjectSchema, SessionOrderByWithRelationInput_schema_1.SessionOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: SessionWhereUniqueInput_schema_1.SessionWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(SessionScalarFieldEnum_schema_1.SessionScalarFieldEnumSchema).optional() }), findMany: zod_1.z.object({ select: zod_1.z.lazy(() => SessionSelect_schema_1.SessionSelectObjectSchema.optional()), include: zod_1.z.lazy(() => SessionInclude_schema_1.SessionIncludeObjectSchema.optional()), where: SessionWhereInput_schema_1.SessionWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([SessionOrderByWithRelationInput_schema_1.SessionOrderByWithRelationInputObjectSchema, SessionOrderByWithRelationInput_schema_1.SessionOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: SessionWhereUniqueInput_schema_1.SessionWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(SessionScalarFieldEnum_schema_1.SessionScalarFieldEnumSchema).optional() }), create: zod_1.z.object({ select: zod_1.z.lazy(() => SessionSelect_schema_1.SessionSelectObjectSchema.optional()), include: zod_1.z.lazy(() => SessionInclude_schema_1.SessionIncludeObjectSchema.optional()), data: zod_1.z.union([SessionCreateInput_schema_1.SessionCreateInputObjectSchema, SessionUncheckedCreateInput_schema_1.SessionUncheckedCreateInputObjectSchema]) }), createMany: zod_1.z.object({ data: zod_1.z.union([SessionCreateManyInput_schema_1.SessionCreateManyInputObjectSchema, zod_1.z.array(SessionCreateManyInput_schema_1.SessionCreateManyInputObjectSchema)]) }), 'delete': zod_1.z.object({ select: zod_1.z.lazy(() => SessionSelect_schema_1.SessionSelectObjectSchema.optional()), include: zod_1.z.lazy(() => SessionInclude_schema_1.SessionIncludeObjectSchema.optional()), where: SessionWhereUniqueInput_schema_1.SessionWhereUniqueInputObjectSchema }), deleteMany: zod_1.z.object({ where: SessionWhereInput_schema_1.SessionWhereInputObjectSchema.optional() }), update: zod_1.z.object({ select: zod_1.z.lazy(() => SessionSelect_schema_1.SessionSelectObjectSchema.optional()), include: zod_1.z.lazy(() => SessionInclude_schema_1.SessionIncludeObjectSchema.optional()), data: zod_1.z.union([SessionUpdateInput_schema_1.SessionUpdateInputObjectSchema, SessionUncheckedUpdateInput_schema_1.SessionUncheckedUpdateInputObjectSchema]), where: SessionWhereUniqueInput_schema_1.SessionWhereUniqueInputObjectSchema }), updateMany: zod_1.z.object({ data: zod_1.z.union([SessionUpdateManyMutationInput_schema_1.SessionUpdateManyMutationInputObjectSchema, SessionUncheckedUpdateManyInput_schema_1.SessionUncheckedUpdateManyInputObjectSchema]), where: SessionWhereInput_schema_1.SessionWhereInputObjectSchema.optional() }), upsert: zod_1.z.object({ select: zod_1.z.lazy(() => SessionSelect_schema_1.SessionSelectObjectSchema.optional()), include: zod_1.z.lazy(() => SessionInclude_schema_1.SessionIncludeObjectSchema.optional()), where: SessionWhereUniqueInput_schema_1.SessionWhereUniqueInputObjectSchema, create: zod_1.z.union([SessionCreateInput_schema_1.SessionCreateInputObjectSchema, SessionUncheckedCreateInput_schema_1.SessionUncheckedCreateInputObjectSchema]), update: zod_1.z.union([SessionUpdateInput_schema_1.SessionUpdateInputObjectSchema, SessionUncheckedUpdateInput_schema_1.SessionUncheckedUpdateInputObjectSchema]) }), aggregate: zod_1.z.object({ where: SessionWhereInput_schema_1.SessionWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([SessionOrderByWithRelationInput_schema_1.SessionOrderByWithRelationInputObjectSchema, SessionOrderByWithRelationInput_schema_1.SessionOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: SessionWhereUniqueInput_schema_1.SessionWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), _count: zod_1.z.union([zod_1.z.literal(true), SessionCountAggregateInput_schema_1.SessionCountAggregateInputObjectSchema]).optional(), _min: SessionMinAggregateInput_schema_1.SessionMinAggregateInputObjectSchema.optional(), _max: SessionMaxAggregateInput_schema_1.SessionMaxAggregateInputObjectSchema.optional() }), groupBy: zod_1.z.object({ where: SessionWhereInput_schema_1.SessionWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([SessionOrderByWithAggregationInput_schema_1.SessionOrderByWithAggregationInputObjectSchema, SessionOrderByWithAggregationInput_schema_1.SessionOrderByWithAggregationInputObjectSchema.array()]).optional(), having: SessionScalarWhereWithAggregatesInput_schema_1.SessionScalarWhereWithAggregatesInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), by: zod_1.z.array(SessionScalarFieldEnum_schema_1.SessionScalarFieldEnumSchema), _count: zod_1.z.union([zod_1.z.literal(true), SessionCountAggregateInput_schema_1.SessionCountAggregateInputObjectSchema]).optional(), _min: SessionMinAggregateInput_schema_1.SessionMinAggregateInputObjectSchema.optional(), _max: SessionMaxAggregateInput_schema_1.SessionMaxAggregateInputObjectSchema.optional() }), count: zod_1.z.object({ where: SessionWhereInput_schema_1.SessionWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([SessionOrderByWithRelationInput_schema_1.SessionOrderByWithRelationInputObjectSchema, SessionOrderByWithRelationInput_schema_1.SessionOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: SessionWhereUniqueInput_schema_1.SessionWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(SessionScalarFieldEnum_schema_1.SessionScalarFieldEnumSchema).optional(), select: zod_1.z.union([zod_1.z.literal(true), SessionCountAggregateInput_schema_1.SessionCountAggregateInputObjectSchema]).optional() })
};
