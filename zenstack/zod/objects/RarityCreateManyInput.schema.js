"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RarityCreateManyInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.RarityCreateManyInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), name: zod_1.z.string(), order: zod_1.z.number(), primaryColor: zod_1.z.string(), secondaryColor: zod_1.z.string()
}).strict();
