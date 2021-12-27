import { createStore } from 'redux'
import ACTIVITIES from '../../Activities/store';

const NAVIGATE = {
    activeRoute: {},
    showPanel: false,
    navigation: {},
    routes: [{ active: true, name: "Home", route: "Home", icon: { name: "home", size: 32 } },
    { active: false, name: "Carteira", route: "Wallet", icon: { name: "account-balance-wallet", size: 32 } },
    { active: false, name: "Usuário", route: "users", icon: { name: "people", size: 32 } },
    { active: false, name: "Configuração", route: "Settings", icon: { name: "settings", size: 32 } }]
}

const INITIAL_STATE = {
    ...ACTIVITIES,
    ...NAVIGATE
}


function finance(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "NAVIGATE":
            state = {...state,  routes: (action.btnRoutes.length >=1 ? action.btnRoutes : state.routes ), navigation: action.navigation}
            break;
        case "SHOW_PANEL": 
            state = {... state, showPanel: action.showPanel}
            break;
    }

    return state;
}
const store = createStore(finance);

export default store;