import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export function PlanificadorRuta() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const rutas = [
    { id: 1, nombre: 'Ruta Centro', origen: 'Almacén Central', destino: 'Zona Centro', distancia: '15 km', tiempo: '45 min', estado: 'Activa' },
    { id: 2, nombre: 'Ruta Norte', origen: 'Almacén Central', destino: 'Zona Norte', distancia: '22 km', tiempo: '1h 10min', estado: 'Activa' },
    { id: 3, nombre: 'Ruta Sur', origen: 'Almacén Central', destino: 'Zona Sur', distancia: '18 km', tiempo: '55 min', estado: 'Inactiva' },
  ];

  return (
    <div className="p-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2>Planificador de ruta</h2>
            <p className="text-gray-500">Gestiona y optimiza las rutas de transporte</p>
          </div>
          <Button onClick={() => setIsModalOpen(true)} className="bg-blue-500 hover:bg-blue-600">
            <Plus className="w-4 h-4 mr-2" />
            Crear nueva
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {rutas.map((ruta) => (
            <div key={ruta.id} className="border border-gray-200 rounded-lg p-4">
              <h3 className="mb-3">{ruta.nombre}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Origen:</span>
                  <span>{ruta.origen}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Destino:</span>
                  <span>{ruta.destino}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Distancia:</span>
                  <span>{ruta.distancia}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Tiempo:</span>
                  <span>{ruta.tiempo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Estado:</span>
                  <span className={ruta.estado === 'Activa' ? 'text-green-600' : 'text-gray-400'}>
                    {ruta.estado}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Crear nueva ruta</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Nombre de ruta</Label>
                <Input placeholder="Ej: Ruta Centro" />
              </div>
              <div>
                <Label>Tipo de transporte</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="camion">Camión</SelectItem>
                    <SelectItem value="furgoneta">Furgoneta</SelectItem>
                    <SelectItem value="moto">Moto</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label>Punto de origen</Label>
              <Input placeholder="Dirección de origen" />
            </div>

            <div>
              <Label>Punto de destino</Label>
              <Input placeholder="Dirección de destino" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Distancia estimada</Label>
                <Input placeholder="km" />
              </div>
              <div>
                <Label>Tiempo estimado</Label>
                <Input placeholder="minutos" />
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancelar
              </Button>
              <Button className="bg-blue-500 hover:bg-blue-600" onClick={() => setIsModalOpen(false)}>
                Guardar
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
