import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

export function PlanificadorRutaTabla() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const rutas = [
    { id: 1, codigo: 'RT-001', nombre: 'Ruta Centro', origen: 'Almacén Central', destino: 'Zona Centro', vehiculo: 'VH-101', conductor: 'Juan Pérez', distancia: '15 km', tiempo: '45 min', combustible: '2.5L', emisiones: '1.8 kg CO2', estado: 'Activa' },
    { id: 2, codigo: 'RT-002', nombre: 'Ruta Norte', origen: 'Almacén Central', destino: 'Zona Norte', vehiculo: 'VH-102', conductor: 'María García', distancia: '22 km', tiempo: '1h 10min', combustible: '3.8L', emisiones: '2.6 kg CO2', estado: 'Activa' },
    { id: 3, codigo: 'RT-003', nombre: 'Ruta Sur', origen: 'Almacén Central', destino: 'Zona Sur', vehiculo: 'VH-103', conductor: 'Carlos López', distancia: '18 km', tiempo: '55 min', combustible: '3.0L', emisiones: '2.1 kg CO2', estado: 'Inactiva' },
    { id: 4, codigo: 'RT-004', nombre: 'Ruta Este', origen: 'Almacén Central', destino: 'Zona Este', vehiculo: 'VH-104', conductor: 'Ana Martínez', distancia: '20 km', tiempo: '1h', combustible: '3.2L', emisiones: '2.3 kg CO2', estado: 'Activa' },
  ];

  return (
    <div className="p-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2>Planificador de ruta</h2>
            <p className="text-gray-500">Vista detallada de todas las rutas de transporte</p>
          </div>
          <Button onClick={() => setIsModalOpen(true)} className="bg-blue-500 hover:bg-blue-600">
            <Plus className="w-4 h-4 mr-2" />
            Crear nueva
          </Button>
        </div>

        <div className="border rounded-lg overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Código</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Origen</TableHead>
                <TableHead>Destino</TableHead>
                <TableHead>Vehículo</TableHead>
                <TableHead>Conductor</TableHead>
                <TableHead>Distancia</TableHead>
                <TableHead>Tiempo</TableHead>
                <TableHead>Combustible</TableHead>
                <TableHead>Emisiones</TableHead>
                <TableHead>Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rutas.map((ruta) => (
                <TableRow key={ruta.id}>
                  <TableCell>{ruta.codigo}</TableCell>
                  <TableCell>{ruta.nombre}</TableCell>
                  <TableCell>{ruta.origen}</TableCell>
                  <TableCell>{ruta.destino}</TableCell>
                  <TableCell>{ruta.vehiculo}</TableCell>
                  <TableCell>{ruta.conductor}</TableCell>
                  <TableCell>{ruta.distancia}</TableCell>
                  <TableCell>{ruta.tiempo}</TableCell>
                  <TableCell>{ruta.combustible}</TableCell>
                  <TableCell>{ruta.emisiones}</TableCell>
                  <TableCell>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                      ruta.estado === 'Activa' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {ruta.estado}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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
