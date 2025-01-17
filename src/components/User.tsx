import { FC } from "react";
import { IUser } from "../models/IUsersBase.ts";

type UserProps = {
  user: IUser;
};
const User: FC<UserProps> = ({ user }) => {
  return (
    <div className="flex flex-col gap-4 border border-green-400 p-3">
      <h2 className="font-semibold text-white p-2 bg-red-500">
        {user.firstName} {user.lastName}
      </h2>
      <p>
        {user.age} years, {user.gender}
      </p>
      <img src={user.image} alt="" />
    </div>
  );
};

export default User;
