import type {
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
  Rarity,
  Recipe,
  RecipeItem,
  Release,
  PackPrice,
  Synergy,
  SynergyItem,
  Translation,
  Type,
  User,
  Prisma,
} from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import fs from "fs";

const prisma = new PrismaClient();

export interface SeedData {
  user: User[];
  release: Release[];
  recipe: Recipe[];
  recipeItem: RecipeItem[];
  pack: Pack[];
  packItem: PackItem[];
  packPrice: PackPrice[];
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
  if (process.argv.length !== 4) {
    console.error("Incorrect arguments!");
    process.exit(1);
  }
  console.log("Parsing " + process.argv[3]);
  const seedData = JSON.parse(
    fs.readFileSync(process.argv[3] ?? "", { encoding: "utf-8" })
  ) as SeedData;
    if (seedData.user && (process.argv[2] === "user" || process.argv[2] === "all")) {
    console.log("Updating user");
    await prisma.user.updateMany({
      data: seedData.user,
    });
  }
  if (seedData.release && (process.argv[2] === "release" || process.argv[2] === "all")) {
    console.log("Updating release");
    await prisma.release.updateMany({
      data: seedData.release,
    });
  }
  if (seedData.category && (process.argv[2] === "category" || process.argv[2] === "all")) {
    console.log("Updating category");
    await prisma.category.updateMany({
      data: seedData.category,
    });
  }
  if (seedData.faction && (process.argv[2] === "faction" || process.argv[2] === "all")) {
    console.log("Updating faction");
    await prisma.faction.updateMany({
      data: seedData.faction,
    });
  }
  if (seedData.type && (process.argv[2] === "type" || process.argv[2] === "all")) {
    console.log("Updating type");
    await prisma.type.updateMany({
      data: seedData.type,
    });
  }
  if (seedData.rarity && (process.argv[2] === "rarity" || process.argv[2] === "all")) {
    console.log("Updating rarity");
    await prisma.rarity.updateMany({
      data: seedData.rarity,
    });
  }
  if (seedData.item && (process.argv[2] === "item" || process.argv[2] === "all")) {
    console.log("Updating item");
    await updateItems(seedData.item);
  }
  if (seedData.itemStats && (process.argv[2] === "itemStats" || process.argv[2] === "all")) {
    console.log("Updating itemStats");
    await prisma.itemStats.updateMany({
      data: seedData.itemStats,
    });
  }
  if (seedData.recipe && (process.argv[2] === "recipe" || process.argv[2] === "all")) {
    console.log("Updating recipe");
    await prisma.recipe.updateMany({
      data: seedData.recipe,
    });
  }
  if (seedData.recipeItem && (process.argv[2] === "recipeItem" || process.argv[2] === "all")) {
    console.log("Updating recipeItem");
    await prisma.recipeItem.updateMany({
      data: seedData.recipeItem,
    });
  }
  if (seedData.pack && (process.argv[2] === "pack" || process.argv[2] === "all")) {
    console.log("Updating pack");
    await prisma.pack.updateMany({
      data: seedData.pack,
    });
  }
  if (seedData.packItem && (process.argv[2] === "packItem" || process.argv[2] === "all")) {
    console.log("Updating packItem");
    await prisma.packItem.updateMany({
      data: seedData.packItem,
    });
  }
  if (seedData.packPrice && (process.argv[2] === "packPrice" || process.argv[2] === "all")) {
    console.log("Updating packPrice");
    await prisma.packPrice.updateMany({
      data: seedData.packPrice,
    });
  }
  if (seedData.synergy && (process.argv[2] === "synergy" || process.argv[2] === "all")) {
    console.log("Updating synergy");
    await prisma.synergy.updateMany({
      data: seedData.synergy,
    });
  }
  if (seedData.synergyItem && (process.argv[2] === "synergyItem" || process.argv[2] === "all")) {
    console.log("Updating synergyItem");
    await prisma.synergyItem.updateMany({
      data: seedData.synergyItem,
    });
  }
  if (seedData.market && (process.argv[2] === "market" || process.argv[2] === "all")) {
    console.log("Updating market");
    await prisma.market.updateMany({
      data: seedData.market,
    });
  }
  if (seedData.badgeExchange && (process.argv[2] === "badgeExchange" || process.argv[2] === "all")) {
    console.log("Updating badgeExchange");
    await prisma.badgeExchange.updateMany({
      data: seedData.badgeExchange,
    });
  }
  if (seedData.country && (process.argv[2] === "country" || process.argv[2] === "all")) {
    console.log("Updating country");
    await prisma.country.updateMany({
      data: seedData.country,
    });
  }
  if (seedData.language && (process.argv[2] === "language" || process.argv[2] === "all")) {
    console.log("Updating language");
    await prisma.language.updateMany({
      data: seedData.language,
    });
  }
  if (seedData.translation && (process.argv[2] === "translation" || process.argv[2] === "all")) {
    console.log("Updating translation");
    await updateTranslations(seedData.translation);
  }
  // if (seedData.log && (process.argv[2] === "log" || process.argv[2] === "all")) {
  //   console.log("Updating log");
  //   await prisma.log.updateMany({
  //     data: seedData.log,
  //   });
  // }
}

async function updateItems(items: Item[]) {
  for (const item of items) {
    await prisma.item.update({
      where: {
        id: item.id,
      },
      data: {
        rarityId: item.rarityId,
      },
    });
  }
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
