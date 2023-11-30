import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
function App() {
  const [{ user }] = useStateValue();
  return (
    //BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          {/*header*/}
          <Header />
          <div className="app__body">
            {/*sidebar*/}
            <Sidebar />
            {/*react-rooter -> chat screen*/}
            <Routes>
              <Route path="/room/:roomId" element={<Chat />} />
              <Route path="/" element={<h1>Welcome</h1>} />
            </Routes>
          </div>
          {/*footer*/}
        </>
      )}
    </div>
  );
}

export default App;
