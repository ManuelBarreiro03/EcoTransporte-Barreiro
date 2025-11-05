import { Truck } from 'lucide-react';

export function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-40 h-40 rounded-full bg-blue-100 mb-6">
          <Truck className="w-20 h-20 text-blue-500" />
        </div>
        <h1 className="text-blue-500 mb-2">EcoTransporte</h1>
        <p className="text-gray-500">S.A.</p>
      </div>
    </div>
  );
}
