import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'
import MainPage from '../page/MainPage'
import { act } from 'react-dom/test-utils'

test('renders component RegistrPage', () => {
  act(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </Provider>
      )
  })
  const elementsLink = document.getElementsByClassName('link')
  expect(elementsLink[0].textContent).toBe('Log in')
  expect(elementsLink[1].textContent).toBe('Registration')

  elementsLink[0].click()
  expect(document.location.pathname).toBe('/login')

  elementsLink[1].click()
  expect(document.location.pathname).toBe('/register')
})
