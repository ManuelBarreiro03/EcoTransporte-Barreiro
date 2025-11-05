import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

export function Vehiculos() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const vehiculos = [
    { id: 1, codigo: 'VH-101', marca: 'Mercedes-Benz', modelo: 'Sprinter', año: 2022, placa: 'ABC-1234', tipo: 'Furgoneta', capacidad: '3.5T', combustible: 'Diésel', estado: 'Disponible' },
    { id: 2, codigo: 'VH-102', marca: 'Volvo', modelo: 'FH16', año: 2021, placa: 'DEF-5678', tipo: 'Camión', capacidad: '18T', combustible: 'Diésel', estado: 'En ruta' },
    { id: 3, codigo: 'VH-103', marca: 'Ford', modelo: 'Transit', año: 2023, placa: 'GHI-9012', tipo: 'Furgoneta', capacidad: '2.5T', combustible: 'Diésel', estado: 'Disponible' },
    { id: 4, codigo: 'VH-104', marca: 'Scania', modelo: 'R450', año: 2022, placa: 'JKL-3456', tipo: 'Camión', capacidad: '20T', combustible: 'Diésel', estado: 'Mantenimiento' },
    { id: 5, codigo: 'VH-105', marca: 'Iveco', modelo: 'Daily', año: 2023, placa: 'MNO-7890', tipo: 'Furgoneta', capacidad: '3T', combustible: 'Diésel', estado: 'Disponible' },
  ];

  return (
    <div className="p-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2>Vehículos</h2>
            <p className="text-gray-500">Registro completo de todos los vehículos de la empresa</p>
          </div>
          <Button onClick={() => setIsModalOpen(true)} className="bg-blue-500 hover:bg-blue-600">
            <Plus className="w-4 h-4 mr-2" />
            Añadir vehículo
          </Button>
        </div>

        <div className="border rounded-lg overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Código</TableHead>
                <TableHead>Marca</TableHead>
                <TableHead>Modelo</TableHead>
                <TableHead>Año</TableHead>
                <TableHead>Placa</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Capacidad</TableHead>
                <TableHead>Combustible</TableHead>
                <TableHead>Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vehiculos.map((vehiculo) => (
                <TableRow key={vehiculo.id}>
                  <TableCell>{vehiculo.codigo}</TableCell>
                  <TableCell>{vehiculo.marca}</TableCell>
                  <TableCell>{vehiculo.modelo}</TableCell>
                  <TableCell>{vehiculo.año}</TableCell>
                  <TableCell>{vehiculo.placa}</TableCell>
                  <TableCell>{vehiculo.tipo}</TableCell>
                  <TableCell>{vehiculo.capacidad}</TableCell>
                  <TableCell>{vehiculo.combustible}</TableCell>
                  <TableCell>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                      vehiculo.estado === 'Disponible' 
                        ? 'bg-green-100 text-green-700' 
                        : vehiculo.estado === 'En ruta'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {vehiculo.estado}
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
            <DialogTitle>Añadir vehículo</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Marca</Label>
                <Input placeholder="Ej: Mercedes-Benz" />
              </div>
              <div>
                <Label>Modelo</Label>
                <Input placeholder="Ej: Sprinter" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Año</Label>
                <Input type="number" placeholder="2024" />
              </div>
              <div>
                <Label>Placa</Label>
                <Input placeholder="ABC-1234" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Tipo</Label>
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
              <div>
                <Label>Capacidad</Label>
                <Input placeholder="Ej: 3.5T" />
              </div>
            </div>

            <div>
              <Label>Combustible</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="diesel">Diésel</SelectItem>
                  <SelectItem value="gasolina">Gasolina</SelectItem>
                  <SelectItem value="electrico">Eléctrico</SelectItem>
                  <SelectItem value="hibrido">Híbrido</SelectItem>
                </SelectContent>
              </Select>
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
