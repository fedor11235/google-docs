const AUTH = 'AUTH'

const defaultState = {
    auth : false,
    id: NaN,
}

export const actionAuth = (pyloadId) => ({ 
        type: AUTH,
        auth: true,
        id: pyloadId,
    })

export const actionLogout = () => ({ 
        type: AUTH,
        value: false,
        id: NaN,
    })

export const authReduser = (state = defaultState, action) => {
    switch (action.type) {

        case AUTH:
            return {...state, auth: action.auth, id: action.id}

        default:
            return state
        }
}