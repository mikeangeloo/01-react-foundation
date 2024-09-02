import { Counter, CounterWithHook, LoginPage, UsersPage } from "./components";
// import { BasicTypes } from "./typescript"

function App() {
  return (
    <main>
      <h1>Introducción a TS - React </h1>
      {/* <BasicTypes /> */}
      {/* <Counter /> */}
      <CounterWithHook />
      <LoginPage />
      <UsersPage />
    </main>
  );
}

export default App;
