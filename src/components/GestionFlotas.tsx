import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

export function GestionFlotas() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const flotas = [
    { id: 1, codigo: 'FL-001', nombre: 'Flota Norte', tipo: 'Camiones', cantidad: 12, estado: 'Operativa', ubicacion: 'Almacén Norte', responsable: 'Juan García' },
    { id: 2, codigo: 'FL-002', nombre: 'Flota Sur', tipo: 'Furgonetas', cantidad: 8, estado: 'Operativa', ubicacion: 'Almacén Sur', responsable: 'María Pérez' },
    { id: 3, codigo: 'FL-003', nombre: 'Flota Centro', tipo: 'Camiones', cantidad: 15, estado: 'Operativa', ubicacion: 'Almacén Central', responsable: 'Carlos López' },
    { id: 4, codigo: 'FL-004', nombre: 'Flota Express', tipo: 'Motos', cantidad: 6, estado: 'Mantenimiento', ubicacion: 'Almacén Este', responsable: 'Ana Martínez' },
  ];

  return (
    <div className="p-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2>Gestión de Flotas</h2>
            <p className="text-gray-500">Administra las flotas de vehículos de la empresa</p>
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
                <TableHead>Tipo</TableHead>
                <TableHead>Cantidad</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Ubicación</TableHead>
                <TableHead>Responsable</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {flotas.map((flota) => (
                <TableRow key={flota.id}>
                  <TableCell>{flota.codigo}</TableCell>
                  <TableCell>{flota.nombre}</TableCell>
                  <TableCell>{flota.tipo}</TableCell>
                  <TableCell>{flota.cantidad}</TableCell>
                  <TableCell>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                      flota.estado === 'Operativa' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {flota.estado}
                    </span>
                  </TableCell>
                  <TableCell>{flota.ubicacion}</TableCell>
                  <TableCell>{flota.responsable}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Añadir nuevo vehículo</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div>
              <Label>Nombre de flota</Label>
              <Input placeholder="Ej: Flota Norte" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Tipo de vehículo</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="camiones">Camiones</SelectItem>
                    <SelectItem value="furgonetas">Furgonetas</SelectItem>
                    <SelectItem value="motos">Motos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Cantidad</Label>
                <Input type="number" placeholder="0" />
              </div>
            </div>

            <div>
              <Label>Ubicación</Label>
              <Input placeholder="Almacén o ubicación" />
            </div>

            <div>
              <Label>Responsable</Label>
              <Input placeholder="Nombre del responsable" />
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
