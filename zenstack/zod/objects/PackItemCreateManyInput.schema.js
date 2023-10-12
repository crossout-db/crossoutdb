"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackItemCreateManyInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.PackItemCreateManyInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), packId: zod_1.z.number(), itemId: zod_1.z.number(), quantity: zod_1.z.number()
}).strict();
