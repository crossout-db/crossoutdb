"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseUpdateOneWithoutRecipesNestedInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ReleaseCreateWithoutRecipesInput_schema_1 = require("./ReleaseCreateWithoutRecipesInput.schema");
const ReleaseUncheckedCreateWithoutRecipesInput_schema_1 = require("./ReleaseUncheckedCreateWithoutRecipesInput.schema");
const ReleaseCreateOrConnectWithoutRecipesInput_schema_1 = require("./ReleaseCreateOrConnectWithoutRecipesInput.schema");
const ReleaseUpsertWithoutRecipesInput_schema_1 = require("./ReleaseUpsertWithoutRecipesInput.schema");
const ReleaseWhereInput_schema_1 = require("./ReleaseWhereInput.schema");
const ReleaseWhereUniqueInput_schema_1 = require("./ReleaseWhereUniqueInput.schema");
const ReleaseUpdateToOneWithWhereWithoutRecipesInput_schema_1 = require("./ReleaseUpdateToOneWithWhereWithoutRecipesInput.schema");
const ReleaseUpdateWithoutRecipesInput_schema_1 = require("./ReleaseUpdateWithoutRecipesInput.schema");
const ReleaseUncheckedUpdateWithoutRecipesInput_schema_1 = require("./ReleaseUncheckedUpdateWithoutRecipesInput.schema");
exports.ReleaseUpdateOneWithoutRecipesNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ReleaseCreateWithoutRecipesInput_schema_1.ReleaseCreateWithoutRecipesInputObjectSchema),
        zod_1.z.lazy(() => ReleaseUncheckedCreateWithoutRecipesInput_schema_1.ReleaseUncheckedCreateWithoutRecipesInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ReleaseCreateOrConnectWithoutRecipesInput_schema_1.ReleaseCreateOrConnectWithoutRecipesInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => ReleaseUpsertWithoutRecipesInput_schema_1.ReleaseUpsertWithoutRecipesInputObjectSchema).optional(), disconnect: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ReleaseWhereInput_schema_1.ReleaseWhereInputObjectSchema)]).optional(), delete: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ReleaseWhereInput_schema_1.ReleaseWhereInputObjectSchema)]).optional(), connect: zod_1.z.lazy(() => ReleaseWhereUniqueInput_schema_1.ReleaseWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => ReleaseUpdateToOneWithWhereWithoutRecipesInput_schema_1.ReleaseUpdateToOneWithWhereWithoutRecipesInputObjectSchema),
        zod_1.z.lazy(() => ReleaseUpdateWithoutRecipesInput_schema_1.ReleaseUpdateWithoutRecipesInputObjectSchema),
        zod_1.z.lazy(() => ReleaseUncheckedUpdateWithoutRecipesInput_schema_1.ReleaseUncheckedUpdateWithoutRecipesInputObjectSchema)]).optional()
}).strict();
