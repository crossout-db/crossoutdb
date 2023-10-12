"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeExchangeArgsObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const BadgeExchangeSelect_schema_1 = require("./BadgeExchangeSelect.schema");
const BadgeExchangeInclude_schema_1 = require("./BadgeExchangeInclude.schema");
exports.BadgeExchangeArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => BadgeExchangeSelect_schema_1.BadgeExchangeSelectObjectSchema).optional(), include: zod_1.z.lazy(() => BadgeExchangeInclude_schema_1.BadgeExchangeIncludeObjectSchema).optional()
}).strict();
