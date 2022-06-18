
import { createStore } from "redux";


const authReducer=(state={isLogin:false,token:'',name:'',image:'',description:'',price:''},action)=>{

if(action.type==='IN'){

    return {
        isLogin:action.value,
        token:state.token,
        name:state.name,
        image:state.image,
        description:state.description,
        price:state.price
    }
}


if(action.type==='update_token'){
    return {
        isLogin:state.isLogin,
        token:action.value,
        name:state.name,
        image:state.image,
        description:state.description,
        price:state.price
    }
}

if(action.type==='name'){
    return {
        isLogin:state.isLogin,
        token:state.token,
        name:action.value,
        image:state.image,
        description:state.description,
        price:state.price

    }
}


if(action.type==='image'){
    return {
        isLogin:state.isLogin,
        token:state.token,
        name:state.name,
        image:action.value,
        description:state.description,
        price:state.price

    }
}


if(action.type==='description'){
    return {
        isLogin:state.isLogin,
        token:state.token,
        name:state.name,
        image:state.image,
        description:action.value,
        price:state.price

    }
}

if(action.type==='price'){
    return {
        isLogin:state.isLogin,
        token:state.token,
        name:state.name,
        image:state.image,
        description:state.description,
        price:action.value

    }
}

return state
}

const store=createStore(authReducer);

export default store;