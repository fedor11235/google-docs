import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'
import FormPage from '../page/FormPage'

test('renders component FormPage', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    </Provider>
    )
})
