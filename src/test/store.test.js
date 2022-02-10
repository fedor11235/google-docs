import { authReduser, actionAuth } from '../store/auth'

test('there must be user authorization', () => {
    const state = {
        auth : false,
        login: NaN,
    }
    const newState = authReduser(state, actionAuth({login: 'Fedor'}))
    expect(newState.auth).toBe(true)
  })