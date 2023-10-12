"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemWhereInputObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const IntFilter_schema_1 = require("./IntFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const FloatNullableFilter_schema_1 = require("./FloatNullableFilter.schema");
const IntNullableFilter_schema_1 = require("./IntNullableFilter.schema");
const DateTimeNullableFilter_schema_1 = require("./DateTimeNullableFilter.schema");
const BoolFilter_schema_1 = require("./BoolFilter.schema");
const TypeRelationFilter_schema_1 = require("./TypeRelationFilter.schema");
const TypeWhereInput_schema_1 = require("./TypeWhereInput.schema");
const CategoryRelationFilter_schema_1 = require("./CategoryRelationFilter.schema");
const CategoryWhereInput_schema_1 = require("./CategoryWhereInput.schema");
const FactionRelationFilter_schema_1 = require("./FactionRelationFilter.schema");
const FactionWhereInput_schema_1 = require("./FactionWhereInput.schema");
const RarityRelationFilter_schema_1 = require("./RarityRelationFilter.schema");
const RarityWhereInput_schema_1 = require("./RarityWhereInput.schema");
const ItemStatsListRelationFilter_schema_1 = require("./ItemStatsListRelationFilter.schema");
const MarketListRelationFilter_schema_1 = require("./MarketListRelationFilter.schema");
const BadgeExchangeListRelationFilter_schema_1 = require("./BadgeExchangeListRelationFilter.schema");
const RecipeListRelationFilter_schema_1 = require("./RecipeListRelationFilter.schema");
const RecipeItemListRelationFilter_schema_1 = require("./RecipeItemListRelationFilter.schema");
const PackItemListRelationFilter_schema_1 = require("./PackItemListRelationFilter.schema");
const SynergyItemListRelationFilter_schema_1 = require("./SynergyItemListRelationFilter.schema");
exports.ItemWhereInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.ItemWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.ItemWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.ItemWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.ItemWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.ItemWhereInputObjectSchema).array()]).optional(), id: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), name: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), marketDef: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), quantity: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), typeId: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), categoryId: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), factionId: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), rarityId: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), level: zod_1.z.union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema),
        zod_1.z.number()]).optional(), sellPriceMin: zod_1.z.union([zod_1.z.lazy(() => FloatNullableFilter_schema_1.FloatNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), sellOrders: zod_1.z.union([zod_1.z.lazy(() => IntNullableFilter_schema_1.IntNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), buyPriceMax: zod_1.z.union([zod_1.z.lazy(() => FloatNullableFilter_schema_1.FloatNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), buyOrders: zod_1.z.union([zod_1.z.lazy(() => IntNullableFilter_schema_1.IntNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), craftCost: zod_1.z.union([zod_1.z.lazy(() => FloatNullableFilter_schema_1.FloatNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), timestamp: zod_1.z.union([zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), active: zod_1.z.union([zod_1.z.lazy(() => BoolFilter_schema_1.BoolFilterObjectSchema),
        zod_1.z.boolean()]).optional(), logId: zod_1.z.union([zod_1.z.lazy(() => IntNullableFilter_schema_1.IntNullableFilterObjectSchema),
        zod_1.z.number(),
        zod_1.z.null()]).optional().nullable(), type: zod_1.z.union([zod_1.z.lazy(() => TypeRelationFilter_schema_1.TypeRelationFilterObjectSchema),
        zod_1.z.lazy(() => TypeWhereInput_schema_1.TypeWhereInputObjectSchema)]).optional(), category: zod_1.z.union([zod_1.z.lazy(() => CategoryRelationFilter_schema_1.CategoryRelationFilterObjectSchema),
        zod_1.z.lazy(() => CategoryWhereInput_schema_1.CategoryWhereInputObjectSchema)]).optional(), faction: zod_1.z.union([zod_1.z.lazy(() => FactionRelationFilter_schema_1.FactionRelationFilterObjectSchema),
        zod_1.z.lazy(() => FactionWhereInput_schema_1.FactionWhereInputObjectSchema)]).optional(), rarity: zod_1.z.union([zod_1.z.lazy(() => RarityRelationFilter_schema_1.RarityRelationFilterObjectSchema),
        zod_1.z.lazy(() => RarityWhereInput_schema_1.RarityWhereInputObjectSchema)]).optional(), itemStats: zod_1.z.lazy(() => ItemStatsListRelationFilter_schema_1.ItemStatsListRelationFilterObjectSchema).optional(), market: zod_1.z.lazy(() => MarketListRelationFilter_schema_1.MarketListRelationFilterObjectSchema).optional(), badgeExchange: zod_1.z.lazy(() => BadgeExchangeListRelationFilter_schema_1.BadgeExchangeListRelationFilterObjectSchema).optional(), recipes: zod_1.z.lazy(() => RecipeListRelationFilter_schema_1.RecipeListRelationFilterObjectSchema).optional(), recipeItems: zod_1.z.lazy(() => RecipeItemListRelationFilter_schema_1.RecipeItemListRelationFilterObjectSchema).optional(), packItems: zod_1.z.lazy(() => PackItemListRelationFilter_schema_1.PackItemListRelationFilterObjectSchema).optional(), itemSynergies: zod_1.z.lazy(() => SynergyItemListRelationFilter_schema_1.SynergyItemListRelationFilterObjectSchema).optional()
}).strict();
