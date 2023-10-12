"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketScalarFieldEnumSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.MarketScalarFieldEnumSchema = zod_1.z.enum(["id", "itemId", "marketDef", "sellPriceMin", "sellOrders", "buyPriceMax", "buyOrders", "craftCost", "timestamp"]);
