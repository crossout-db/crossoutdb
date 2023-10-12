"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseUpdateToOneWithWhereWithoutPacksInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ReleaseWhereInput_schema_1 = require("./ReleaseWhereInput.schema");
const ReleaseUpdateWithoutPacksInput_schema_1 = require("./ReleaseUpdateWithoutPacksInput.schema");
const ReleaseUncheckedUpdateWithoutPacksInput_schema_1 = require("./ReleaseUncheckedUpdateWithoutPacksInput.schema");
exports.ReleaseUpdateToOneWithWhereWithoutPacksInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ReleaseWhereInput_schema_1.ReleaseWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => ReleaseUpdateWithoutPacksInput_schema_1.ReleaseUpdateWithoutPacksInputObjectSchema),
        zod_1.z.lazy(() => ReleaseUncheckedUpdateWithoutPacksInput_schema_1.ReleaseUncheckedUpdateWithoutPacksInputObjectSchema)])
}).strict();
