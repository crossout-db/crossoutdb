"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactionUpdateSchema = exports.FactionCreateSchema = exports.FactionSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const baseSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
});
exports.FactionSchema = baseSchema;
exports.FactionCreateSchema = baseSchema.partial({
    id: true,
});
exports.FactionUpdateSchema = baseSchema.partial();
