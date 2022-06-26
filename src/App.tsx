import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Chats } from "./components/Chats";
import { useUserList } from "./hooks/useUserList";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen min-w-screen border-[20px] border-black">
      <nav>
        <Link className="mr-sm" to="/">
          홈
        </Link>
        <Link className="mr-sm" to="/design-system">
          디자인 시스템
        </Link>
        <Link className="mr-sm" to="/components">
          컴포넌트
        </Link>
      </nav>
      <Outlet />

      <div className="w-[360px] min-h-screen">
        <Chats />
      </div>
    </div>
  );
}

export default App;
