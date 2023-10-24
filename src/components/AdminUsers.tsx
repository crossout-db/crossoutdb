import { useCurrentUser } from "../lib/context";
import { useFindManyUser } from "zenstack/generated/swr/hooks";
import Avatar from "./Avatar";
import ManageUsers from "./ManageUsers";
import { useEffect, useState } from "react";
import Error from 'next/error';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function AdminUsers() {
  const currentUser = useCurrentUser();
  const { data: users } = useFindManyUser();
  const [selectedUserId, setSelectedUserId] = useState('');

  if (currentUser?.role !== "ADMIN") {
    return <Error statusCode={404} />;
  }

  return (
      <div className="mt-8 flex w-full flex-col items-center text-center">
        <div className="w-full p-8">
          {ManagementDialog( {selectedUserId} )}
          {users && (
            <label
              className="modal-button mr-1 cursor-pointer"
              htmlFor="management-modal"
            >
              {users?.map((user) => (
                <li
                  key={user.id}
                  onClick={() => setSelectedUserId(user.id)}
                  className="flex w-full flex-wrap justify-between"
                >
                  <div className="flex items-center">
                    <div className="mr-2 hidden md:block">
                      <Avatar user={user} size={32} />
                    </div>
                    <p className="mr-2 line-clamp-1 w-36 md:w-48">
                      {user.name}
                    </p>
                    <p>{user.role}</p>
                  </div>
                </li>
              ))}
            </label>
          )}
        </div>
      </div>
  );
};

function ManagementDialog( { selectedUserId }: { selectedUserId: string } ) {

    return (
    <>
      {/* <label htmlFor="management-modal" className="modal-button">
        <AddIcon className="mr-1 h-6 w-6 cursor-pointer text-gray-500" />
      </label> */}

      <input type="checkbox" id="management-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-base font-bold md:text-lg">Manage User</h3>

          <div className="mt-4 p-4">
            <ManageUsers selectedUserId={selectedUserId} />
            {/* onRequestClose={() => setSelectedUser('')} */}
          </div>

          <div className="modal-action">
            <label htmlFor="management-modal" className="btn btn-outline">
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
