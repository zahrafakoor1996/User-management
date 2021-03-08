import React,{useState,createContext} from 'react';

export const  UserContext =createContext();

export const UserProvider = (props) =>{
  const [users, setUsers] = React.useState([]);
  const fetchData = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const json = await response.json();
    setUsers(json.data);
  };


  React.useEffect(() => {
    fetchData();
  }, []);

    return(
      <UserContext.Provider value={[users,setUsers]}>
          {props.children}
      </UserContext.Provider>

    );
}