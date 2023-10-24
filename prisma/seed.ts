import { BadgeExchange, Category, Faction, Item, ItemStats, Log, Market, Pack, PackItem, PrismaClient, Rarity, Recipe, RecipeItem, Release, SteamAppPrice, Synergy, SynergyItem, Type, User } from '@prisma/client'
import fs from 'fs';

const prisma = new PrismaClient()

export interface SeedData {
    user: User[];
    release: Release[];
    recipe: Recipe[];
    recipeItem: RecipeItem[];
    pack: Pack[];
    packItem: PackItem[];
    steamAppPrice: SteamAppPrice[];
    category: Category[];
    faction: Faction[];
    type: Type[];
    rarity: Rarity[];
    item: Item[];
    itemStats: ItemStats[];
    synergy: Synergy[];
    synergyItem: SynergyItem[];
    market: Market[];
    badgeExchange: BadgeExchange[];
    log: Log[];    
}

async function main() {
    const seedData = await JSON.parse(fs.readFileSync('prisma/seedData.json', 'utf8')) as SeedData;
    
    await prisma.user.createMany({
        data: seedData.user
    });
    await prisma.release.createMany({
        data: seedData.release
    });
    await prisma.category.createMany({
        data: seedData.category
    });
    await prisma.faction.createMany({
        data: seedData.faction
    });
    await prisma.type.createMany({
        data: seedData.type
    });
    await prisma.rarity.createMany({
        data: seedData.rarity
    });
    await prisma.item.createMany({
        data: seedData.item
    });
    await prisma.recipe.createMany({
        data: seedData.recipe
    });
    await prisma.recipeItem.createMany({
        data: seedData.recipeItem
    });
    await prisma.pack.createMany({
        data: seedData.pack
    });
    await prisma.packItem.createMany({
        data: seedData.packItem
    });
    await prisma.steamAppPrice.createMany({
        data: seedData.steamAppPrice
    });
    await prisma.itemStats.createMany({
        data: seedData.itemStats
    });
    await prisma.synergy.createMany({
        data: seedData.synergy
    });
    await prisma.synergyItem.createMany({
        data: seedData.synergyItem
    });
    await prisma.market.createMany({
        data: seedData.market
    });
    await prisma.badgeExchange.createMany({
        data: seedData.badgeExchange
    });
    // await prisma.log.createMany({
    //     data: seedData.log
    // });
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })