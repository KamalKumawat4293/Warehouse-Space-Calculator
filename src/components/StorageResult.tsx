import React from 'react';
import { StorageCalculationResult } from '../types/calculator';
import { LayoutGrid } from 'lucide-react';

interface StorageResultProps {
  result: StorageCalculationResult | null;
}

export const StorageResult: React.FC<StorageResultProps> = ({ result }) => {
  if (!result) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-teal-100">
      <div className="flex items-center gap-3 mb-4">
        <LayoutGrid className="w-6 h-6 text-teal-600" />
        <h2 className="text-xl font-semibold text-teal-800">Storage Analysis Results</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
          <h3 className="text-sm font-medium text-teal-800">Required Dock Space</h3>
          <p className="text-2xl font-bold text-teal-900">{result.dockSpace} m²</p>
        </div>
        <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
          <h3 className="text-sm font-medium text-teal-800">Total Pallet Locations</h3>
          <p className="text-2xl font-bold text-teal-900">{result.totalPalletLocations}</p>
        </div>
        <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
          <h3 className="text-sm font-medium text-teal-800">Module Dimensions</h3>
          <p className="text-lg font-bold text-teal-900">
            {result.moduleWidth.toFixed(1)} × {result.moduleLength.toFixed(1)} × {result.moduleHeight.toFixed(1)} m
          </p>
        </div>
        <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
          <h3 className="text-sm font-medium text-teal-800">Module Configuration</h3>
          <p className="text-lg font-bold text-teal-900">
            {result.widthModules} × {result.lengthModules} × {result.heightModules}
          </p>
        </div>
      </div>
    </div>
  );
};