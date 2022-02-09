const AUTH = 'AUTH'

const defaultState = {
    auth : false,
    login: NaN,
}

export const actionAuth = (pyloadId) => ({ 
        type: AUTH,
        auth: true,
        login: pyloadId.login
    })

export const actionLogout = () => ({ 
        type: AUTH,
        value: false,
        login: NaN,
    })

export const authReduser = (state = defaultState, action) => {
    switch (action.type) {

        case AUTH:
            return {...state, auth: action.auth, login: action.login}

        default:
            return state
        }
}