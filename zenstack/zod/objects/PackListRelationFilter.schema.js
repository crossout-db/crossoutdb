"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackListRelationFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackWhereInput_schema_1 = require("./PackWhereInput.schema");
exports.PackListRelationFilterObjectSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => PackWhereInput_schema_1.PackWhereInputObjectSchema).optional(), some: zod_1.z.lazy(() => PackWhereInput_schema_1.PackWhereInputObjectSchema).optional(), none: zod_1.z.lazy(() => PackWhereInput_schema_1.PackWhereInputObjectSchema).optional()
}).strict();
