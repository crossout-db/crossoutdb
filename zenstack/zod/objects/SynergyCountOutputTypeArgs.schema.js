"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyCountOutputTypeArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyCountOutputTypeSelect_schema_1 = require("./SynergyCountOutputTypeSelect.schema");
exports.SynergyCountOutputTypeArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => SynergyCountOutputTypeSelect_schema_1.SynergyCountOutputTypeSelectObjectSchema).optional()
}).strict();
