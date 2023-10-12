"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemCreateManyInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.SynergyItemCreateManyInputObjectSchema = zod_1.z.object({
    synergyId: zod_1.z.number(), itemId: zod_1.z.number()
}).strict();
