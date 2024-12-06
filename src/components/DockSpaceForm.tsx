import React from 'react';
import { DimensionInput } from './DimensionInput';
import { DockSpaceInputs } from '../types/calculator';
import { Truck } from 'lucide-react';

interface DockSpaceFormProps {
  inputs: DockSpaceInputs;
  onChange: (inputs: DockSpaceInputs) => void;
}

export const DockSpaceForm: React.FC<DockSpaceFormProps> = ({ inputs, onChange }) => {
  const handleChange = (key: keyof DockSpaceInputs, value: number) => {
    onChange({ ...inputs, [key]: value });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100">
      <div className="flex items-center gap-3 mb-4">
        <Truck className="w-6 h-6 text-teal-600" />
        <h2 className="text-xl font-semibold text-teal-800">Dock Space Requirements</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <DimensionInput
          label="Loads Received"
          value={inputs.loadsReceived}
          onChange={(value) => handleChange('loadsReceived', value)}
        />
        <DimensionInput
          label="Hours per Load"
          value={inputs.hoursPerLoad}
          onChange={(value) => handleChange('hoursPerLoad', value)}
        />
        <DimensionInput
          label="Shift Length (hours)"
          value={inputs.shiftLength}
          onChange={(value) => handleChange('shiftLength', value)}
        />
        <DimensionInput
          label="Load Size (pallets)"
          value={inputs.loadSize}
          onChange={(value) => handleChange('loadSize', value)}
        />
        <DimensionInput
          label="Space per Pallet (m²)"
          value={inputs.spacePerPallet}
          onChange={(value) => handleChange('spacePerPallet', value)}
        />
      </div>
    </div>
  );
};