const AUTH = 'AUTH'


const defaultState = {
    auth : false,
}

export const actionAuth = () => ({ 
        type: AUTH,
        value: true
    })

export const actionLogout = () => ({ 
        type: AUTH,
        value: false
    })

export const authReduser = (state = defaultState, action) => {
    switch (action.type) {

        case AUTH:
            return {...state, auth: action.value}

        default:
            return state
        }
}