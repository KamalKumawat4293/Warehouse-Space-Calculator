export interface CartonDimensions {
  length: number;
  width: number;
  height: number;
  quantity: number;
  type: string;
}

export interface PalletDimensions {
  length: number;
  width: number;
  height: number;
}

export interface CalculationResult {
  totalPallets: number;
  volumeUtilization: number;
  stackingArrangement: string;
}

export interface DockSpaceInputs {
  loadsReceived: number;
  hoursPerLoad: number;
  shiftLength: number;
  loadSize: number;
  spacePerPallet: number;
}

export interface WarehouseInputs {
  aisleWidth: number;
  clearance: number;
  beamWidth: number;
  warehouseLength: number;
  warehouseWidth: number;
  warehouseHeight: number;
}

export interface StorageCalculationResult {
  dockSpace: number;
  totalPalletLocations: number;
  moduleWidth: number;
  moduleLength: number;
  moduleHeight: number;
  widthModules: number;
  lengthModules: number;
  heightModules: number;
}