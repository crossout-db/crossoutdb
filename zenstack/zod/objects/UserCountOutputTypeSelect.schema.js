"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCountOutputTypeSelectObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.UserCountOutputTypeSelectObjectSchema = zod_1.z.object({
    accounts: zod_1.z.boolean().optional(), sessions: zod_1.z.boolean().optional(), itemStats: zod_1.z.boolean().optional(), log: zod_1.z.boolean().optional()
}).strict();
