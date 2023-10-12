"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogListRelationFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const LogWhereInput_schema_1 = require("./LogWhereInput.schema");
exports.LogListRelationFilterObjectSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => LogWhereInput_schema_1.LogWhereInputObjectSchema).optional(), some: zod_1.z.lazy(() => LogWhereInput_schema_1.LogWhereInputObjectSchema).optional(), none: zod_1.z.lazy(() => LogWhereInput_schema_1.LogWhereInputObjectSchema).optional()
}).strict();
