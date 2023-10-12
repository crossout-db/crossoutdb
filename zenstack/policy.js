"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
const runtime_1 = require("@zenstackhq/runtime");
function Release_create(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if ((((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN') || ((user === null || user === void 0 ? void 0 : user.role) == 'CONTRIBUTOR'))) {
        return { AND: [] };
    }
    return { OR: [] };
}
function Release_create_input(input, context) {
    var _a, _b;
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    return ((((_a = user === null || user === void 0 ? void 0 : user.role) !== null && _a !== void 0 ? _a : null) == 'ADMIN') || (((_b = user === null || user === void 0 ? void 0 : user.role) !== null && _b !== void 0 ? _b : null) == 'CONTRIBUTOR'));
}
function Release_update(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if ((((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN') || ((user === null || user === void 0 ? void 0 : user.role) == 'CONTRIBUTOR'))) {
        return { AND: [] };
    }
    return { OR: [] };
}
function Release_delete(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if (((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN')) {
        return { AND: [] };
    }
    return { OR: [] };
}
function Recipe_create(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if ((((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN') || ((user === null || user === void 0 ? void 0 : user.role) == 'CONTRIBUTOR'))) {
        return { AND: [] };
    }
    return { OR: [] };
}
function Recipe_create_input(input, context) {
    var _a, _b;
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    return ((((_a = user === null || user === void 0 ? void 0 : user.role) !== null && _a !== void 0 ? _a : null) == 'ADMIN') || (((_b = user === null || user === void 0 ? void 0 : user.role) !== null && _b !== void 0 ? _b : null) == 'CONTRIBUTOR'));
}
function Recipe_update(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if ((((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN') || ((user === null || user === void 0 ? void 0 : user.role) == 'CONTRIBUTOR'))) {
        return { AND: [] };
    }
    return { OR: [] };
}
function Recipe_delete(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if (((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN')) {
        return { AND: [] };
    }
    return { OR: [] };
}
function RecipeItem_create(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if ((((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN') || ((user === null || user === void 0 ? void 0 : user.role) == 'CONTRIBUTOR'))) {
        return { AND: [] };
    }
    return { OR: [] };
}
function RecipeItem_create_input(input, context) {
    var _a, _b;
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    return ((((_a = user === null || user === void 0 ? void 0 : user.role) !== null && _a !== void 0 ? _a : null) == 'ADMIN') || (((_b = user === null || user === void 0 ? void 0 : user.role) !== null && _b !== void 0 ? _b : null) == 'CONTRIBUTOR'));
}
function RecipeItem_update(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if ((((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN') || ((user === null || user === void 0 ? void 0 : user.role) == 'CONTRIBUTOR'))) {
        return { AND: [] };
    }
    return { OR: [] };
}
function RecipeItem_delete(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if ((((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN') || ((user === null || user === void 0 ? void 0 : user.role) == 'CONTRIBUTOR'))) {
        return { AND: [] };
    }
    return { OR: [] };
}
function Pack_create(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if ((((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN') || ((user === null || user === void 0 ? void 0 : user.role) == 'CONTRIBUTOR'))) {
        return { AND: [] };
    }
    return { OR: [] };
}
function Pack_create_input(input, context) {
    var _a, _b;
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    return ((((_a = user === null || user === void 0 ? void 0 : user.role) !== null && _a !== void 0 ? _a : null) == 'ADMIN') || (((_b = user === null || user === void 0 ? void 0 : user.role) !== null && _b !== void 0 ? _b : null) == 'CONTRIBUTOR'));
}
function Pack_update(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if ((((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN') || ((user === null || user === void 0 ? void 0 : user.role) == 'CONTRIBUTOR'))) {
        return { AND: [] };
    }
    return { OR: [] };
}
function Pack_delete(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if (((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN')) {
        return { AND: [] };
    }
    return { OR: [] };
}
function PackItem_create(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if ((((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN') || ((user === null || user === void 0 ? void 0 : user.role) == 'CONTRIBUTOR'))) {
        return { AND: [] };
    }
    return { OR: [] };
}
function PackItem_create_input(input, context) {
    var _a, _b;
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    return ((((_a = user === null || user === void 0 ? void 0 : user.role) !== null && _a !== void 0 ? _a : null) == 'ADMIN') || (((_b = user === null || user === void 0 ? void 0 : user.role) !== null && _b !== void 0 ? _b : null) == 'CONTRIBUTOR'));
}
function PackItem_update(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if ((((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN') || ((user === null || user === void 0 ? void 0 : user.role) == 'CONTRIBUTOR'))) {
        return { AND: [] };
    }
    return { OR: [] };
}
function PackItem_delete(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if ((((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN') || ((user === null || user === void 0 ? void 0 : user.role) == 'CONTRIBUTOR'))) {
        return { AND: [] };
    }
    return { OR: [] };
}
function Category_create(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if (((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN')) {
        return { AND: [] };
    }
    return { OR: [] };
}
function Category_create_input(input, context) {
    var _a;
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    return (((_a = user === null || user === void 0 ? void 0 : user.role) !== null && _a !== void 0 ? _a : null) == 'ADMIN');
}
function Category_update(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if (((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN')) {
        return { AND: [] };
    }
    return { OR: [] };
}
function Category_delete(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if (((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN')) {
        return { AND: [] };
    }
    return { OR: [] };
}
function Faction_create(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if (((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN')) {
        return { AND: [] };
    }
    return { OR: [] };
}
function Faction_create_input(input, context) {
    var _a;
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    return (((_a = user === null || user === void 0 ? void 0 : user.role) !== null && _a !== void 0 ? _a : null) == 'ADMIN');
}
function Faction_update(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if (((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN')) {
        return { AND: [] };
    }
    return { OR: [] };
}
function Faction_delete(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if (((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN')) {
        return { AND: [] };
    }
    return { OR: [] };
}
function Type_create(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if (((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN')) {
        return { AND: [] };
    }
    return { OR: [] };
}
function Type_create_input(input, context) {
    var _a;
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    return (((_a = user === null || user === void 0 ? void 0 : user.role) !== null && _a !== void 0 ? _a : null) == 'ADMIN');
}
function Type_update(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if (((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN')) {
        return { AND: [] };
    }
    return { OR: [] };
}
function Type_delete(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if (((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN')) {
        return { AND: [] };
    }
    return { OR: [] };
}
function Rarity_create(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if (((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN')) {
        return { AND: [] };
    }
    return { OR: [] };
}
function Rarity_create_input(input, context) {
    var _a;
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    return (((_a = user === null || user === void 0 ? void 0 : user.role) !== null && _a !== void 0 ? _a : null) == 'ADMIN');
}
function Rarity_update(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if (((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN')) {
        return { AND: [] };
    }
    return { OR: [] };
}
function Rarity_delete(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if (((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN')) {
        return { AND: [] };
    }
    return { OR: [] };
}
function Item_create(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if (((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN')) {
        return { AND: [] };
    }
    return { OR: [] };
}
function Item_create_input(input, context) {
    var _a;
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    return (((_a = user === null || user === void 0 ? void 0 : user.role) !== null && _a !== void 0 ? _a : null) == 'ADMIN');
}
function Item_update(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if (((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN')) {
        return { AND: [] };
    }
    return { OR: [] };
}
function Item_delete(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if (((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN')) {
        return { AND: [] };
    }
    return { OR: [] };
}
function ItemStats_create(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if ((((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN') || ((user === null || user === void 0 ? void 0 : user.role) == 'CONTRIBUTOR'))) {
        return { AND: [] };
    }
    return { OR: [] };
}
function ItemStats_create_input(input, context) {
    var _a, _b;
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    return ((((_a = user === null || user === void 0 ? void 0 : user.role) !== null && _a !== void 0 ? _a : null) == 'ADMIN') || (((_b = user === null || user === void 0 ? void 0 : user.role) !== null && _b !== void 0 ? _b : null) == 'CONTRIBUTOR'));
}
function ItemStats_update(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if ((((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN') || ((user === null || user === void 0 ? void 0 : user.role) == 'CONTRIBUTOR'))) {
        return { AND: [] };
    }
    return { OR: [] };
}
function ItemStats_delete(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if (((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN')) {
        return { AND: [] };
    }
    return { OR: [] };
}
function Synergy_create(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if ((((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN') || ((user === null || user === void 0 ? void 0 : user.role) == 'CONTRIBUTOR'))) {
        return { AND: [] };
    }
    return { OR: [] };
}
function Synergy_create_input(input, context) {
    var _a, _b;
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    return ((((_a = user === null || user === void 0 ? void 0 : user.role) !== null && _a !== void 0 ? _a : null) == 'ADMIN') || (((_b = user === null || user === void 0 ? void 0 : user.role) !== null && _b !== void 0 ? _b : null) == 'CONTRIBUTOR'));
}
function Synergy_update(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if ((((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN') || ((user === null || user === void 0 ? void 0 : user.role) == 'CONTRIBUTOR'))) {
        return { AND: [] };
    }
    return { OR: [] };
}
function Synergy_delete(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if (((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN')) {
        return { AND: [] };
    }
    return { OR: [] };
}
function SynergyItem_create(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if ((((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN') || ((user === null || user === void 0 ? void 0 : user.role) == 'CONTRIBUTOR'))) {
        return { AND: [] };
    }
    return { OR: [] };
}
function SynergyItem_create_input(input, context) {
    var _a, _b;
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    return ((((_a = user === null || user === void 0 ? void 0 : user.role) !== null && _a !== void 0 ? _a : null) == 'ADMIN') || (((_b = user === null || user === void 0 ? void 0 : user.role) !== null && _b !== void 0 ? _b : null) == 'CONTRIBUTOR'));
}
function SynergyItem_update(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if ((((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN') || ((user === null || user === void 0 ? void 0 : user.role) == 'CONTRIBUTOR'))) {
        return { AND: [] };
    }
    return { OR: [] };
}
function SynergyItem_delete(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if ((((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN') || ((user === null || user === void 0 ? void 0 : user.role) == 'CONTRIBUTOR'))) {
        return { AND: [] };
    }
    return { OR: [] };
}
function BadgeExchange_create(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if ((((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN') || ((user === null || user === void 0 ? void 0 : user.role) == 'CONTRIBUTOR'))) {
        return { AND: [] };
    }
    return { OR: [] };
}
function BadgeExchange_create_input(input, context) {
    var _a, _b;
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    return ((((_a = user === null || user === void 0 ? void 0 : user.role) !== null && _a !== void 0 ? _a : null) == 'ADMIN') || (((_b = user === null || user === void 0 ? void 0 : user.role) !== null && _b !== void 0 ? _b : null) == 'CONTRIBUTOR'));
}
function BadgeExchange_update(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if ((((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN') || ((user === null || user === void 0 ? void 0 : user.role) == 'CONTRIBUTOR'))) {
        return { AND: [] };
    }
    return { OR: [] };
}
function BadgeExchange_delete(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if (((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN')) {
        return { AND: [] };
    }
    return { OR: [] };
}
function log_create(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if ((((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN') || ((user === null || user === void 0 ? void 0 : user.role) == 'CONTRIBUTOR'))) {
        return { AND: [] };
    }
    return { OR: [] };
}
function log_create_input(input, context) {
    var _a, _b;
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    return ((((_a = user === null || user === void 0 ? void 0 : user.role) !== null && _a !== void 0 ? _a : null) == 'ADMIN') || (((_b = user === null || user === void 0 ? void 0 : user.role) !== null && _b !== void 0 ? _b : null) == 'CONTRIBUTOR'));
}
function log_update(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if ((((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN') || ((user === null || user === void 0 ? void 0 : user.role) == 'CONTRIBUTOR'))) {
        return { AND: [] };
    }
    return { OR: [] };
}
function log_delete(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if (((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN')) {
        return { AND: [] };
    }
    return { OR: [] };
}
function User_update(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    if (((user === null || user === void 0 ? void 0 : user.role) == 'ADMIN')) {
        return { AND: [] };
    }
    return { OR: [] };
}
function User_read(context, db) {
    var _a;
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    return {
        OR: [(user == null) ? { OR: [] } : {
                id: user.id
            }, (((_a = user === null || user === void 0 ? void 0 : user.role) !== null && _a !== void 0 ? _a : null) == 'ADMIN') ? { AND: [] } : { OR: [] }]
    };
}
function User_delete(context, db) {
    var _a;
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    return {
        OR: [(user == null) ? { OR: [] } : {
                id: user.id
            }, (((_a = user === null || user === void 0 ? void 0 : user.role) !== null && _a !== void 0 ? _a : null) == 'ADMIN') ? { AND: [] } : { OR: [] }]
    };
}
const policy = {
    guard: {
        example: {
            create: false, create_input: false, update: false, postUpdate: true, read: false, delete: false,
        }, release: {
            create: Release_create, create_input: Release_create_input, update: Release_update, postUpdate: true, read: true, delete: Release_delete,
        }, recipe: {
            create: Recipe_create, create_input: Recipe_create_input, update: Recipe_update, postUpdate: true, read: true, delete: Recipe_delete,
        }, recipeItem: {
            create: RecipeItem_create, create_input: RecipeItem_create_input, update: RecipeItem_update, postUpdate: true, read: true, delete: RecipeItem_delete,
        }, pack: {
            create: Pack_create, create_input: Pack_create_input, update: Pack_update, postUpdate: true, read: true, delete: Pack_delete,
        }, packItem: {
            create: PackItem_create, create_input: PackItem_create_input, update: PackItem_update, postUpdate: true, read: true, delete: PackItem_delete,
        }, packPrice: {
            create: false, create_input: false, update: false, postUpdate: true, read: true, delete: false,
        }, category: {
            create: Category_create, create_input: Category_create_input, update: Category_update, postUpdate: true, read: true, delete: Category_delete,
        }, faction: {
            create: Faction_create, create_input: Faction_create_input, update: Faction_update, postUpdate: true, read: true, delete: Faction_delete,
        }, type: {
            create: Type_create, create_input: Type_create_input, update: Type_update, postUpdate: true, read: true, delete: Type_delete,
        }, rarity: {
            create: Rarity_create, create_input: Rarity_create_input, update: Rarity_update, postUpdate: true, read: true, delete: Rarity_delete,
        }, item: {
            create: Item_create, create_input: Item_create_input, update: Item_update, postUpdate: true, read: true, delete: Item_delete,
        }, itemStats: {
            create: ItemStats_create, create_input: ItemStats_create_input, update: ItemStats_update, postUpdate: true, read: true, delete: ItemStats_delete,
        }, synergy: {
            create: Synergy_create, create_input: Synergy_create_input, update: Synergy_update, postUpdate: true, read: true, delete: Synergy_delete,
        }, synergyItem: {
            create: SynergyItem_create, create_input: SynergyItem_create_input, update: SynergyItem_update, postUpdate: true, read: true, delete: SynergyItem_delete,
        }, market: {
            create: false, create_input: false, update: false, postUpdate: true, read: true, delete: false,
        }, badgeExchange: {
            create: BadgeExchange_create, create_input: BadgeExchange_create_input, update: BadgeExchange_update, postUpdate: true, read: true, delete: BadgeExchange_delete,
        }, log: {
            create: log_create, create_input: log_create_input, update: log_update, postUpdate: true, read: true, delete: log_delete,
        }, account: {
            create: false, create_input: false, update: false, postUpdate: true, read: false, delete: false,
        }, session: {
            create: false, create_input: false, update: false, postUpdate: true, read: false, delete: false,
        }, user: {
            create: true, create_input: true, update: User_update, postUpdate: true, read: User_read, delete: User_delete,
        }, verificationToken: {
            create: false, create_input: false, update: false, postUpdate: true, read: false, delete: false,
        },
    },
    validation: {
        example: {
            hasValidation: false
        },
        release: {
            hasValidation: false
        },
        recipe: {
            hasValidation: false
        },
        recipeItem: {
            hasValidation: false
        },
        pack: {
            hasValidation: false
        },
        packItem: {
            hasValidation: false
        },
        packPrice: {
            hasValidation: false
        },
        category: {
            hasValidation: false
        },
        faction: {
            hasValidation: false
        },
        type: {
            hasValidation: false
        },
        rarity: {
            hasValidation: false
        },
        item: {
            hasValidation: false
        },
        itemStats: {
            hasValidation: false
        },
        synergy: {
            hasValidation: false
        },
        synergyItem: {
            hasValidation: false
        },
        market: {
            hasValidation: false
        },
        badgeExchange: {
            hasValidation: false
        },
        log: {
            hasValidation: false
        },
        account: {
            hasValidation: false
        },
        session: {
            hasValidation: false
        },
        user: {
            hasValidation: false
        },
        verificationToken: {
            hasValidation: false
        },
    }
};
exports.default = policy;
