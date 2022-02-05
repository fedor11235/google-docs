import {createStore} from 'redux'
import {authReduser} from './auth'

const saveState = (state) => {
    try {
        const serialisedState = JSON.stringify(state)
        window.localStorage.setItem('app_state', serialisedState)
    } catch (err) {
    }
}

const loadState = () => {
    try {
        const serialisedState = window.localStorage.getItem('app_state')
        if (!serialisedState) return undefined
        return JSON.parse(serialisedState)
    } catch (err) {
        return undefined
    }
}

const oldState = loadState();
const store = createStore(authReduser, oldState)

store.subscribe(() => {
    saveState(store.getState());
});

export default store