import React from 'react';
import { DimensionInput } from './DimensionInput';
import { PalletDimensions } from '../types/calculator';

interface PalletFormProps {
  pallet: PalletDimensions;
  onChange: (pallet: PalletDimensions) => void;
}

export const PalletForm: React.FC<PalletFormProps> = ({ pallet, onChange }) => {
  const handleChange = (key: keyof PalletDimensions, value: number) => {
    onChange({ ...pallet, [key]: value });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100">
      <h2 className="text-xl font-semibold mb-4 text-teal-800">Pallet Dimensions</h2>
      <div className="grid grid-cols-3 gap-4">
        <DimensionInput
          label="Length (cm)"
          value={pallet.length}
          onChange={(value) => handleChange('length', value)}
        />
        <DimensionInput
          label="Width (cm)"
          value={pallet.width}
          onChange={(value) => handleChange('width', value)}
        />
        <DimensionInput
          label="Height (cm)"
          value={pallet.height}
          onChange={(value) => handleChange('height', value)}
        />
      </div>
    </div>
  );
};