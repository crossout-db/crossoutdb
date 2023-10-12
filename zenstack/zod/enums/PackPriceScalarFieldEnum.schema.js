"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackPriceScalarFieldEnumSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.PackPriceScalarFieldEnumSchema = zod_1.z.enum(["id", "packId", "timestamp", "priceUSD", "priceEUR", "priceGBP", "priceRUB", "discount"]);
