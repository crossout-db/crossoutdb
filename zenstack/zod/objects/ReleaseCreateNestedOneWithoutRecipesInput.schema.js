"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseCreateNestedOneWithoutRecipesInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ReleaseCreateWithoutRecipesInput_schema_1 = require("./ReleaseCreateWithoutRecipesInput.schema");
const ReleaseUncheckedCreateWithoutRecipesInput_schema_1 = require("./ReleaseUncheckedCreateWithoutRecipesInput.schema");
const ReleaseCreateOrConnectWithoutRecipesInput_schema_1 = require("./ReleaseCreateOrConnectWithoutRecipesInput.schema");
const ReleaseWhereUniqueInput_schema_1 = require("./ReleaseWhereUniqueInput.schema");
exports.ReleaseCreateNestedOneWithoutRecipesInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ReleaseCreateWithoutRecipesInput_schema_1.ReleaseCreateWithoutRecipesInputObjectSchema),
        zod_1.z.lazy(() => ReleaseUncheckedCreateWithoutRecipesInput_schema_1.ReleaseUncheckedCreateWithoutRecipesInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ReleaseCreateOrConnectWithoutRecipesInput_schema_1.ReleaseCreateOrConnectWithoutRecipesInputObjectSchema).optional(), connect: zod_1.z.lazy(() => ReleaseWhereUniqueInput_schema_1.ReleaseWhereUniqueInputObjectSchema).optional()
}).strict();
