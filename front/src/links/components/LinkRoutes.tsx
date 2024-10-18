import { Routes, Route, Outlet } from "react-router-dom";
import LinkView from "./LinkView";
import Dashboard from "./Dashboard";

export default function LinkRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Outlet />}>
                <Route path="short" element={<LinkView />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path=":id" element={<>Params</>} />
            </Route>
        </Routes>
    )
}