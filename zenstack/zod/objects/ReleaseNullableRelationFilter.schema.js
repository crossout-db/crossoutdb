"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseNullableRelationFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ReleaseWhereInput_schema_1 = require("./ReleaseWhereInput.schema");
exports.ReleaseNullableRelationFilterObjectSchema = zod_1.z.object({
    is: zod_1.z.union([zod_1.z.lazy(() => ReleaseWhereInput_schema_1.ReleaseWhereInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), isNot: zod_1.z.union([zod_1.z.lazy(() => ReleaseWhereInput_schema_1.ReleaseWhereInputObjectSchema),
        zod_1.z.null()]).optional().nullable()
}).strict();
