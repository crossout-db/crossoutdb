"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatFieldUpdateOperationsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.FloatFieldUpdateOperationsInputObjectSchema = zod_1.z.object({
    set: zod_1.z.number().optional(), increment: zod_1.z.number().optional(), decrement: zod_1.z.number().optional(), multiply: zod_1.z.number().optional(), divide: zod_1.z.number().optional()
}).strict();
