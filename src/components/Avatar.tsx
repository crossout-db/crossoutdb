import { UserRole } from "@prisma/client";
import { get } from "lodash";
import { User } from "next-auth";
import Image from "next/image";

type Props = {
  user?: User;
  size?: number;
};

export default function Avatar({ user, size }: Props) {
  if (!user) {
    return (
      <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
        <svg
          className="absolute -left-1 h-12 w-12 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    );
  }

function getRingColor(userRole: UserRole): string {
    switch (userRole) {
        case "ADMIN":
            return "ring-blue-800 dark:ring-blue-800";
        case "CONTRIBUTOR":
            return "ring-green-600 dark:ring-green-600";
        default:
            return "ring-gray-500 dark:ring-gray-500";
    }
}


  return (
    <div>
      <Image
        src={user.image ?? ""}
        alt={user.name ?? ""}
        width={size ?? 42}
        height={size ?? 42}
        className={`rounded-full p-1 ring-4 ${getRingColor(user.role)}`}
        style={{ height: size }}
      />
    </div>
  );
}
