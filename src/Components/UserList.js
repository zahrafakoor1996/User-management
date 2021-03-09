import React, { useState,useContext } from 'react';
import "./styles.css";
import userPic from'../images/userPic.svg';
import filmnetLogo from '../images/filmnetLogo.svg';
import Modal from '@material-ui/core/Modal';
import {UserContext} from './UserContext';


const UserList = ()=>{

  const [users,setUsers]=useContext(UserContext);
  const [open, setOpen] = React.useState(false);
  const [newUser,setNewuser]=useState({
    firstname:'',
    lastname:'',
    mail:'',

  })
  // const [firstname,setName]=useState('');
  // const [lastname,setLastname]=useState('');
  // const [mail,setMail]=useState('');
  const [search,setSearch]=useState('');
  const [errorMessage,setErrorMessage]=useState('');


  const onChanange = e =>{
    var u = { ...newUser};
    u[e.target.name] = e.target.value;
    setNewuser(u);
  }


  const handleOpen = () => {
    setErrorMessage('');
    setOpen(true);
  };

  const handleSave = () => {
    const fnLength=newUser.firstname;
    const lnLength=newUser.lastname;
    const mLength=newUser.mail;
    if(fnLength.length<1|lnLength.length<1|mLength.length<1){
      setErrorMessage('Please fill in all feilds!');
    }else{
    setErrorMessage('');
    setOpen(false);
    setUsers(prevUsers=>[...prevUsers,{avatar:userPic , first_name:newUser.firstname , last_name: newUser.lastname , email: newUser.mail}]);
    newUser.firstname='';
    newUser.lastname='';
    newUser.mail='';
  }
  };
  const handleCancel = () => {
    setErrorMessage('');
    setOpen(false);
    newUser.firstname='';
    newUser.lastname='';
    newUser.mail='';
    
  }


  const body = (

      <div className="user-form" >
        <img src={userPic} className="user-photo"/>
        <input className="new-input" type="text" name="firstname" placeholder='name'  onChange={onChanange}/>
        <input className="new-input" type="text" name="lastname" placeholder='last name'  onChange={onChanange}/>
        <input className="new-input" type="email" name="mail" placeholder='email' onChange={onChanange}/>
        <h className="Error">{errorMessage}</h>
        <div>
        <button className="Save-Btn" onClick={handleSave}>Save</button>
        <button className="Cancel-Btn" onClick={handleCancel}>Cancel</button>
        </div>
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
        onClose={handleCancel}
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