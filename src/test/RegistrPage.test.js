import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'
import RegistrPage from '../page/RegistrPage'
import { act } from 'react-dom/test-utils'

test('renders component RegistrPage', () => {
    act(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegistrPage />
          </BrowserRouter>
        </Provider>
        )
    })
    const h1 = document.querySelector('h1')
    expect(h1.innerHTML).toBe("Register")
})
