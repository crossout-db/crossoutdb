"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCountOutputTypeSelectObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.ItemCountOutputTypeSelectObjectSchema = zod_1.z.object({
    itemStats: zod_1.z.boolean().optional(), market: zod_1.z.boolean().optional(), badgeExchange: zod_1.z.boolean().optional(), recipes: zod_1.z.boolean().optional(), recipeItems: zod_1.z.boolean().optional(), packItems: zod_1.z.boolean().optional(), itemSynergies: zod_1.z.boolean().optional()
}).strict();
