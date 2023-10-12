"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRelationFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const CategoryWhereInput_schema_1 = require("./CategoryWhereInput.schema");
exports.CategoryRelationFilterObjectSchema = zod_1.z.object({
    is: zod_1.z.lazy(() => CategoryWhereInput_schema_1.CategoryWhereInputObjectSchema).optional(), isNot: zod_1.z.lazy(() => CategoryWhereInput_schema_1.CategoryWhereInputObjectSchema).optional()
}).strict();
