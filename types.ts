export enum UserType {
  Fabrica = 'Fábrica',
  InnovaMarine = 'Innova Marine',
}

export interface User {
  id: number;
  name: string;
  type: UserType;
}

export interface StockItem {
  id: string;
  name: string;
  quantity: number;
  minQuantity: number;
}

export interface MovementItem {
    itemId: string;
    quantity: number;
}

export interface Movement {
  id: string;
  user: string;
  action: string;
  items: MovementItem[];
  date: string;
  description: string;
}

export interface PendingItem extends Movement {}

export interface WarrantyItem extends Movement {}

export interface HistoryItem extends Movement {}

export type View = 'estoque' | 'pendencia' | 'garantia' | 'historico';

export enum ActionType {
    INITIALIZE = 'INITIALIZE',
    ADD_STOCK = 'ADD_STOCK',
    PROCESS_OUTPUT = 'PROCESS_OUTPUT',
    ASSEMBLE_DESSAL = 'ASSEMBLE_DESSAL',
    SET_MIN_QUANTITY = 'SET_MIN_QUANTITY',
    MOVE_PENDING_TO_WARRANTY = 'MOVE_PENDING_TO_WARRANTY',
    RETURN_WARRANTY_TO_STOCK = 'RETURN_WARRANTY_TO_STOCK',
    CLEAR_WARRANTY = 'CLEAR_WARRANTY',
}

export interface InventoryState {
    stock: StockItem[];
    pending: PendingItem[];
    warranty: WarrantyItem[];
    history: HistoryItem[];
}
