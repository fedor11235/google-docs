import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'
import MainPage from '../page/MainPage'

test('renders component RegistrPage', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </Provider>
    )
})