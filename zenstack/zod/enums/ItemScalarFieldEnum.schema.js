"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemScalarFieldEnumSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.ItemScalarFieldEnumSchema = zod_1.z.enum(["id", "name", "marketDef", "quantity", "typeId", "categoryId", "factionId", "rarityId", "level", "sellPriceMin", "sellOrders", "buyPriceMax", "buyOrders", "craftCost", "timestamp", "active", "logId"]);
