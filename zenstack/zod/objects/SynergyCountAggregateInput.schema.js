"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyCountAggregateInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.SynergyCountAggregateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.literal(true).optional(), name: zod_1.z.literal(true).optional(), _all: zod_1.z.literal(true).optional()
}).strict();
