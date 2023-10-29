import {
  BadgeExchange,
  Category,
  Country,
  Faction,
  Item,
  ItemStats,
  Language,
  Log,
  Market,
  Pack,
  PackItem,
  PrismaClient,
  Rarity,
  Recipe,
  RecipeItem,
  Release,
  SteamAppPrice,
  Synergy,
  SynergyItem,
  Translation,
  Type,
  User,
} from "@prisma/client";
import fs from "fs";

const prisma = new PrismaClient();

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
  country: Country[];
  language: Language[];
  translation: Translation[];
  log: Log[];
}

async function main() {
  if (process.argv.length !== 3) {
    console.error("Incorrect arguments!");
    process.exit(1);
  }
  console.log("Parsing " + process.argv[2]);
  const seedData = (await JSON.parse(
    fs.readFileSync("prisma/" + process.argv[2], "utf8"),
  )) as SeedData;

  // await prisma.user.createMany({
  //   data: seedData.user,
  // });
  // await prisma.release.createMany({
  //   data: seedData.release,
  // });
  // await prisma.category.createMany({
  //   data: seedData.category,
  // });
  // await prisma.faction.createMany({
  //   data: seedData.faction,
  // });
  // await prisma.type.createMany({
  //   data: seedData.type,
  // });
  // await prisma.rarity.createMany({
  //   data: seedData.rarity,
  // });
  // await prisma.item.createMany({
  //   data: seedData.item,
  // });
  // await prisma.recipe.createMany({
  //   data: seedData.recipe,
  // });
  // await prisma.recipeItem.createMany({
  //   data: seedData.recipeItem,
  // });
  // await prisma.pack.createMany({
  //   data: seedData.pack,
  // });
  // await prisma.packItem.createMany({
  //   data: seedData.packItem,
  // });
  // await prisma.steamAppPrice.createMany({
  //   data: seedData.steamAppPrice,
  // });
  // await prisma.synergy.createMany({
  //   data: seedData.synergy,
  // });
  // await prisma.synergyItem.createMany({
  //   data: seedData.synergyItem,
  // });
  // await prisma.market.createMany({
  //   data: seedData.market,
  // });
  // await prisma.badgeExchange.createMany({
  //   data: seedData.badgeExchange,
  // });
  // await prisma.country.createMany({
  //   data: seedData.country,
  // });
  // await prisma.language.createMany({
  //   data: seedData.language,
  // });
  // await prisma.itemStats.createMany({
  //   data: seedData.itemStats,
  // });
  // await prisma.log.createMany({
  //   data: seedData.log,
  // });
  // await updateTranslations(seedData.translation);
}

async function updateTranslations(translations: Translation[]) {
  for (const translation of translations) {
    const target = translation.key.split("_")[0];
    switch (target) {
      case "Category":
        await prisma.category.update({
          where: {
            name: translation.key,
          },
          data: {
            translations: {
              create: translation,
            },
          },
        });
        break;
      case "Type":
        await prisma.type.update({
          where: {
            name: translation.key,
          },
          data: {
            translations: {
              create: translation,
            },
          },
        });
        break;
      case "Item":
        await prisma.item.update({
          where: {
            name: translation.key,
          },
          data: {
            translations: {
              create: translation,
            },
          },
        });
        break;
      default:
      // throw new Error(`Invalid target: ${target}`);
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
