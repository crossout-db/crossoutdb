"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeScalarFieldEnumSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.RecipeScalarFieldEnumSchema = zod_1.z.enum(["id", "resultItemId", "quantity", "releaseId", "craftCost", "timestamp", "active"]);
