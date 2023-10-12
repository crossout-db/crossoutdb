"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogUpdateSchema = exports.LogCreateSchema = exports.LogSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const baseSchema = zod_1.z.object({
    id: zod_1.z.number(),
    timestamp: zod_1.z.date(),
    tableChanged: zod_1.z.string(),
    recordId: zod_1.z.number(),
    record: zod_1.z.any(),
});
exports.LogSchema = baseSchema;
exports.LogCreateSchema = baseSchema.partial({
    id: true, timestamp: true,
});
exports.LogUpdateSchema = baseSchema.partial();
