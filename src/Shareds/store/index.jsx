import { createStore } from 'redux'
import ACTIVITIES from '../../Activities/store';
import {useRoute} from '@react-navigation/native';

const NAVIGATE = {
    activeRoute: {},
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
            state = {...state, routes: action.btnRoutes}
            break;
        case "SET_NAVIGATION":
            const routes = useRoute();
            state = {...state, navigation: action.navigation}
            break;
    }

    return state;
}
const store = createStore(finance);

export default store;