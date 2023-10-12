"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RarityUpdateSchema = exports.RarityCreateSchema = exports.RaritySchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const baseSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    order: zod_1.z.number(),
    primaryColor: zod_1.z.string(),
    secondaryColor: zod_1.z.string(),
});
exports.RaritySchema = baseSchema;
exports.RarityCreateSchema = baseSchema.partial({
    id: true,
});
exports.RarityUpdateSchema = baseSchema.partial();
