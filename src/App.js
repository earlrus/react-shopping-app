import { Switch,Redirect } from 'react-router-dom';
import {Route} from 'react-router-dom';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Details from './pages/Details';
import Register from './pages/Register';
import LoginWrapper from './pages/LoginWrapper'
import Login from './components/Login';
import Logout from './components/Logout';
import {useSelector} from 'react-redux'
import { Order } from './components/Order';
import Admin from './pages/Admin';
import AdminOperation from './components/AdminOperation';
import UserProfile from './components/UserProfile';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';


function App() {

const isLogin=useSelector(state=>state.isLogin) 
 
  return (
    
 <LoginWrapper>
<Switch>
<Route path={'/'} exact>
  <Register/>
</Route>
<Route path={'/login'}>
<Login/>
</Route>
<Route path={'/logout'}>
<Logout/>
</Route>

  {isLogin && <Route path={'/welcome'}>

<Welcome/>
      </Route>}

    <Route path={'/home'}>
        <Home/>
      </Route>

      <Route path={'/details'}>
<Details />
      </Route>

      <Route path={'/order'}>
        <Order/>
      </Route>

<Route path={'/admin'}>
<Admin />
</Route>

<Route path={'/admin-op'}>
<AdminOperation/>
</Route>

<Route path={'/user-profile'}>
  <UserProfile/>
</Route>

<Route path={'/update-user'}>
  <UpdateUser/>
</Route>

<Route path={'/delete-user'}>
  <DeleteUser/>
</Route>

<Route path={'*'}>
<Redirect to={'/'}/>
</Route>

    </Switch>
 </LoginWrapper>   


  
    
    
  );
}

export default App;
