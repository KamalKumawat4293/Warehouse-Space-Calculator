import React from 'react';

interface DimensionInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export const DimensionInput: React.FC<DimensionInputProps> = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-teal-700">{label}</label>
      <input
        type="number"
        min="0"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        className="px-3 py-2 border border-teal-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white shadow-sm"
      />
    </div>
  );
};