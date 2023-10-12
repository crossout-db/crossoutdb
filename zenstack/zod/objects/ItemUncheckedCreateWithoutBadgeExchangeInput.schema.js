"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUncheckedCreateWithoutBadgeExchangeInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const ItemStatsUncheckedCreateNestedManyWithoutItemInput_schema_1 = require("./ItemStatsUncheckedCreateNestedManyWithoutItemInput.schema");
const MarketUncheckedCreateNestedManyWithoutItemInput_schema_1 = require("./MarketUncheckedCreateNestedManyWithoutItemInput.schema");
const RecipeUncheckedCreateNestedManyWithoutResultInput_schema_1 = require("./RecipeUncheckedCreateNestedManyWithoutResultInput.schema");
const RecipeItemUncheckedCreateNestedManyWithoutItemInput_schema_1 = require("./RecipeItemUncheckedCreateNestedManyWithoutItemInput.schema");
const PackItemUncheckedCreateNestedManyWithoutItemInput_schema_1 = require("./PackItemUncheckedCreateNestedManyWithoutItemInput.schema");
const SynergyItemUncheckedCreateNestedManyWithoutItemInput_schema_1 = require("./SynergyItemUncheckedCreateNestedManyWithoutItemInput.schema");
exports.ItemUncheckedCreateWithoutBadgeExchangeInputObjectSchema = zod_1.z.object({
    id: zod_1.z.number().optional(), name: zod_1.z.string(), marketDef: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), quantity: zod_1.z.number(), typeId: zod_1.z.number(), categoryId: zod_1.z.number(), factionId: zod_1.z.number(), rarityId: zod_1.z.number(), level: zod_1.z.number(), sellPriceMin: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), sellOrders: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), buyPriceMax: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), buyOrders: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), craftCost: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), timestamp: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), active: zod_1.z.boolean(), logId: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), itemStats: zod_1.z.lazy(() => ItemStatsUncheckedCreateNestedManyWithoutItemInput_schema_1.ItemStatsUncheckedCreateNestedManyWithoutItemInputObjectSchema).optional(), market: zod_1.z.lazy(() => MarketUncheckedCreateNestedManyWithoutItemInput_schema_1.MarketUncheckedCreateNestedManyWithoutItemInputObjectSchema).optional(), recipes: zod_1.z.lazy(() => RecipeUncheckedCreateNestedManyWithoutResultInput_schema_1.RecipeUncheckedCreateNestedManyWithoutResultInputObjectSchema).optional(), recipeItems: zod_1.z.lazy(() => RecipeItemUncheckedCreateNestedManyWithoutItemInput_schema_1.RecipeItemUncheckedCreateNestedManyWithoutItemInputObjectSchema).optional(), packItems: zod_1.z.lazy(() => PackItemUncheckedCreateNestedManyWithoutItemInput_schema_1.PackItemUncheckedCreateNestedManyWithoutItemInputObjectSchema).optional(), itemSynergies: zod_1.z.lazy(() => SynergyItemUncheckedCreateNestedManyWithoutItemInput_schema_1.SynergyItemUncheckedCreateNestedManyWithoutItemInputObjectSchema).optional()
}).strict();
