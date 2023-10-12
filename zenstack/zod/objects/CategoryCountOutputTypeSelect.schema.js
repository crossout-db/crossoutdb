"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCountOutputTypeSelectObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.CategoryCountOutputTypeSelectObjectSchema = zod_1.z.object({
    items: zod_1.z.boolean().optional()
}).strict();
