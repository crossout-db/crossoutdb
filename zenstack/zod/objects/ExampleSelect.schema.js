"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleSelectObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.ExampleSelectObjectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(), name: zod_1.z.boolean().optional(), createdAt: zod_1.z.boolean().optional(), updatedAt: zod_1.z.boolean().optional()
}).strict();
