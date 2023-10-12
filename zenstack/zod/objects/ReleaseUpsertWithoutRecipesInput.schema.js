"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseUpsertWithoutRecipesInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ReleaseUpdateWithoutRecipesInput_schema_1 = require("./ReleaseUpdateWithoutRecipesInput.schema");
const ReleaseUncheckedUpdateWithoutRecipesInput_schema_1 = require("./ReleaseUncheckedUpdateWithoutRecipesInput.schema");
const ReleaseCreateWithoutRecipesInput_schema_1 = require("./ReleaseCreateWithoutRecipesInput.schema");
const ReleaseUncheckedCreateWithoutRecipesInput_schema_1 = require("./ReleaseUncheckedCreateWithoutRecipesInput.schema");
const ReleaseWhereInput_schema_1 = require("./ReleaseWhereInput.schema");
exports.ReleaseUpsertWithoutRecipesInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => ReleaseUpdateWithoutRecipesInput_schema_1.ReleaseUpdateWithoutRecipesInputObjectSchema),
        zod_1.z.lazy(() => ReleaseUncheckedUpdateWithoutRecipesInput_schema_1.ReleaseUncheckedUpdateWithoutRecipesInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ReleaseCreateWithoutRecipesInput_schema_1.ReleaseCreateWithoutRecipesInputObjectSchema),
        zod_1.z.lazy(() => ReleaseUncheckedCreateWithoutRecipesInput_schema_1.ReleaseUncheckedCreateWithoutRecipesInputObjectSchema)]), where: zod_1.z.lazy(() => ReleaseWhereInput_schema_1.ReleaseWhereInputObjectSchema).optional()
}).strict();
