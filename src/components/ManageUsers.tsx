import DeleteIcon from "@mui/icons-material/Delete";
import { useCurrentUser } from "../lib/context";
import { UserRole } from "@prisma/client";
import {
  useFindManyUser,
  useFindUniqueUser,
  useMutateUser,
} from "zenstack/generated/swr/hooks";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import Avatar from "./Avatar";

type Props = {
  selectedUserId: string | undefined;
};

export default function ManageUsers({ selectedUserId }: Props) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<UserRole>(UserRole.USER);
  const currentUser = useCurrentUser();

  const { data: user } = useFindUniqueUser({ where: { id: selectedUserId } });
  const { updateUser, deleteUser } = useMutateUser();

  const removeUser = async (id: string) => {
    if (confirm(`Are you sure to remove this user?`)) {
      await deleteUser({ where: { id } });
    }
  };

  return (
    <div>
      {/* <div className="mb-8 flex w-full flex-wrap items-center gap-2">
        <input
          type="text"
          placeholder="Type user email and enter to invite"
          className="input input-bordered input-sm mr-2 flex-grow"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setEmail(e.currentTarget.value);
            console.log("userid:" + selectedUserId);
          }}
        />

        <select
          className="select select-sm mr-2"
          value={role}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            setRole(e.currentTarget.value as UserRole);
            console.log("role changed to:" + e.currentTarget.value);
          }}
        >
          {Object.values(UserRole).map((selectedRole: UserRole) => (
            <option key={selectedRole} value={selectedRole}>
              {selectedRole}
            </option>
          ))}
        </select>
      </div>
 */}
      <ul className="space-y-2">
        {/* {users?.map((user) => ( */}
        {user && (
          <li key={user.id} className="flex w-full flex-wrap justify-between">
            <div className="flex items-center">
              <div className="mr-2 hidden md:block">
                <Avatar user={user} size={32} />
              </div>
              <p className="mr-2 line-clamp-1 w-36 md:w-48">{user.name}</p>
              <select
                className="select select-sm mr-2"
                value={user.role}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                  //FIXME: Should this be an await istead of void?
                  void updateUser({
                    where: { id: user.id },
                    data: { role: e.currentTarget.value as UserRole },
                  });
                  console.log("role changed to:" + e.currentTarget.value);
                }}
              >
                {Object.values(UserRole).map((selectedRole: UserRole) => (
                  <option key={selectedRole} value={selectedRole}>
                    {selectedRole}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center">
              {(currentUser?.id == user.id || currentUser?.role == "ADMIN") && (
                <DeleteIcon
                  className="h-4 w-4 text-gray-500"
                  onClick={() => {
                    //FIXME: Should this be an await istead of void?
                    void removeUser(user.id);
                  }}
                />
              )}
            </div>
          </li>
        )}
        {/* ))} */}
      </ul>
    </div>
  );
}
