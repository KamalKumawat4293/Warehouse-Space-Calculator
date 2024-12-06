import { CartonDimensions, PalletDimensions, CalculationResult } from '../types/calculator';

export const calculateVolume = (length: number, width: number, height: number): number => {
  return length * width * height;
};

export const calculatePalletsNeeded = (
  carton: CartonDimensions,
  pallet: PalletDimensions
): CalculationResult => {
  const cartonVolume = calculateVolume(carton.length, carton.width, carton.height) * carton.quantity;
  const palletVolume = calculateVolume(pallet.length, pallet.width, pallet.height);
  
  const totalPallets = Math.ceil(cartonVolume / palletVolume);
  const volumeUtilization = (cartonVolume / (totalPallets * palletVolume)) * 100;
  
  return {
    totalPallets,
    volumeUtilization,
    stackingArrangement: determineStackingArrangement(carton, pallet)
  };
};

const determineStackingArrangement = (
  carton: CartonDimensions,
  pallet: PalletDimensions
): string => {
  const lengthFit = Math.floor(pallet.length / carton.length);
  const widthFit = Math.floor(pallet.width / carton.width);
  const heightFit = Math.floor(pallet.height / carton.height);
  
  return `${lengthFit}x${widthFit}x${heightFit} (LxWxH)`;
};