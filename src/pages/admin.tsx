import WithNavBar from "../components/WithNavBar";
import { useCurrentUser } from "../lib/context";
import Error from "next/error";
import { Tab } from "@headlessui/react";
import AdminUsers from "~/components/AdminUsers";
import AdminItems from "~/components/AdminItems";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Admin() {
  const currentUser = useCurrentUser();

  if (currentUser?.role !== "ADMIN") {
    return <Error statusCode={404} />;
  }

  return (
    <WithNavBar>
      <div className="mt-8 flex w-full flex-col items-center text-center">
        <div className="w-full p-8">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white",
                  )
                }
              >
                Users
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white",
                  )
                }
              >
                Items
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white",
                  )
                }
              >
                Recipes
              </Tab>
            </Tab.List>
            <Tab.Panels className="mt-2">
              <Tab.Panel>
                <AdminUsers />
              </Tab.Panel>
              <Tab.Panel>
                <AdminItems />
              </Tab.Panel>
              <Tab.Panel>Recipes</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </WithNavBar>
  );
}
