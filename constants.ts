import { StockItem } from './types';

export const INITIAL_STOCK: StockItem[] = [
  { id: 'casco_240', name: 'Casco 240 litros', quantity: 10, minQuantity: 2 },
  { id: 'membrana_240', name: 'Membrana 240 litros', quantity: 20, minQuantity: 5 },
  { id: 'bomba_16', name: 'Bomba 16', quantity: 30, minQuantity: 10 },
  { id: 'motor_16', name: 'Motor 16', quantity: 30, minQuantity: 10 },
  { id: 'casco_120', name: 'Casco 120 litros', quantity: 15, minQuantity: 3 },
  { id: 'membrana_120', name: 'Membrana 120 litros', quantity: 25, minQuantity: 5 },
  { id: 'bomba_8', name: 'Bomba 8', quantity: 30, minQuantity: 10 },
  { id: 'motor_8', name: 'Motor 8', quantity: 30, minQuantity: 10 },
  { id: 'luz_uv', name: 'Luz UV', quantity: 50, minQuantity: 15 },
];

export const DESSAL_RECIPES = {
  '240': [
    { itemId: 'casco_240', quantity: 1 },
    { itemId: 'membrana_240', quantity: 1 },
    { itemId: 'bomba_16', quantity: 1 },
    { itemId: 'motor_16', quantity: 1 },
    { itemId: 'luz_uv', quantity: 1 },
  ],
  '120': [
    { itemId: 'casco_120', quantity: 1 },
    { itemId: 'membrana_120', quantity: 1 },
    { itemId: 'bomba_8', quantity: 1 },
    { itemId: 'motor_8', quantity: 1 },
    { itemId: 'luz_uv', quantity: 1 },
  ]
};
