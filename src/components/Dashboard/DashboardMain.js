import React from 'react';
import { useState } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './DashboardMain.css';
import DashboardHome from './pages/DashboardHome/DashboardHome';
import UpdateProfile from './pages/UpdateProfile/UpdateProfile';

function DashboardMain() {
  const [home,setHome] = useState(true);
  const [up,setUp] = useState(false);
  const handleUpdateProfile = () =>{
    console.log("updateprofile");
    setUp(true);
    setHome(false);
  }
  const handleHome = () =>{
    console.log("home");
    setHome(true);
    setUp(false);
    
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
                  updateprofile
      </li>
      </ul>

  </div>
</aside>

{/* <header className="app-header">

</header> */}

<main className="app-main">
{(home) ? <DashboardHome /> : ""}
{(up) ? <UpdateProfile /> : ""}
</main>
</div>

   </>
  );
}

export default DashboardMain;
