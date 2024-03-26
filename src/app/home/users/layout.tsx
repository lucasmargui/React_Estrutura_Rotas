import SideNav from '@/app/ui/home/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
      
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
      <h2>layout.tsx em about aplica um layout personalizado na rota /users caso necessário (opcional) </h2>
        {children}</div>
    </div>
  );
}