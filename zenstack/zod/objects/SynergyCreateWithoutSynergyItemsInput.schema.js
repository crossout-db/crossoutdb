"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyCreateWithoutSynergyItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.SynergyCreateWithoutSynergyItemsInputObjectSchema = zod_1.z.object({
    name: zod_1.z.string()
}).strict();
