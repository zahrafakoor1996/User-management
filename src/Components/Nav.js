import React, { useState,useContext } from 'react';
import "./styles.css";
import {UserContext} from './UserContext';


const Nav = ()=>{

    const [users,setUsers]=useContext(UserContext);

    return(
<div className="Nav">
    <h className="User-num">Users number : {users.length}</h>
    </div>
    );
}


export default Nav;