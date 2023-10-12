"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemIncludeObjectSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const TypeArgs_schema_1 = require("./TypeArgs.schema");
const CategoryArgs_schema_1 = require("./CategoryArgs.schema");
const FactionArgs_schema_1 = require("./FactionArgs.schema");
const RarityArgs_schema_1 = require("./RarityArgs.schema");
const ItemStatsInput_schema_1 = require("../input/ItemStatsInput.schema");
const MarketInput_schema_1 = require("../input/MarketInput.schema");
const BadgeExchangeInput_schema_1 = require("../input/BadgeExchangeInput.schema");
const RecipeInput_schema_1 = require("../input/RecipeInput.schema");
const RecipeItemInput_schema_1 = require("../input/RecipeItemInput.schema");
const PackItemInput_schema_1 = require("../input/PackItemInput.schema");
const SynergyItemInput_schema_1 = require("../input/SynergyItemInput.schema");
const ItemCountOutputTypeArgs_schema_1 = require("./ItemCountOutputTypeArgs.schema");
exports.ItemIncludeObjectSchema = zod_1.z.object({
    type: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => TypeArgs_schema_1.TypeArgsObjectSchema)]).optional(), category: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => CategoryArgs_schema_1.CategoryArgsObjectSchema)]).optional(), faction: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => FactionArgs_schema_1.FactionArgsObjectSchema)]).optional(), rarity: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => RarityArgs_schema_1.RarityArgsObjectSchema)]).optional(), itemStats: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ItemStatsInput_schema_1.ItemStatsInputSchema.findMany)]).optional(), market: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => MarketInput_schema_1.MarketInputSchema.findMany)]).optional(), badgeExchange: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => BadgeExchangeInput_schema_1.BadgeExchangeInputSchema.findMany)]).optional(), recipes: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => RecipeInput_schema_1.RecipeInputSchema.findMany)]).optional(), recipeItems: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => RecipeItemInput_schema_1.RecipeItemInputSchema.findMany)]).optional(), packItems: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => PackItemInput_schema_1.PackItemInputSchema.findMany)]).optional(), itemSynergies: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => SynergyItemInput_schema_1.SynergyItemInputSchema.findMany)]).optional(), _count: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ItemCountOutputTypeArgs_schema_1.ItemCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
