import { PrismaClient } from '@prisma/client'
import fs from 'fs';
import { SeedData } from './seed';

const prisma = new PrismaClient()

async function main() {

    const seedData: SeedData = {
        user: [],
        release: await prisma.release.findMany({}),
        recipe: await prisma.recipe.findMany({}),
        recipeItem: await prisma.recipeItem.findMany({}),
        pack: await prisma.pack.findMany({}),
        packItem: await prisma.packItem.findMany({}),
        packPrice: await prisma.packPrice.findMany({}),
        category: await prisma.category.findMany({}),
        faction: await prisma.faction.findMany({}),
        type: await prisma.type.findMany({}),
        rarity: await prisma.rarity.findMany({}),
        item: await prisma.item.findMany({}),
        itemStats: await prisma.itemStats.findMany({}),
        synergy: await prisma.synergy.findMany({}),
        synergyItem: await prisma.synergyItem.findMany({}),
        market: await prisma.market.findMany({}),
        badgeExchange: await prisma.badgeExchange.findMany({}),
        country: await prisma.country.findMany({}),
        language: await prisma.language.findMany({}),
        translation: await prisma.translation.findMany({}),
        log: await prisma.log.findMany({}),
    }
    
    fs.writeFileSync('prisma/seedData.json', JSON.stringify(seedData));
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