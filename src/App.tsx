import React, { useState } from 'react';
import { CartonForm } from './components/CartonForm';
import { PalletForm } from './components/PalletForm';
import { DockSpaceForm } from './components/DockSpaceForm';
import { WarehouseForm } from './components/WarehouseForm';
import { CalculationResult } from './components/CalculationResult';
import { StorageResult } from './components/StorageResult';
import { calculatePalletsNeeded } from './utils/calculatorUtils';
import { calculateStorageRequirements } from './utils/dockSpaceUtils';
import { 
  CartonDimensions, 
  PalletDimensions, 
  CalculationResult as Result,
  DockSpaceInputs,
  WarehouseInputs,
  StorageCalculationResult 
} from './types/calculator';
import { Package } from 'lucide-react';

function App() {
  const [carton, setCarton] = useState<CartonDimensions>({
    length: 60,
    width: 40,
    height: 30,
    quantity: 100,
    type: 'Standard'
  });

  const [pallet, setPallet] = useState<PalletDimensions>({
    length: 120,
    width: 100,
    height: 150
  });

  const [dockInputs, setDockInputs] = useState<DockSpaceInputs>({
    loadsReceived: 10,
    hoursPerLoad: 1,
    shiftLength: 8,
    loadSize: 20,
    spacePerPallet: 2
  });

  const [warehouseInputs, setWarehouseInputs] = useState<WarehouseInputs>({
    aisleWidth: 3,
    clearance: 0.1,
    beamWidth: 0.15,
    warehouseLength: 50,
    warehouseWidth: 30,
    warehouseHeight: 12
  });

  const [result, setResult] = useState<Result | null>(null);
  const [storageResult, setStorageResult] = useState<StorageCalculationResult | null>(null);

  const handleCalculate = () => {
    const calculationResult = calculatePalletsNeeded(carton, pallet);
    const storageCalculation = calculateStorageRequirements(pallet, warehouseInputs);
    setResult(calculationResult);
    setStorageResult(storageCalculation);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Package className="w-8 h-8 text-teal-600" />
            <h1 className="text-3xl font-bold text-teal-900">Warehouse Space Calculator</h1>
          </div>
          <p className="text-teal-600">Calculate optimal warehouse space and pallet requirements</p>
        </div>

        <CartonForm carton={carton} onChange={setCarton} />
        <PalletForm pallet={pallet} onChange={setPallet} />
        <DockSpaceForm inputs={dockInputs} onChange={setDockInputs} />
        <WarehouseForm inputs={warehouseInputs} onChange={setWarehouseInputs} />
        
        <button
          onClick={handleCalculate}
          className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
        >
          Calculate Requirements
        </button>

        {result && <CalculationResult result={result} />}
        {storageResult && <StorageResult result={storageResult} />}
      </div>
    </div>
  );
}

export default App;