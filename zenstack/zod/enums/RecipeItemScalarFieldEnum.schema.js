"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeItemScalarFieldEnumSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.RecipeItemScalarFieldEnumSchema = zod_1.z.enum(["id", "recipeId", "itemId", "quantity"]);
