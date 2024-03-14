import { useState } from 'react'
import AdminPages from '../routesadmin/RouterAdmin'
import Sidebar from '../sidebar/Sidebar'
import './Sidebar.css'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
function AdminDashboard() {


 


  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  }

  return (
    <div className='admin-dashboard'>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
     <ProtectedRoute><AdminPages /></ProtectedRoute>
    </div>
  );
}

export default AdminDashboard;
