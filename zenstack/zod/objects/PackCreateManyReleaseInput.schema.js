"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackCreateManyReleaseInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.PackCreateManyReleaseInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), name: zod_1.z.string(), description: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), steamAppID: zod_1.z.number(), key: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), coins: zod_1.z.number(), active: zod_1.z.boolean()
}).strict();
