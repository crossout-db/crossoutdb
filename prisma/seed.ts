import {
  type BadgeExchange,
  type Category,
  type Country,
  type Faction,
  type Item,
  type ItemStats,
  type Language,
  type Log,
  type Market,
  type Pack,
  type PackItem,
  PrismaClient,
  type Rarity,
  type Recipe,
  type RecipeItem,
  type Release,
  type SteamAppPrice,
  type Synergy,
  type SynergyItem,
  type Translation,
  type Type,
  type User,
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
  if (process.argv.length !== 4) {
    console.error("Incorrect arguments!");
    process.exit(1);
  }
  console.log("Parsing " + process.argv[3]);
  const seedData = JSON.parse(
    fs.readFileSync(process.argv[3] ?? "", { encoding: "utf-8" })
  ) as SeedData;
    if (seedData.user && (process.argv[2] === "user" || process.argv[2] === "all")) {
    console.log("Seeding user");
    await prisma.user.createMany({
      data: seedData.user,
    });
  }
  if (seedData.release && (process.argv[2] === "release" || process.argv[2] === "all")) {
    console.log("Seeding release");
    await prisma.release.createMany({
      data: seedData.release,
    });
  }
  if (seedData.category && (process.argv[2] === "category" || process.argv[2] === "all")) {
    console.log("Seeding category");
    await prisma.category.createMany({
      data: seedData.category,
    });
  }
  if (seedData.faction && (process.argv[2] === "faction" || process.argv[2] === "all")) {
    console.log("Seeding faction");
    await prisma.faction.createMany({
      data: seedData.faction,
    });
  }
  if (seedData.type && (process.argv[2] === "type" || process.argv[2] === "all")) {
    console.log("Seeding type");
    await prisma.type.createMany({
      data: seedData.type,
    });
  }
  if (seedData.rarity && (process.argv[2] === "rarity" || process.argv[2] === "all")) {
    console.log("Seeding rarity");
    await prisma.rarity.createMany({
      data: seedData.rarity,
    });
  }
  if (seedData.item && (process.argv[2] === "item" || process.argv[2] === "all")) {
    console.log("Seeding item");
    await prisma.item.createMany({
      data: seedData.item,
    });
  }
  if (seedData.itemStats && (process.argv[2] === "itemStats" || process.argv[2] === "all")) {
    console.log("Seeding itemStats");
    await prisma.itemStats.createMany({
      data: seedData.itemStats,
    });
  }
  if (seedData.recipe && (process.argv[2] === "recipe" || process.argv[2] === "all")) {
    console.log("Seeding recipe");
    await prisma.recipe.createMany({
      data: seedData.recipe,
    });
  }
  if (seedData.recipeItem && (process.argv[2] === "recipeItem" || process.argv[2] === "all")) {
    console.log("Seeding recipeItem");
    await prisma.recipeItem.createMany({
      data: seedData.recipeItem,
    });
  }
  if (seedData.pack && (process.argv[2] === "pack" || process.argv[2] === "all")) {
    console.log("Seeding pack");
    await prisma.pack.createMany({
      data: seedData.pack,
    });
  }
  if (seedData.packItem && (process.argv[2] === "packItem" || process.argv[2] === "all")) {
    console.log("Seeding packItem");
    await prisma.packItem.createMany({
      data: seedData.packItem,
    });
  }
  if (seedData.steamAppPrice && (process.argv[2] === "steamAppPrice" || process.argv[2] === "all")) {
    console.log("Seeding steamAppPrice");
    await prisma.steamAppPrice.createMany({
      data: seedData.steamAppPrice,
    });
  }
  if (seedData.synergy && (process.argv[2] === "synergy" || process.argv[2] === "all")) {
    console.log("Seeding synergy");
    await prisma.synergy.createMany({
      data: seedData.synergy,
    });
  }
  if (seedData.synergyItem && (process.argv[2] === "synergyItem" || process.argv[2] === "all")) {
    console.log("Seeding synergyItem");
    await prisma.synergyItem.createMany({
      data: seedData.synergyItem,
    });
  }
  if (seedData.market && (process.argv[2] === "market" || process.argv[2] === "all")) {
    console.log("Seeding market");
    await prisma.market.createMany({
      data: seedData.market,
    });
  }
  if (seedData.badgeExchange && (process.argv[2] === "badgeExchange" || process.argv[2] === "all")) {
    console.log("Seeding badgeExchange");
    await prisma.badgeExchange.createMany({
      data: seedData.badgeExchange,
    });
  }
  if (seedData.country && (process.argv[2] === "country" || process.argv[2] === "all")) {
    console.log("Seeding country");
    await prisma.country.createMany({
      data: seedData.country,
    });
  }
  if (seedData.language && (process.argv[2] === "language" || process.argv[2] === "all")) {
    console.log("Seeding language");
    await prisma.language.createMany({
      data: seedData.language,
    });
  }
  if (seedData.translation && (process.argv[2] === "translation" || process.argv[2] === "all")) {
    console.log("Seeding translation");
    await updateTranslations(seedData.translation);
  }
  // if (seedData.log && (process.argv[2] === "log" || process.argv[2] === "all")) {
  //   console.log("Seeding log");
  //   await prisma.log.createMany({
  //     data: seedData.log,
  //   });
  // }
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
