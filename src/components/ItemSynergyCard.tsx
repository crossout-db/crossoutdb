import { signIn, signOut, useSession } from "next-auth/react";
import { RouterOutputs } from "~/utils/api";
import Link from "next/link";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type ItemfindUniqueOutput = RouterOutputs["item"]["findUnique"];

interface ItemCardProps {
  item: ItemfindUniqueOutput;
}

export const ItemSynergyCard: React.FC<ItemCardProps> = ({ item }) => {
  const { data: sessionData } = useSession();

  return (
    <div className="w-200 card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Synergy</h2>
        {item?.itemSynergies.map((itemSynergy) => (
          <Accordion key={itemSynergy.synergyId}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={"synergy" + itemSynergy.synergyId}
            >
              {itemSynergy.synergy.name}
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {itemSynergy.synergy.synergyItems.map((synergyItem) => (
                  <li key={synergyItem.itemId}>
                    <Link
                      className="link-primary link"
                      href={"/item/" + synergyItem.itemId}
                    >
                      {synergyItem.item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};
