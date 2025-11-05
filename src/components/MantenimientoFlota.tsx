import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

export function MantenimientoFlota() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mantenimientos = [
    { id: 1, codigo: 'MNT-001', vehiculo: 'VH-101', tipo: 'Preventivo', fecha: '2024-11-15', descripcion: 'Cambio de aceite y filtros', tecnico: 'Pedro Ruiz', estado: 'Programado', costo: '$150' },
    { id: 2, codigo: 'MNT-002', vehiculo: 'VH-102', tipo: 'Correctivo', fecha: '2024-11-10', descripcion: 'Reparación de frenos', tecnico: 'Luis Sánchez', estado: 'Completado', costo: '$320' },
    { id: 3, codigo: 'MNT-003', vehiculo: 'VH-103', tipo: 'Preventivo', fecha: '2024-11-18', descripcion: 'Revisión general', tecnico: 'Pedro Ruiz', estado: 'Programado', costo: '$200' },
    { id: 4, codigo: 'MNT-004', vehiculo: 'VH-104', tipo: 'Correctivo', fecha: '2024-11-12', descripcion: 'Cambio de neumáticos', tecnico: 'Luis Sánchez', estado: 'En proceso', costo: '$480' },
  ];

  return (
    <div className="p-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2>Mantenimiento de Flota</h2>
            <p className="text-gray-500">Gestiona el mantenimiento preventivo y correctivo de los vehículos</p>
          </div>
          <Button onClick={() => setIsModalOpen(true)} className="bg-blue-500 hover:bg-blue-600">
            <Plus className="w-4 h-4 mr-2" />
            Crear registro
          </Button>
        </div>

        <div className="border rounded-lg overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Código</TableHead>
                <TableHead>Vehículo</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Descripción</TableHead>
                <TableHead>Técnico</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Costo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mantenimientos.map((mant) => (
                <TableRow key={mant.id}>
                  <TableCell>{mant.codigo}</TableCell>
                  <TableCell>{mant.vehiculo}</TableCell>
                  <TableCell>{mant.tipo}</TableCell>
                  <TableCell>{mant.fecha}</TableCell>
                  <TableCell>{mant.descripcion}</TableCell>
                  <TableCell>{mant.tecnico}</TableCell>
                  <TableCell>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                      mant.estado === 'Completado' 
                        ? 'bg-green-100 text-green-700' 
                        : mant.estado === 'En proceso'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {mant.estado}
                    </span>
                  </TableCell>
                  <TableCell>{mant.costo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Añadir nuevo mantenimiento</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Vehículo</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vh101">VH-101</SelectItem>
                    <SelectItem value="vh102">VH-102</SelectItem>
                    <SelectItem value="vh103">VH-103</SelectItem>
                    <SelectItem value="vh104">VH-104</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Tipo</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="preventivo">Preventivo</SelectItem>
                    <SelectItem value="correctivo">Correctivo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label>Fecha programada</Label>
              <Input type="date" />
            </div>

            <div>
              <Label>Descripción del trabajo</Label>
              <Textarea placeholder="Detalles del mantenimiento a realizar" rows={3} />
            </div>

            <div>
              <Label>Técnico asignado</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pedro">Pedro Ruiz</SelectItem>
                  <SelectItem value="luis">Luis Sánchez</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Costo estimado</Label>
              <Input type="number" placeholder="$0.00" />
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
