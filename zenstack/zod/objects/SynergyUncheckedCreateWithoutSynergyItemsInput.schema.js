"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyUncheckedCreateWithoutSynergyItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.SynergyUncheckedCreateWithoutSynergyItemsInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), name: zod_1.z.string()
}).strict();
