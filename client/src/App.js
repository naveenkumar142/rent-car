import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Menu from './components/menu/menu';
import MainLoginPage from './components/Main-login-page.jsx/main-login';
import Newuser from './components/newuser/newuser';
import About from './components/About/about';
import Contact from './components/contact/contactus';
import ContactForm from './components/contact/contactus';
import Admin from './components/Admin/admin';
import Adminbackground from './components/Admin/admin-background';
import AdminViewclient from './components/Admin-view-client/view-client';
import AdminOwnerView from './components/Admin-owner-view/admin-owner-view';
import Ownerlogin from './components/owner-login/owner-login';
import OwnerLoginBackground from './components/owner-login/owner-login-background';
import Addvehicle from './components/Add-vehicle/addvehicle';
import ClientPage from './components/Client-page/client-page';
import ClientBackground from './components/Client-page/client-background';
import UpdateDetails from './components/update-owner-details/update-owner';
const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={[<Menu/>,<MainLoginPage/>]}/>
      <Route path='/newuser' element={[<Menu/>,<Newuser/>]}/>
      <Route path='/aboutus' element={[<Menu/>,<About/>]}/>
      <Route path='/contact' element={[<Menu/>,<ContactForm/>]}/>
      <Route path='/admin' element={[<Admin/>,<Adminbackground/>]}/>
      <Route path='/admin-view-client-details' element={[<Admin/>,<AdminViewclient/>]}/>
      <Route path='/admin-view-owner-details' element={[<Admin/>,<AdminOwnerView/>]}/>
      <Route path='/admin-back-to-loginpage' element={[<Menu/>,<MainLoginPage/>]}/>
      <Route path='/add-vehicle/:registration_id' element={[<Ownerlogin/>,<Addvehicle/>]}/>
      <Route path='/back-to-login-page' element={[<Menu/>,<MainLoginPage/>]}/>
      <Route path='/clent-view-page' element={[<ClientPage/>,<ClientBackground/>]}/>
      <Route path='/back-to-login' element={[<Menu/>,<MainLoginPage/>]}/>
      <Route path='/owner-view-page/:registration_id' element={[<Ownerlogin/>,<OwnerLoginBackground/>]}/>
      <Route path='/update-owner-details/:registration_id' element={[<Ownerlogin/>,<UpdateDetails/>]} />
      


      
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;