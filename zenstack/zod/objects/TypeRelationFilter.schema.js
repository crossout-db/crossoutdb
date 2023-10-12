"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeRelationFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const TypeWhereInput_schema_1 = require("./TypeWhereInput.schema");
exports.TypeRelationFilterObjectSchema = zod_1.z.object({
    is: zod_1.z.lazy(() => TypeWhereInput_schema_1.TypeWhereInputObjectSchema).optional(), isNot: zod_1.z.lazy(() => TypeWhereInput_schema_1.TypeWhereInputObjectSchema).optional()
}).strict();
