"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemCreateManyItemInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.SynergyItemCreateManyItemInputObjectSchema = zod_1.z.object({
    synergyId: zod_1.z.number()
}).strict();
