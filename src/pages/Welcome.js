import './Welcome.scss'
import { useHistory } from 'react-router-dom';


const Home=()=>{

    const history=useHistory();

    const welcomeHandler=()=>{
        history.replace('/home')
    }
    return (
       <section className='welcome-main'>
            <div className='text-styling'>
            <h1 className="welcome">Welcome</h1>
        </div>
<button onClick={welcomeHandler}>Start Your Shopping Today</button>
       </section>
    )
}

export default Home;