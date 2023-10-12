"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCreateWithoutPackItemsInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const TypeCreateNestedOneWithoutItemsInput_schema_1 = require("./TypeCreateNestedOneWithoutItemsInput.schema");
const CategoryCreateNestedOneWithoutItemsInput_schema_1 = require("./CategoryCreateNestedOneWithoutItemsInput.schema");
const FactionCreateNestedOneWithoutItemsInput_schema_1 = require("./FactionCreateNestedOneWithoutItemsInput.schema");
const RarityCreateNestedOneWithoutItemsInput_schema_1 = require("./RarityCreateNestedOneWithoutItemsInput.schema");
const ItemStatsCreateNestedManyWithoutItemInput_schema_1 = require("./ItemStatsCreateNestedManyWithoutItemInput.schema");
const MarketCreateNestedManyWithoutItemInput_schema_1 = require("./MarketCreateNestedManyWithoutItemInput.schema");
const BadgeExchangeCreateNestedManyWithoutItemInput_schema_1 = require("./BadgeExchangeCreateNestedManyWithoutItemInput.schema");
const RecipeCreateNestedManyWithoutResultInput_schema_1 = require("./RecipeCreateNestedManyWithoutResultInput.schema");
const RecipeItemCreateNestedManyWithoutItemInput_schema_1 = require("./RecipeItemCreateNestedManyWithoutItemInput.schema");
const SynergyItemCreateNestedManyWithoutItemInput_schema_1 = require("./SynergyItemCreateNestedManyWithoutItemInput.schema");
exports.ItemCreateWithoutPackItemsInputObjectSchema = zod_1.z.object({
    name: zod_1.z.string(), marketDef: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), quantity: zod_1.z.number(), level: zod_1.z.number(), sellPriceMin: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), sellOrders: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), buyPriceMax: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), buyOrders: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), craftCost: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), timestamp: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), active: zod_1.z.boolean(), logId: zod_1.z.union([zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), type: zod_1.z.lazy(() => TypeCreateNestedOneWithoutItemsInput_schema_1.TypeCreateNestedOneWithoutItemsInputObjectSchema), category: zod_1.z.lazy(() => CategoryCreateNestedOneWithoutItemsInput_schema_1.CategoryCreateNestedOneWithoutItemsInputObjectSchema), faction: zod_1.z.lazy(() => FactionCreateNestedOneWithoutItemsInput_schema_1.FactionCreateNestedOneWithoutItemsInputObjectSchema), rarity: zod_1.z.lazy(() => RarityCreateNestedOneWithoutItemsInput_schema_1.RarityCreateNestedOneWithoutItemsInputObjectSchema), itemStats: zod_1.z.lazy(() => ItemStatsCreateNestedManyWithoutItemInput_schema_1.ItemStatsCreateNestedManyWithoutItemInputObjectSchema).optional(), market: zod_1.z.lazy(() => MarketCreateNestedManyWithoutItemInput_schema_1.MarketCreateNestedManyWithoutItemInputObjectSchema).optional(), badgeExchange: zod_1.z.lazy(() => BadgeExchangeCreateNestedManyWithoutItemInput_schema_1.BadgeExchangeCreateNestedManyWithoutItemInputObjectSchema).optional(), recipes: zod_1.z.lazy(() => RecipeCreateNestedManyWithoutResultInput_schema_1.RecipeCreateNestedManyWithoutResultInputObjectSchema).optional(), recipeItems: zod_1.z.lazy(() => RecipeItemCreateNestedManyWithoutItemInput_schema_1.RecipeItemCreateNestedManyWithoutItemInputObjectSchema).optional(), itemSynergies: zod_1.z.lazy(() => SynergyItemCreateNestedManyWithoutItemInput_schema_1.SynergyItemCreateNestedManyWithoutItemInputObjectSchema).optional()
}).strict();
