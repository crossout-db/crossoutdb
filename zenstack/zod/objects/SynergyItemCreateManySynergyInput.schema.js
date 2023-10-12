"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemCreateManySynergyInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.SynergyItemCreateManySynergyInputObjectSchema = zod_1.z.object({
    itemId: zod_1.z.number()
}).strict();
