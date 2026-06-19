import { Outlet } from 'react-router';
import AuthSidebar from '../../components/auth/AuthSidebar.jsx';

export default function AuthLayout() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 w-full h-screen font-sans">
      <AuthSidebar />
      
      <aside className="flex p-[10px] md:p-[20%] items-center justify-center overflow-y-auto h-full">
        <Outlet />
      </aside>
    </main>
  );
}