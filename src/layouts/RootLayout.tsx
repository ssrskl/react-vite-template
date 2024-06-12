import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="overflow-x-clip">
      <Outlet />
    </div>
  );
}

export default RootLayout;
