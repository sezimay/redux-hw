import React from "react";
import  WithData  from "../../helpers/WithData";
import {App} from '../App/App'
const UserDetails = (users) => {

  return (
    <ul>
      <li>{users.users[5].id}</li>
      <li>{users.users[5].name}</li>
      <li>{users.users[5].address.street}</li>
      <li>{users.users[5].phone}</li>
      <li>{users.users[5].company.name}</li>
      <li>{users.users[5].email}</li>
    </ul>
  );
};

export default WithData(UserDetails);