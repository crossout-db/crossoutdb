"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeItemUpdateManyWithoutRecipeNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RecipeItemCreateWithoutRecipeInput_schema_1 = require("./RecipeItemCreateWithoutRecipeInput.schema");
const RecipeItemUncheckedCreateWithoutRecipeInput_schema_1 = require("./RecipeItemUncheckedCreateWithoutRecipeInput.schema");
const RecipeItemCreateOrConnectWithoutRecipeInput_schema_1 = require("./RecipeItemCreateOrConnectWithoutRecipeInput.schema");
const RecipeItemUpsertWithWhereUniqueWithoutRecipeInput_schema_1 = require("./RecipeItemUpsertWithWhereUniqueWithoutRecipeInput.schema");
const RecipeItemCreateManyRecipeInputEnvelope_schema_1 = require("./RecipeItemCreateManyRecipeInputEnvelope.schema");
const RecipeItemWhereUniqueInput_schema_1 = require("./RecipeItemWhereUniqueInput.schema");
const RecipeItemUpdateWithWhereUniqueWithoutRecipeInput_schema_1 = require("./RecipeItemUpdateWithWhereUniqueWithoutRecipeInput.schema");
const RecipeItemUpdateManyWithWhereWithoutRecipeInput_schema_1 = require("./RecipeItemUpdateManyWithWhereWithoutRecipeInput.schema");
const RecipeItemScalarWhereInput_schema_1 = require("./RecipeItemScalarWhereInput.schema");
exports.RecipeItemUpdateManyWithoutRecipeNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => RecipeItemCreateWithoutRecipeInput_schema_1.RecipeItemCreateWithoutRecipeInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemCreateWithoutRecipeInput_schema_1.RecipeItemCreateWithoutRecipeInputObjectSchema).array(),
        zod_1.z.lazy(() => RecipeItemUncheckedCreateWithoutRecipeInput_schema_1.RecipeItemUncheckedCreateWithoutRecipeInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemUncheckedCreateWithoutRecipeInput_schema_1.RecipeItemUncheckedCreateWithoutRecipeInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => RecipeItemCreateOrConnectWithoutRecipeInput_schema_1.RecipeItemCreateOrConnectWithoutRecipeInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemCreateOrConnectWithoutRecipeInput_schema_1.RecipeItemCreateOrConnectWithoutRecipeInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => RecipeItemUpsertWithWhereUniqueWithoutRecipeInput_schema_1.RecipeItemUpsertWithWhereUniqueWithoutRecipeInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemUpsertWithWhereUniqueWithoutRecipeInput_schema_1.RecipeItemUpsertWithWhereUniqueWithoutRecipeInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => RecipeItemCreateManyRecipeInputEnvelope_schema_1.RecipeItemCreateManyRecipeInputEnvelopeObjectSchema).optional(), set: zod_1.z.union([zod_1.z.lazy(() => RecipeItemWhereUniqueInput_schema_1.RecipeItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemWhereUniqueInput_schema_1.RecipeItemWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => RecipeItemWhereUniqueInput_schema_1.RecipeItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemWhereUniqueInput_schema_1.RecipeItemWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => RecipeItemWhereUniqueInput_schema_1.RecipeItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemWhereUniqueInput_schema_1.RecipeItemWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => RecipeItemWhereUniqueInput_schema_1.RecipeItemWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemWhereUniqueInput_schema_1.RecipeItemWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => RecipeItemUpdateWithWhereUniqueWithoutRecipeInput_schema_1.RecipeItemUpdateWithWhereUniqueWithoutRecipeInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemUpdateWithWhereUniqueWithoutRecipeInput_schema_1.RecipeItemUpdateWithWhereUniqueWithoutRecipeInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => RecipeItemUpdateManyWithWhereWithoutRecipeInput_schema_1.RecipeItemUpdateManyWithWhereWithoutRecipeInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemUpdateManyWithWhereWithoutRecipeInput_schema_1.RecipeItemUpdateManyWithWhereWithoutRecipeInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => RecipeItemScalarWhereInput_schema_1.RecipeItemScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => RecipeItemScalarWhereInput_schema_1.RecipeItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
