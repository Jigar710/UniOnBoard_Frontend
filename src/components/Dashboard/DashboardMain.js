import React from 'react';
import { useState } from 'react';
import Upload from '../Courses/Components/Upload';
// import { BrowserRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './DashboardMain.css';
import ChangePassword from './pages/ChangePassword/ChangePassword';
import DashboardHome from './pages/DashboardHome/DashboardHome';
import ReqFaculties from './pages/ReqFaculties/ReqFaculties';
import UpdateProfile from './pages/UpdateProfile/UpdateProfile';

function DashboardMain() {
  const [home,setHome] = useState(true);
  const [up,setUp] = useState(false);
  const [changePwd,setChangePwd] = useState(false);
  const [reqFac,setReqFac] = useState(false);
  const [addCourse, setAddCourse] = useState(false);

  const handleUpdateProfile = () =>{
    setUp(true);
    setHome(false);
    setChangePwd(false)
    setReqFac(false);
  }
  const handleHome = () =>{
    setHome(true);
    setUp(false);
    setChangePwd(false)
    setReqFac(false);
  }
  const handleChangePassword = () =>{
    setChangePwd(true)
    setHome(false);
    setUp(false);
    setReqFac(false);
  }
  const handleReqFac = () =>{
    setReqFac(true);
    setHome(false);
    setUp(false);
    setChangePwd(false)
  }
  const handleAddCourse=()=>{
    setAddCourse(true)
    setHome(false);
    setUp(false);
    setReqFac(false);
    setChangePwd(false)
  }
  return (
   <>
   {/* <h1>Dashboard</h1> */}
   <div className="app-body">

<aside className="app-sidebar">
  <div className="app-logo sticky-top">Dashboard</div>
  <div className="app-sidenav">

    <ul className="nav flex-column">
      <li className="nav-link sidemenu" onClick={handleHome}>
                  Home
      </li>
      <li className="nav-link sidemenu" onClick={handleUpdateProfile}>
                  Update Profile
      </li>
      <li className="nav-link sidemenu" onClick={handleChangePassword}>
                  Change Password
      </li>
      <li className="nav-link sidemenu" onClick={handleReqFac}>
      Requested Faculties
      </li>
      <li className="nav-link sidemenu" onClick={handleAddCourse}>
        Add Your Course
      </li>
      </ul>

  </div>
</aside>

{/* <header className="app-header">

</header> */}

<main className="app-main">
{(home) ? <DashboardHome /> : ""}
{(up) ? <UpdateProfile /> : ""}
{(changePwd) ? <ChangePassword /> : ""}
{(reqFac) ? <ReqFaculties /> : ""}
{(addCourse) ? <Upload /> : ""}
</main>
</div>

   </>
  );
}

export default DashboardMain;
