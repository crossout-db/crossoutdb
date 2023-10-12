"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeItemUpdateManyWithoutItemNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeItemCreateWithoutItemInput_schema_1 = require("./RecipeItemCreateWithoutItemInput.schema");
const RecipeItemUncheckedCreateWithoutItemInput_schema_1 = require("./RecipeItemUncheckedCreateWithoutItemInput.schema");
const RecipeItemCreateOrConnectWithoutItemInput_schema_1 = require("./RecipeItemCreateOrConnectWithoutItemInput.schema");
const RecipeItemUpsertWithWhereUniqueWithoutItemInput_schema_1 = require("./RecipeItemUpsertWithWhereUniqueWithoutItemInput.schema");
const RecipeItemCreateManyItemInputEnvelope_schema_1 = require("./RecipeItemCreateManyItemInputEnvelope.schema");
const RecipeItemWhereUniqueInput_schema_1 = require("./RecipeItemWhereUniqueInput.schema");
const RecipeItemUpdateWithWhereUniqueWithoutItemInput_schema_1 = require("./RecipeItemUpdateWithWhereUniqueWithoutItemInput.schema");
const RecipeItemUpdateManyWithWhereWithoutItemInput_schema_1 = require("./RecipeItemUpdateManyWithWhereWithoutItemInput.schema");
const RecipeItemScalarWhereInput_schema_1 = require("./RecipeItemScalarWhereInput.schema");
exports.RecipeItemUpdateManyWithoutItemNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => RecipeItemCreateWithoutItemInput_schema_1.RecipeItemCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemCreateWithoutItemInput_schema_1.RecipeItemCreateWithoutItemInputObjectSchema).array(),
        zod_1.z.lazy(() => RecipeItemUncheckedCreateWithoutItemInput_schema_1.RecipeItemUncheckedCreateWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemUncheckedCreateWithoutItemInput_schema_1.RecipeItemUncheckedCreateWithoutItemInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => RecipeItemCreateOrConnectWithoutItemInput_schema_1.RecipeItemCreateOrConnectWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemCreateOrConnectWithoutItemInput_schema_1.RecipeItemCreateOrConnectWithoutItemInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => RecipeItemUpsertWithWhereUniqueWithoutItemInput_schema_1.RecipeItemUpsertWithWhereUniqueWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemUpsertWithWhereUniqueWithoutItemInput_schema_1.RecipeItemUpsertWithWhereUniqueWithoutItemInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => RecipeItemCreateManyItemInputEnvelope_schema_1.RecipeItemCreateManyItemInputEnvelopeObjectSchema).optional(), set: zod_1.z.union([zod_1.z.lazy(() => RecipeItemWhereUniqueInput_schema_1.RecipeItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemWhereUniqueInput_schema_1.RecipeItemWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => RecipeItemWhereUniqueInput_schema_1.RecipeItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemWhereUniqueInput_schema_1.RecipeItemWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => RecipeItemWhereUniqueInput_schema_1.RecipeItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemWhereUniqueInput_schema_1.RecipeItemWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => RecipeItemWhereUniqueInput_schema_1.RecipeItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemWhereUniqueInput_schema_1.RecipeItemWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => RecipeItemUpdateWithWhereUniqueWithoutItemInput_schema_1.RecipeItemUpdateWithWhereUniqueWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemUpdateWithWhereUniqueWithoutItemInput_schema_1.RecipeItemUpdateWithWhereUniqueWithoutItemInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => RecipeItemUpdateManyWithWhereWithoutItemInput_schema_1.RecipeItemUpdateManyWithWhereWithoutItemInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemUpdateManyWithWhereWithoutItemInput_schema_1.RecipeItemUpdateManyWithWhereWithoutItemInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => RecipeItemScalarWhereInput_schema_1.RecipeItemScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemScalarWhereInput_schema_1.RecipeItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
