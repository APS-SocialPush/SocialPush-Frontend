import { Routes, Route, Navigate } from 'react-router-dom'
import PermanentDrawerLeft from '../shared/components/sidebar/menuLateral';

const HomeRoutes = () => (
    <div style={{display:'grid', gridTemplateColumns:'300px 1fr'}}>
        <div>
            <PermanentDrawerLeft />
        </div>
        <div>
            <Routes>
                <Route path="/home" element={<h1 style={{marginTop: '40px'}}>NuBank</h1>} />
                <Route path="/dashboard" element={<h1>Dashboard</h1>} />
                <Route path="/post" element={<h1>post</h1>} />
                <Route path="/profile" element={<h1>profile</h1>} />
            </Routes>
        </div>
    </div>
);

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<h1>Login</h1>} />
            <Route path="/register" element={<h1>register page</h1>} />
            <Route path="*" element={<HomeRoutes />} />
        </Routes>
    );
}