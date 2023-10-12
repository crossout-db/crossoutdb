"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeExchangeScalarFieldEnumSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.BadgeExchangeScalarFieldEnumSchema = zod_1.z.enum(["id", "itemId", "quantity", "badges", "active", "timestamp"]);
