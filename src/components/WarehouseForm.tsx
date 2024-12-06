import React from 'react';
import { DimensionInput } from './DimensionInput';
import { WarehouseInputs } from '../types/calculator';
import { Warehouse } from 'lucide-react';

interface WarehouseFormProps {
  inputs: WarehouseInputs;
  onChange: (inputs: WarehouseInputs) => void;
}

export const WarehouseForm: React.FC<WarehouseFormProps> = ({ inputs, onChange }) => {
  const handleChange = (key: keyof WarehouseInputs, value: number) => {
    onChange({ ...inputs, [key]: value });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100">
      <div className="flex items-center gap-3 mb-4">
        <Warehouse className="w-6 h-6 text-teal-600" />
        <h2 className="text-xl font-semibold text-teal-800">Warehouse Configuration</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <DimensionInput
          label="Aisle Width (m)"
          value={inputs.aisleWidth}
          onChange={(value) => handleChange('aisleWidth', value)}
        />
        <DimensionInput
          label="Clearance (m)"
          value={inputs.clearance}
          onChange={(value) => handleChange('clearance', value)}
        />
        <DimensionInput
          label="Beam Width (m)"
          value={inputs.beamWidth}
          onChange={(value) => handleChange('beamWidth', value)}
        />
        <DimensionInput
          label="Warehouse Length (m)"
          value={inputs.warehouseLength}
          onChange={(value) => handleChange('warehouseLength', value)}
        />
        <DimensionInput
          label="Warehouse Width (m)"
          value={inputs.warehouseWidth}
          onChange={(value) => handleChange('warehouseWidth', value)}
        />
        <DimensionInput
          label="Warehouse Height (m)"
          value={inputs.warehouseHeight}
          onChange={(value) => handleChange('warehouseHeight', value)}
        />
      </div>
    </div>
  );
};