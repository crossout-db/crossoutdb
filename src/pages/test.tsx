import { useCurrentUser } from "../lib/context";
import { GetServerSideProps } from "next";
import { getServerTranslations } from "~/lib/getServerTranslations";
import { useTranslation } from "next-i18next";
import { Prisma } from "@prisma/client";
import { trpc } from "~/lib/trpc";

type Props = {
  // Add custom props here
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const createRecipeTree = (depth: number): object | boolean => {
  if (depth <= 0) return true;

  return {
    include: {
      recipes: {
        include: {
          ingredients: {
            include: {
              item: createRecipeTree(depth - 1),
            },
          },
        },
      },
    },
  };
};

const itemArgs = Prisma.validator<Prisma.ItemDefaultArgs>()({
  include: {
    type: true,
    category: true,
    faction: true,
    rarity: true,
    itemStats: {
      orderBy: {
        timestamp: "desc",
      },
      take: 1,
    //   include: {
    //     user: {
    //       select: {
    //         name: true,
    //       },
    //     },
    //     release: true,
    //   },
    },
    recipes: {
      include: {
        ingredients: {
          include: {
            item: createRecipeTree(3),
          },
        },
      },
    },
    market: {
      orderBy: {
        timestamp: "desc",
      },
      take: 1,
    },
    itemSynergies: {
      include: {
        synergy: {
          include: {
            synergyItems: {
              include: {
                item: {
                  include: {
                    rarity: true,
                    category: true,
                  },
                },
              },
            },
          },
        },
      },
    },
  },
});

export type ItemFindUniqueOutput = Prisma.ItemGetPayload<typeof itemArgs>;

function findUniqueItem(item_id: number) {
  const { data } = trpc.item.findUnique.useQuery({
    where: { id: item_id },
    include: {
      translations: true,
      type: {
        include: { translations: true },
      },
      category: {
        include: { translations: true },
      },
      faction: true,
      rarity: true,
      itemStats: {
        orderBy: {
          timestamp: "desc",
        },
        take: 1,
        // include: {
        //   user: {
        //     select: {
        //       name: true,
        //     },
        //   },
        //   release: true,
        // },
      },
      recipes: {
        include: {
          ingredients: {
            include: {
              item: createRecipeTree(3),
            },
          },
        },
      },
      market: {
        orderBy: {
          timestamp: "desc",
        },
        take: 1,
      },
    //   itemSynergies: {
    //     include: {
    //       synergy: {
    //         include: {
    //           synergyItems: {
    //             include: {
    //               item: {
    //                 include: {
    //                   rarity: true,
    //                   category: true,
    //                 },
    //               },
    //             },
    //           },
    //         },
    //       },
    //     },
    //   },
    },
  });

  return data;
}

export default function TestPage() {
  const currentUser = useCurrentUser();
  const { t } = useTranslation();

  const data = findUniqueItem(5);

  return (
    <div className="mt-8 flex w-full flex-col items-center">
        {/* <p>{JSON.stringify(itemArgs)}</p> */}
        <pre>{data?.translations.find((t) => t.languageCode === "en")?.value}</pre>
        <pre>{data?.translations.find((t) => t.languageCode === "ru")?.value}</pre>
        <pre>{data?.type.translations.find((t) => t.languageCode === "en")?.value}</pre>
        <pre>{data?.type.translations.find((t) => t.languageCode === "ru")?.value}</pre>
        <pre>{data?.category.translations.find((t) => t.languageCode === "en")?.value}</pre>
        <pre>{data?.category.translations.find((t) => t.languageCode === "ru")?.value}</pre>
        <h2>Item</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}


// function syntaxHighlight(json) {
//     if (typeof json != 'string') {
//          json = JSON.stringify(json, undefined, 2);
//     }
//     json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
//     return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
//         let cls = 'number';
//         if (match.startsWith("\"")) {
//             if (match.endsWith(":")) {
//                 cls = 'key';
//             } else {
//                 cls = 'string';
//             }
//         } else if (/true|false/.test(match)) {
//             cls = 'boolean';
//         } else if (/null/.test(match)) {
//             cls = 'null';
//         }
//         return '<span class="' + cls + '">' + match + '</span>';
//     });
// }

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await getServerTranslations(locale ?? "en", ["common", "model"])),
  },
});
