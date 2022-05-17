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

   { isLogin &&<Route path={'/home'}>
        <Home/>
      </Route>}

      {isLogin && <Route path={'/details'}>
<Details />
      </Route>}



<Route path={'*'}>
<Redirect to={'/'}/>
</Route>

    </Switch>
 </LoginWrapper>   


  
    
    
  );
}

export default App;
