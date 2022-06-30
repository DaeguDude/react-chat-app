import React from "react";
import { useAppInfoDispatch } from "./contexts/AppContext";
import "./index.css";
import { Main } from "./view/Main";
import { NavBar } from "./view/NavBar";

let isInitialized = false;

function App() {
  const dispatch = useAppInfoDispatch();

  // 현재는 로그인을 하는 방법이 구현이 안되었기 때문에, 임의로 userId 1로 바꾸어주기
  if (!isInitialized) {
    dispatch({
      type: "changed_user",
      userId: 1,
    });
  }

  return (
    <div className="flex">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
