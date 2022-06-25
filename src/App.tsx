import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div className="h-screen w-screen border-[20px] border-black">
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
    </div>
  );
}

export default App;
