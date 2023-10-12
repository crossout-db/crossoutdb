"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemOrderByWithRelationInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const TypeOrderByWithRelationInput_schema_1 = require("./TypeOrderByWithRelationInput.schema");
const CategoryOrderByWithRelationInput_schema_1 = require("./CategoryOrderByWithRelationInput.schema");
const FactionOrderByWithRelationInput_schema_1 = require("./FactionOrderByWithRelationInput.schema");
const RarityOrderByWithRelationInput_schema_1 = require("./RarityOrderByWithRelationInput.schema");
const ItemStatsOrderByRelationAggregateInput_schema_1 = require("./ItemStatsOrderByRelationAggregateInput.schema");
const MarketOrderByRelationAggregateInput_schema_1 = require("./MarketOrderByRelationAggregateInput.schema");
const BadgeExchangeOrderByRelationAggregateInput_schema_1 = require("./BadgeExchangeOrderByRelationAggregateInput.schema");
const RecipeOrderByRelationAggregateInput_schema_1 = require("./RecipeOrderByRelationAggregateInput.schema");
const RecipeItemOrderByRelationAggregateInput_schema_1 = require("./RecipeItemOrderByRelationAggregateInput.schema");
const PackItemOrderByRelationAggregateInput_schema_1 = require("./PackItemOrderByRelationAggregateInput.schema");
const SynergyItemOrderByRelationAggregateInput_schema_1 = require("./SynergyItemOrderByRelationAggregateInput.schema");
exports.ItemOrderByWithRelationInputObjectSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), marketDef: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), quantity: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), typeId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), categoryId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), factionId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), rarityId: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), level: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), sellPriceMin: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), sellOrders: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), buyPriceMax: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), buyOrders: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), craftCost: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), timestamp: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), active: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(), logId: zod_1.z.union([zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(), type: zod_1.z.lazy(() => TypeOrderByWithRelationInput_schema_1.TypeOrderByWithRelationInputObjectSchema).optional(), category: zod_1.z.lazy(() => CategoryOrderByWithRelationInput_schema_1.CategoryOrderByWithRelationInputObjectSchema).optional(), faction: zod_1.z.lazy(() => FactionOrderByWithRelationInput_schema_1.FactionOrderByWithRelationInputObjectSchema).optional(), rarity: zod_1.z.lazy(() => RarityOrderByWithRelationInput_schema_1.RarityOrderByWithRelationInputObjectSchema).optional(), itemStats: zod_1.z.lazy(() => ItemStatsOrderByRelationAggregateInput_schema_1.ItemStatsOrderByRelationAggregateInputObjectSchema).optional(), market: zod_1.z.lazy(() => MarketOrderByRelationAggregateInput_schema_1.MarketOrderByRelationAggregateInputObjectSchema).optional(), badgeExchange: zod_1.z.lazy(() => BadgeExchangeOrderByRelationAggregateInput_schema_1.BadgeExchangeOrderByRelationAggregateInputObjectSchema).optional(), recipes: zod_1.z.lazy(() => RecipeOrderByRelationAggregateInput_schema_1.RecipeOrderByRelationAggregateInputObjectSchema).optional(), recipeItems: zod_1.z.lazy(() => RecipeItemOrderByRelationAggregateInput_schema_1.RecipeItemOrderByRelationAggregateInputObjectSchema).optional(), packItems: zod_1.z.lazy(() => PackItemOrderByRelationAggregateInput_schema_1.PackItemOrderByRelationAggregateInputObjectSchema).optional(), itemSynergies: zod_1.z.lazy(() => SynergyItemOrderByRelationAggregateInput_schema_1.SynergyItemOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
