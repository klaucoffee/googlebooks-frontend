import "./App.css";
import "./Components/style.css";
import { atom, useAtom } from "jotai";
import Header from "./Components/Header";
import ProtectedRoutes from "./Components/ProtectedRoutes";

export const loginAtom = atom(false);

function App() {
  const [login, setLogin] = useAtom(loginAtom);

  return (
    <div className="App">
      <Header />
      <ProtectedRoutes />
    </div>
  );
}

export default App;
