import { Routes, Route, Navigate } from 'react-router-dom'
import MenuLateral  from '../shared/components/sidebar/menuLateral';
import { HomePage } from '../pages/home/HomePage';
import { PostPage } from '../pages/post/PostPage';
import { ProfilePag } from '../pages/profile/ProfilePage';
import { DashPage } from '../pages/dashboard/DashboardPage';
import { Cabecalho } from '../shared/components/cabec/cabecalho';



const HomeRoutes = () => (
    <div style={{display:'grid', gridTemplateColumns:'300px 1fr'}}>
        <div>
            <MenuLateral />
        </div>
        <div style={{zIndex: 1, position: 'relative'}}>
            <Cabecalho />
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/dashboard" element={<DashPage />} />
                <Route path="/post" element={<PostPage />} />
                <Route path="/profile" element={<ProfilePag />} />
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