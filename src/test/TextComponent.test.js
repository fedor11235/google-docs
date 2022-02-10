import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'
import TextComponent from '../components/TextComponent'

test('renders component TextComponent', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <TextComponent />
      </BrowserRouter>
    </Provider>
    )
})
