import { Home, Route, Truck, Wrench, Car } from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  const menuItems = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'planificador-ruta', label: 'Planificador ruta', icon: Route },
    { id: 'planificador-ruta-tabla', label: 'Tabla de rutas', icon: Route },
    { id: 'gestion-flotas', label: 'Gestión de Flotas', icon: Truck },
    { id: 'mantenimiento', label: 'Mantenimiento', icon: Wrench },
    { id: 'vehiculos', label: 'Vehículos', icon: Car },
  ];

  return (
    <aside className="w-56 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-blue-600">EcoTransporte S.A.</h1>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    currentPage === item.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-200">
        <p className="text-gray-500 text-sm">Usuario Admin</p>
      </div>
    </aside>
  );
}
