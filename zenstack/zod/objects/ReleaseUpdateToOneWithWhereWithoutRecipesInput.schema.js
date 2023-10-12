"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseUpdateToOneWithWhereWithoutRecipesInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ReleaseWhereInput_schema_1 = require("./ReleaseWhereInput.schema");
const ReleaseUpdateWithoutRecipesInput_schema_1 = require("./ReleaseUpdateWithoutRecipesInput.schema");
const ReleaseUncheckedUpdateWithoutRecipesInput_schema_1 = require("./ReleaseUncheckedUpdateWithoutRecipesInput.schema");
exports.ReleaseUpdateToOneWithWhereWithoutRecipesInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ReleaseWhereInput_schema_1.ReleaseWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => ReleaseUpdateWithoutRecipesInput_schema_1.ReleaseUpdateWithoutRecipesInputObjectSchema),
        zod_1.z.lazy(() => ReleaseUncheckedUpdateWithoutRecipesInput_schema_1.ReleaseUncheckedUpdateWithoutRecipesInputObjectSchema)])
}).strict();
