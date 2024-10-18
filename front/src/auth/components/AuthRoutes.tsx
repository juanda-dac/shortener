import { Routes, Route, Outlet } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export function AuthRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Outlet />}>
                <Route path="login" element={<LoginForm />} />
                <Route path="register" element={<RegisterForm />} />
            </Route>
        </Routes>
    )
}

