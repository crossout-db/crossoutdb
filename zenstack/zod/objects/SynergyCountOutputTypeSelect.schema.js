"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyCountOutputTypeSelectObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.SynergyCountOutputTypeSelectObjectSchema = zod_1.z.object({
    synergyItems: zod_1.z.boolean().optional()
}).strict();
