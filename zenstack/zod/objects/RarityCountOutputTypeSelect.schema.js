"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RarityCountOutputTypeSelectObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.RarityCountOutputTypeSelectObjectSchema = zod_1.z.object({
    items: zod_1.z.boolean().optional()
}).strict();
