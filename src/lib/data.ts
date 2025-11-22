import type { Product, Activity } from './types';

export const kpiData = {
  totalProducts: 1345,
  lowStock: 23,
  outOfStock: 5,
  pendingReceipts: 12,
  pendingDeliveries: 8,
  scheduledTransfers: 3,
};

export const inventoryChartData = [
  { date: "2024-01-01", "Incoming": 4000, "Outgoing": 2400 },
  { date: "2024-02-01", "Incoming": 3000, "Outgoing": 1398 },
  { date: "2024-03-01", "Incoming": 2000, "Outgoing": 9800 },
  { date: "2024-04-01", "Incoming": 2780, "Outgoing": 3908 },
  { date: "2024-05-01", "Incoming": 1890, "Outgoing": 4800 },
  { date: "2024-06-01", "Incoming": 2390, "Outgoing": 3800 },
  { date: "2024-07-01", "Incoming": 3490, "Outgoing": 4300 },
];

export const recentActivity: Activity[] = [
    { id: 'REC-001', type: 'Receipt', date: '2024-07-28', status: 'Completed', details: 'Received 100 units of Steel Coils from Supplier A.' },
    { id: 'DEL-003', type: 'Delivery', date: '2024-07-28', status: 'Pending', details: 'Delivery of 20 chairs to Customer B.' },
    { id: 'TRN-002', type: 'Transfer', date: '2024-07-27', status: 'In Transit', details: 'Transferring 50kg of bolts from Main Warehouse to Production Line 2.' },
    { id: 'ADJ-001', type: 'Adjustment', date: '2024-07-26', status: 'Completed', details: 'Adjusted -3kg of damaged Steel Coils.' },
    { id: 'REC-002', type: 'Receipt', date: '2024-07-25', status: 'Completed', details: 'Received 500 units of Screws from Supplier C.' },
];

export const products: Product[] = [
    { id: 'P001', name: 'Steel Coils', sku: 'SC-1001', category: 'Raw Materials', uom: 'kg', stock: 1200 },
    { id: 'P002', name: 'Aluminum Sheets', sku: 'AS-2002', category: 'Raw Materials', uom: 'kg', stock: 800 },
    { id: 'P003', name: 'M8x25 Bolts', sku: 'BLT-8025', category: 'Components', uom: 'units', stock: 25000 },
    { id: 'P004', name: 'Ergonomic Office Chair', sku: 'CHR-ERG-01', category: 'Finished Goods', uom: 'units', stock: 150 },
    { id: 'P005', name: 'Standing Desk Frame', sku: 'DSK-ST-03', category: 'Finished Goods', uom: 'units', stock: 85 },
    { id: 'P006', name: 'Safety Gloves', sku: 'EQP-GLV-01', category: 'Safety Equipment', uom: 'pairs', stock: 45 },
    { id: 'P007', name: 'Packaging Box - Large', sku: 'PKG-LG-01', category: 'Packaging', uom: 'units', stock: 950 },
];

export const deliveryDiscrepancyData = `
- Delivery #1 (ID: DLV-881A):
  - Product: M8x25 Bolts
  - Quantity Shipped: 5,000 units
  - From: Warehouse A, Rack 3, Bin 2
  - To: Production Line 1
  - Date: 2024-07-29

- Delivery #2 (ID: DLV-882B):
  - Product: Steel Coils
  - Quantity Shipped: 500 kg
  - From: Main Warehouse, Bay 7
  - To: Cutting Dept
  - Date: 2024-07-29

- Delivery #3 (ID: DLV-883C):
  - Product: Aluminum Sheets
  - Quantity Shipped: 250 kg
  - From: Warehouse B, Section 2
  - To: Stamping Dept
  - Date: 2024-07-28
`;
