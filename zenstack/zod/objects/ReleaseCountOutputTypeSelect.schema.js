"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseCountOutputTypeSelectObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.ReleaseCountOutputTypeSelectObjectSchema = zod_1.z.object({
    itemStats: zod_1.z.boolean().optional(), recipes: zod_1.z.boolean().optional(), packs: zod_1.z.boolean().optional()
}).strict();
