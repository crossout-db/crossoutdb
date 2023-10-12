"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackRelationFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const PackWhereInput_schema_1 = require("./PackWhereInput.schema");
exports.PackRelationFilterObjectSchema = zod_1.z.object({
    is: zod_1.z.lazy(() => PackWhereInput_schema_1.PackWhereInputObjectSchema).optional(), isNot: zod_1.z.lazy(() => PackWhereInput_schema_1.PackWhereInputObjectSchema).optional()
}).strict();
