"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackItemUpdateSchema = exports.PackItemCreateSchema = exports.PackItemSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const baseSchema = zod_1.z.object({
    id: zod_1.z.number(),
    quantity: zod_1.z.number(),
});
exports.PackItemSchema = baseSchema;
exports.PackItemCreateSchema = baseSchema.partial({
    id: true,
});
exports.PackItemUpdateSchema = baseSchema.partial();
