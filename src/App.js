import * as React from "react";
import {UserProvider} from './Components/UserContext';
import UserList from "./Components/UserList";



export default function App() {
 
  return (
<UserProvider>
  <UserList/>
</UserProvider>
  );
}
