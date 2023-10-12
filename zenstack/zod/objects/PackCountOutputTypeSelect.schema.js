"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackCountOutputTypeSelectObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.PackCountOutputTypeSelectObjectSchema = zod_1.z.object({
    items: zod_1.z.boolean().optional(), packPrices: zod_1.z.boolean().optional()
}).strict();
