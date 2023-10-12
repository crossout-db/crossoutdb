"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCreateManyInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.ItemCreateManyInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), name: zod_1.z.string(), marketDef: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), quantity: zod_1.z.number(), typeId: zod_1.z.number(), categoryId: zod_1.z.number(), factionId: zod_1.z.number(), rarityId: zod_1.z.number(), level: zod_1.z.number(), sellPriceMin: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), sellOrders: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), buyPriceMax: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), buyOrders: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), craftCost: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), timestamp: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), active: zod_1.z.boolean(), logId: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable()
}).strict();
