const AUTH = 'AUTH'

const defaultState = {
    auth : false,
    id: NaN,
    login: NaN,
}

export const actionAuth = (pyloadId) => ({ 
        type: AUTH,
        auth: true,
        id: pyloadId.id,
        login: pyloadId.login
    })

export const actionLogout = () => ({ 
        type: AUTH,
        value: false,
        id: NaN,
        login: NaN,
    })

export const authReduser = (state = defaultState, action) => {
    switch (action.type) {

        case AUTH:
            return {...state, auth: action.auth, id: action.id, login: action.login}

        default:
            return state
        }
}