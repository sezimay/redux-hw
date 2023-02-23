import React from "react";
import  WithData  from "../../helpers/WithData";
import { App } from "../App/App";
const UserDetails = (users) => {

  return (
    <ol>
      <li>id: {users.users[3].id}</li>
      <li>name: {users.users[3].name}</li>
      <li>adress: {users.users[3].address.street}</li>
      <li> phone: {users.users[3].phone}</li>
      <li> company: {users.users[3].company.name}</li>
      <li>email: {users.users[3].email}</li>
    </ol>
  );
};

export default WithData(UserDetails);