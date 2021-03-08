import React, { useState,useContext } from 'react';
import "./styles.css";
import userPic from'../images/userPic.svg';
import filmnetLogo from '../images/filmnetLogo.svg';
import Modal from '@material-ui/core/Modal';
import {UserContext} from './UserContext';


const UserList = ()=>{

  const [users,setUsers]=useContext(UserContext);
  const [open, setOpen] = React.useState(false);
  const [firstname,setName]=useState('');
  const [lastname,setLastname]=useState('');
  const [mail,setMail]=useState('');
  const [search,setSearch]=useState('');


  const handleName=(e)=>{
    e.preventDefault();
    setName(e.target.value);
  };

  const handleLastname=(e)=>{
    e.preventDefault();
    setLastname(e.target.value);
  };

  const handleMail=(e)=>{
    e.preventDefault();
    setMail(e.target.value);
  };


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUsers(prevUsers=>[...prevUsers,{avatar:userPic , first_name:firstname , last_name: lastname , email:mail}])
  };


  const body = (

      <div className="user-form" >
        <img src={userPic} className="user-photo"/>
        <input className="new-input" name="firstname" placeholder='name'  onChange={handleName}/>
        <input className="new-input" name="lastname" placeholder='last name'  onChange={handleLastname}/>
        <input className="new-input" name="usermail" placeholder='email' onChange={handleMail}/>
        <button className="add-Btn" onClick={handleClose}>Save</button>
      </div>
 
  );

  const filteredUsers=users.filter(user=>{
    return user.first_name.toLowerCase().includes(search.toLowerCase())
  })


    return(
<div className="UserList">
      <img className="filmnet-logo" src={filmnetLogo}/>
      <input className="Search-bar" type="text" placeholder="search" onChange={(e)=>setSearch(e.target.value)}></input>
      <div className="flex">
        {users.length &&
          filteredUsers.map((user) => {
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