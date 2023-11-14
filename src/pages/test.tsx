import { useCurrentUser } from "../lib/context";
import { GetServerSideProps, NextPage } from "next";
import { getServerSideTranslations } from "~/lib/getServerTranslations";
import { i18n, useTranslation } from "next-i18next";
import { Prisma } from "@prisma/client";
import { trpc } from "~/lib/trpc";
import { CodeSnippet } from "~/components/CodeSnippet";

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
        include: {
          user: {
            select: {
              name: true,
            },
          },
          release: true,
        },
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

  return data;
}

// export function chooseLocName(
//   locName: LocName[],
//   lang: string,
// ): string {
//   return (
//     locName.find((ln) => ln.lang === lang)?.name ||
//     locName.find((ln) => ln.lang === "en")?.name ||
//     locName[0].name
//   );
// }

const TestPage: NextPage = () => {
  const currentUser = useCurrentUser();
  const { t } = useTranslation();

  // const data = findUniqueItem(5);
  const { data } = trpc.item.findUnique.useQuery({
    where: {
      id: 5,
    },
    include: {
      translations: true,
      type: {
        include: { translations: true },
      },
      category: {
        include: { translations: true },
      },
    },
  });

  const { data: user } = trpc.user.findMany.useQuery({});
  console.log(user);

  const { mutate: createRarity } = trpc.user.create.useMutation();
  const { mutate: updateRarity } = trpc.user.update.useMutation();
  const createRare: Prisma.UserCreateArgs = {
    data: {
      id: "test",
      name: "test",
    },
  };

  const handleCreate = async () => {
    createRarity(createRare);
  };

  const handleUpdate = async () => {
    updateRarity({
        where: {
            id: "test",
        },
        data: {
            name: "tested3",
        },
    });
  };

  return (
    <div className="mt-8 flex w-full flex-col items-center bg-white">
      <button onClick={() => handleCreate()}>CREATE</button>
      <button onClick={() => handleUpdate()}>UPDATE</button>
      <p>{JSON.stringify(data)}</p>
      {/* <pre>{trans(data)}</pre> */}
      {/* <pre>{data?.translations.find((t) => t.languageCode === "en")?.value}</pre>
      <pre>{data?.translations.find((t) => t.languageCode === "ru")?.value}</pre>
      <pre>{data?.type.translations.find((t) => t.languageCode === "en")?.value}</pre>
      <pre>{data?.type.translations.find((t) => t.languageCode === "ru")?.value}</pre>
      <pre>{data?.category.translations.find((t) => t.languageCode === "en")?.value}</pre>
      <pre>{data?.category.translations.find((t) => t.languageCode === "ru")?.value}</pre> */}
      {/* <pre>{data?.[0]?.userId}</pre>
      <pre>{user?.id}</pre> */}
      <h1>DATA</h1>
      {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
      {data != undefined && (
        <CodeSnippet
          code={JSON.stringify(data, null, 4)}
          language="language-json"
        />
      )}
      {/* <pre>
        <code className="language-javascript">{JSON.stringify(data, null, 4)}</code>
      </pre> */}
    </div>
  );

  const { data: fallback1 } = trpc.item.findUnique.useQuery({
    where: {
      id: 1,
    },
    include: {
      translations: true,
    },
  });

  //   const translation1 =
  //     fallback1.translations.find((t) => t.languageCode === i18n.language)
  //       .value ||
  //     fallback1.translations.find((t) => t.languageCode === "en").value ||
  //     fallback1.key;

  const { data: fallback2 } = trpc.item.findUnique.useQuery({
    where: {
      id: 1,
    },
    include: {
      translations: {
        where: {
          OR: [
            {
              languageCode: i18n?.language,
            },
            {
              languageCode: "en",
            },
          ],
        },
      },
    },
  });

  //   const translation2 = fallback2.translations[0].value ?? fallback2.key;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await getServerSideTranslations(locale ?? "en", ["common", "model"])),
  },
});

function trans(
  data: {
    type: {
      translations: {
        id: number;
        languageCode: string;
        key: string;
        value: string;
      }[];
    } & { id: number; name: string };
    category: {
      translations: {
        id: number;
        languageCode: string;
        key: string;
        value: string;
      }[];
    } & { id: number; name: string };
    translations: {
      id: number;
      languageCode: string;
      key: string;
      value: string;
    }[];
  } & {
    id: number;
    oldId: number | null;
    name: string;
    marketDef: string | null;
    quantity: number;
    typeId: number;
    oldTypeId: number | null;
    categoryId: number;
    factionId: number;
    rarityId: number;
    level: number;
    sellPriceMin: number | null;
    sellOrders: number | null;
    buyPriceMax: number | null;
    buyOrders: number | null;
    craftCost: number | null;
    timestamp: Date | null;
    saleable: boolean;
    active: boolean;
    logId: number | null;
  },
) {
  return data.translations.find((t) => t.languageCode === i18n?.language)
    ?.value;
}

export default TestPage;
