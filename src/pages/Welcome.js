import './Welcome.css'
import { useHistory } from 'react-router-dom';


const Home=()=>{

    const history=useHistory();

    const welcomeHandler=()=>{
        history.replace('/home')
    }
    return (
       <section className='welcome-main'>
            <div>
            <h1 className="welcome">Welcome</h1>
            <img className="img-welcome" src="https://www.addictioncenter.com/app/uploads/2020/01/online_shopping_addiction-scaled.jpeg" alt="Shop"/>

        </div>
<button onClick={welcomeHandler}>Start Your Shopping Today</button>
       </section>
    )
}

export default Home;