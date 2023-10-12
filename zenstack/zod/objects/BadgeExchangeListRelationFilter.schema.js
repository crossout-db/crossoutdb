"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeExchangeListRelationFilterObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const BadgeExchangeWhereInput_schema_1 = require("./BadgeExchangeWhereInput.schema");
exports.BadgeExchangeListRelationFilterObjectSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => BadgeExchangeWhereInput_schema_1.BadgeExchangeWhereInputObjectSchema).optional(), some: zod_1.z.lazy(() => BadgeExchangeWhereInput_schema_1.BadgeExchangeWhereInputObjectSchema).optional(), none: zod_1.z.lazy(() => BadgeExchangeWhereInput_schema_1.BadgeExchangeWhereInputObjectSchema).optional()
}).strict();
