"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RarityRelationFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const RarityWhereInput_schema_1 = require("./RarityWhereInput.schema");
exports.RarityRelationFilterObjectSchema = zod_1.z.object({
    is: zod_1.z.lazy(() => RarityWhereInput_schema_1.RarityWhereInputObjectSchema).optional(), isNot: zod_1.z.lazy(() => RarityWhereInput_schema_1.RarityWhereInputObjectSchema).optional()
}).strict();
