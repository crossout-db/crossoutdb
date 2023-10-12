"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseUpdateSchema = exports.ReleaseCreateSchema = exports.ReleaseSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const baseSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    xoVersion: zod_1.z.string().nullish(),
    build: zod_1.z.string().nullish(),
    description: zod_1.z.string().nullish(),
    battlePass: zod_1.z.string().nullish(),
    url: zod_1.z.string().nullish(),
    startDate: zod_1.z.date().nullish(),
    endDate: zod_1.z.date().nullish(),
    active: zod_1.z.boolean(),
});
exports.ReleaseSchema = baseSchema;
exports.ReleaseCreateSchema = baseSchema.partial({
    id: true,
});
exports.ReleaseUpdateSchema = baseSchema.partial();
