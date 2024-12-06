import React from 'react';
import { CalculationResult as Result } from '../types/calculator';
import { PackageSearch } from 'lucide-react';

interface CalculationResultProps {
  result: Result | null;
}

export const CalculationResult: React.FC<CalculationResultProps> = ({ result }) => {
  if (!result) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100">
      <div className="flex items-center gap-3 mb-4">
        <PackageSearch className="w-6 h-6 text-teal-600" />
        <h2 className="text-xl font-semibold text-teal-800">Calculation Results</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
          <h3 className="text-sm font-medium text-teal-800">Total Pallets Required</h3>
          <p className="text-2xl font-bold text-teal-900">{result.totalPallets}</p>
        </div>
        <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
          <h3 className="text-sm font-medium text-teal-800">Volume Utilization</h3>
          <p className="text-2xl font-bold text-teal-900">
            {result.volumeUtilization.toFixed(1)}%
          </p>
        </div>
        <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
          <h3 className="text-sm font-medium text-teal-800">Stacking Arrangement</h3>
          <p className="text-2xl font-bold text-teal-900">{result.stackingArrangement}</p>
        </div>
      </div>
    </div>
  );
};