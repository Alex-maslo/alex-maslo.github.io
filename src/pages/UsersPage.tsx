import { useEffect, useState } from "react";
import { getData } from "../services/api.service.ts";
import { IUser } from "../models/IUsersBase.ts";
import User from "../components/User.tsx";

const UsersPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    getData("/users").then((data) => setUsers(data.users));
  }, []);
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-cols-1 gap-4 p-3">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
