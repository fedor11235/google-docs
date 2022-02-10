// import { render } from '@testing-library/react'
// import LoginPage from '../page/LoginPage'

// // user.test.js

// import React from "react";
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";
// import User from "./user";

// let container = null;
// beforeEach(() => {
//   // подготавливаем DOM-элемент, куда будем рендерить
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // подчищаем после завершения
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// it("renders user data", async () => {
//   const fakeUser = {
//     name: "Joni Baez",
//     age: "32",
//     address: "123, Charming Avenue"
//   };
//   jest.spyOn(global, "fetch").mockImplementation(() =>
//     Promise.resolve({
//       json: () => Promise.resolve(fakeUser)
//     })
//   );

//   // Используем act асинхронно, чтобы передать успешно завершённые промисы
//   await act(async () => {
//     render(<User id="123" />, container);
//   });

//   expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
//   expect(container.querySelector("strong").textContent).toBe(fakeUser.age);
//   expect(container.textContent).toContain(fakeUser.address);

//   // выключаем фиктивный fetch, чтобы убедиться, что тесты полностью изолированы
//   global.fetch.mockRestore();
// });


import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'
import LoginPage from '../page/LoginPage'

test('renders component LoginPage', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    </Provider>
    )
})
