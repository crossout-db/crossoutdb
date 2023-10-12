"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemListRelationFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyItemWhereInput_schema_1 = require("./SynergyItemWhereInput.schema");
exports.SynergyItemListRelationFilterObjectSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => SynergyItemWhereInput_schema_1.SynergyItemWhereInputObjectSchema).optional(), some: zod_1.z.lazy(() => SynergyItemWhereInput_schema_1.SynergyItemWhereInputObjectSchema).optional(), none: zod_1.z.lazy(() => SynergyItemWhereInput_schema_1.SynergyItemWhereInputObjectSchema).optional()
}).strict();
