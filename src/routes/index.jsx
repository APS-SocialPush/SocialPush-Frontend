import { Routes, Route , Navigate} from 'react-router-dom'
import { MenuPrincipal } from '../shared/layout/menuPrincipal';
import PermanentDrawerLeft from '../shared/components/sidebar/menuLateral';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<MenuPrincipal children={<PermanentDrawerLeft />} />} />
            <Route path="/register" element={<p>register page</p>} />
            <Route path="/home" element={<p>home page</p>} />
            <Route path="/dashboard" element={<p>Dashboard</p>} />
            <Route path="/post" element={<p>post</p>} />
            <Route path="/profile" element={<p>profile</p>} />
            <Route path="*" element={<Navigate to = "/login" />} />
        </Routes>
    );
}