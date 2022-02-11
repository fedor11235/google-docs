import { render } from '@testing-library/react'
import NotFoundPage from '../page/NotFoundPage'
import { act } from 'react-dom/test-utils'

test('renders page NotFound', () => {
  act(() => {
    render(<NotFoundPage />)
  })
  const a = document.querySelector('a')
  expect(a.innerHTML).toBe("home")

  a.click()
  expect(document.location.pathname).toBe('/')
})
