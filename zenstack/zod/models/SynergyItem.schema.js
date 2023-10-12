"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyItemUpdateSchema = exports.SynergyItemCreateSchema = exports.SynergyItemSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const baseSchema = zod_1.z.object({});
exports.SynergyItemSchema = baseSchema;
exports.SynergyItemCreateSchema = baseSchema;
exports.SynergyItemUpdateSchema = baseSchema.partial();
