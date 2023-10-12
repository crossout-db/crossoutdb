"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergySelectObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SynergyItemInput_schema_1 = require("../input/SynergyItemInput.schema");
const SynergyCountOutputTypeArgs_schema_1 = require("./SynergyCountOutputTypeArgs.schema");
exports.SynergySelectObjectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(), name: zod_1.z.boolean().optional(), synergyItems: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => SynergyItemInput_schema_1.SynergyItemInputSchema.findMany)]).optional(), _count: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => SynergyCountOutputTypeArgs_schema_1.SynergyCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
