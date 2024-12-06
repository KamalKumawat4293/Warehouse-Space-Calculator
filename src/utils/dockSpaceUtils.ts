import { DockSpaceInputs, WarehouseInputs, StorageCalculationResult } from '../types/calculator';

export const calculateDockSpace = (inputs: DockSpaceInputs): number => {
  const { loadsReceived, hoursPerLoad, shiftLength, loadSize, spacePerPallet } = inputs;
  
  const dockSpace = Math.ceil(
    (loadsReceived * hoursPerLoad / shiftLength) * (loadSize * spacePerPallet)
  );
  
  return dockSpace;
};

export const calculateStorageRequirements = (
  palletDims: { length: number; width: number; height: number },
  warehouse: WarehouseInputs
): StorageCalculationResult => {
  const moduleWidth = warehouse.aisleWidth + (2 * palletDims.width) + warehouse.clearance;
  const moduleLength = warehouse.clearance + (2 * palletDims.length);
  const moduleHeight = palletDims.height + warehouse.clearance + warehouse.beamWidth;

  const widthModules = Math.floor(warehouse.warehouseWidth / moduleWidth);
  const lengthModules = Math.floor(warehouse.warehouseLength / moduleLength);
  const heightModules = Math.floor(warehouse.warehouseHeight / moduleHeight);

  const palletsPerWidthModule = 2;
  const palletsPerLengthModule = 2;

  const totalPalletLocations = 
    (widthModules * palletsPerWidthModule) * 
    (lengthModules * palletsPerLengthModule) * 
    heightModules;

  const dockSpace = calculateDockSpace({
    loadsReceived: 10, // default values
    hoursPerLoad: 1,
    shiftLength: 8,
    loadSize: 20,
    spacePerPallet: 2
  });

  return {
    dockSpace,
    totalPalletLocations,
    moduleWidth,
    moduleLength,
    moduleHeight,
    widthModules,
    lengthModules,
    heightModules
  };
};