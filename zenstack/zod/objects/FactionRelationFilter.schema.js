"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactionRelationFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const FactionWhereInput_schema_1 = require("./FactionWhereInput.schema");
exports.FactionRelationFilterObjectSchema = zod_1.z.object({
    is: zod_1.z.lazy(() => FactionWhereInput_schema_1.FactionWhereInputObjectSchema).optional(), isNot: zod_1.z.lazy(() => FactionWhereInput_schema_1.FactionWhereInputObjectSchema).optional()
}).strict();
