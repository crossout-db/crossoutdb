"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyUpdateSchema = exports.SynergyCreateSchema = exports.SynergySchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const baseSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
});
exports.SynergySchema = baseSchema;
exports.SynergyCreateSchema = baseSchema.partial({
    id: true,
});
exports.SynergyUpdateSchema = baseSchema.partial();
