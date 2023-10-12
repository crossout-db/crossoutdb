"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseCreateOrConnectWithoutRecipesInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ReleaseWhereUniqueInput_schema_1 = require("./ReleaseWhereUniqueInput.schema");
const ReleaseCreateWithoutRecipesInput_schema_1 = require("./ReleaseCreateWithoutRecipesInput.schema");
const ReleaseUncheckedCreateWithoutRecipesInput_schema_1 = require("./ReleaseUncheckedCreateWithoutRecipesInput.schema");
exports.ReleaseCreateOrConnectWithoutRecipesInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ReleaseWhereUniqueInput_schema_1.ReleaseWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ReleaseCreateWithoutRecipesInput_schema_1.ReleaseCreateWithoutRecipesInputObjectSchema),
        zod_1.z.lazy(() => ReleaseUncheckedCreateWithoutRecipesInput_schema_1.ReleaseUncheckedCreateWithoutRecipesInputObjectSchema)])
}).strict();
