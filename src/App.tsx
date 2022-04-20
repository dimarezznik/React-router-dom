import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";
import { useState, useEffect } from "react";
import { User } from "./dto/user.dto";
import UserOne from "./components/Users/User/UserOne";
import ForAuth from "./components/ForAuth/ForAuth";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  useEffect(() => {
    fetch(`http://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data: User[]) => setUsers(data));
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
          {users?.map((user) => {
            return (
              <Route
                key={user.id}
                path={`users/${user.id}`}
                element={<UserOne user={user} />}
              />
            );
          })}
          <Route path="for-auth" element={<ForAuth isAuth={isAuth} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
