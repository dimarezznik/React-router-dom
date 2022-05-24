import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";
import { useState, useEffect } from "react";
import { User } from "./dto/user";
import Person from "./components/Users/User/Person";
import ForAuth from "./components/ForAuth/ForAuth";
import NotFound from "./components/NotFound/NotFound";
import {userClient} from "./async/getUsers";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  useEffect(() => {
    userClient.getUsers(setUsers)
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Layout setIsAuth={setIsAuth} isAuth={isAuth} />}
        >
          <Route index element={<Home />} />
          <Route path="/users" element={<Users users={users} />} />
          {<Route
              path='users/:id'
              element={<Person  />}
          />
          }

          <Route path="for-auth" element={<ForAuth isAuth={isAuth} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
