import * as React from "react";
import {UserProvider} from './Components/UserContext';
import UserList from "./Components/UserList";
import Nav from './Components/Nav'


export default function App() {
 
  return (
<UserProvider>
  <Nav/>
  <UserList/>
</UserProvider>
  );
}
