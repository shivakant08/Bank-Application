import { Outlet, Navigate } from "react-router";

const ProtectedRoutes = () => {
    const token = false
    return token ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes
