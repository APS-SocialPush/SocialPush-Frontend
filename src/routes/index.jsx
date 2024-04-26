import { Routes, Route, Navigate } from 'react-router-dom'
import MenuLateral  from '../shared/components/sidebar/menuLateral';
import { HomePage } from '../pages/home/HomePage';

const HomeRoutes = () => (
    <div style={{display:'grid', gridTemplateColumns:'300px 1fr'}}>
        <div>
            <MenuLateral />
        </div>
        <div>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/dashboard" element={<h1>Dashboard</h1>} />
                <Route path="/post" element={<h1>post</h1>} />
                <Route path="/profile" element={<h1>profile</h1>} />
                <Route path="/" element={<Navigate to = "/home" />} />
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