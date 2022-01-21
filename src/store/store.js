import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// import * as Cookies from 'js-cookie'

const store = createStore({
    plugins: [createPersistedState()],
    state: {
        user: {
            isLogin:false,
            uid:null,
            username:null,
            cartQTY:0,
        }
    },
    mutations: {
        setLogin(state,login){
            state.user.isLogin=login
        },
        setUID(state,uid){
            state.user.uid=uid
        },
        setUsername(state,username){
            state.user.username=username
        },
        setCartQTY(state,qty){
            state.user.cartQTY=qty
        }
    },
    
});

export default store;