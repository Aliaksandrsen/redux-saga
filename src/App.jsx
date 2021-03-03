import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { decrementCreator, incrementCreator } from "./store/countReducer";
import { fetchUsers } from "./store/userReducer";

const App = () => {
  const count = useSelector((state) => state.countReducer.count);
  const users = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <div className="count">{count}</div>
      <div className="btns">
        <button className="btn" onClick={() => dispatch(incrementCreator())}>
          ИНКРЕМЕНТ++
        </button>
        <button className="btn" onClick={() => dispatch(decrementCreator())}>
          ДЕКРЕМЕНТ--
        </button>
        <button className="btn">ПОЛУЧИТЬ ЮЗЕРОВ</button>
      </div>
      <div className="users">
        {users.map((user) => (
          <div key={user.id} className="user">
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;