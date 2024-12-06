import React from 'react';
import { DimensionInput } from './DimensionInput';
import { CartonDimensions } from '../types/calculator';

interface CartonFormProps {
  carton: CartonDimensions;
  onChange: (carton: CartonDimensions) => void;
}

export const CartonForm: React.FC<CartonFormProps> = ({ carton, onChange }) => {
  const handleChange = (key: keyof CartonDimensions, value: number | string) => {
    onChange({ ...carton, [key]: value });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100">
      <h2 className="text-xl font-semibold mb-4 text-teal-800">Carton Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <DimensionInput
          label="Length (cm)"
          value={carton.length}
          onChange={(value) => handleChange('length', value)}
        />
        <DimensionInput
          label="Width (cm)"
          value={carton.width}
          onChange={(value) => handleChange('width', value)}
        />
        <DimensionInput
          label="Height (cm)"
          value={carton.height}
          onChange={(value) => handleChange('height', value)}
        />
        <DimensionInput
          label="Quantity"
          value={carton.quantity}
          onChange={(value) => handleChange('quantity', value)}
        />
        <div className="col-span-2">
          <label className="text-sm font-medium text-teal-700">Carton Type</label>
          <input
            type="text"
            value={carton.type}
            onChange={(e) => handleChange('type', e.target.value)}
            className="w-full px-3 py-2 border border-teal-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white shadow-sm"
            placeholder="e.g., TowerAC"
          />
        </div>
      </div>
    </div>
  );
};