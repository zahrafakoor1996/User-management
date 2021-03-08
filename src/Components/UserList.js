import React, { useState,useContext } from 'react';
import "./styles.css";
import userPic from'../images/userPic.svg';
import filmnetLogo from '../images/filmnetLogo.svg';
import Modal from '@material-ui/core/Modal';
import {UserContext} from './UserContext';


const UserList = ()=>{

  const [users,setUsers]=useContext(UserContext);
  const [open, setOpen] = React.useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const body = (

      <div className="user-form" >
        <img src={userPic} className="user-photo"/>
        <input className="new-input" placeholder='name'/>
        <input className="new-input" placeholder='email'/>
        <button className="add-Btn" onClick={handleClose}>Save</button>
      </div>
 
  );


    return(
<div className="App">
      <img className="filmnet-logo" src={filmnetLogo}/>
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              <div className="box" key={user.id}>
                <img  className="user-photo" key={user.avatar} src={user.avatar} />
                <p>
                  <strong className="name">{user.first_name} {user.last_name}</strong>
                </p>
                
                <h className="email">{user.email}</h>
                
              </div>
            );
          })}
      </div>   
      <div>
      <button className="add-Btn" type="button" onClick={handleOpen}>
        Add new
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
    </div>
    );
}


export default UserList;