
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
  { date: "2025-01-01", "Incoming": 4000, "Outgoing": 2400 },
  { date: "2025-02-01", "Incoming": 3000, "Outgoing": 1398 },
  { date: "2025-03-01", "Incoming": 2000, "Outgoing": 9800 },
  { date: "2025-04-01", "Incoming": 2780, "Outgoing": 3908 },
  { date: "2025-05-01", "Incoming": 1890, "Outgoing": 4800 },
  { date: "2025-06-01", "Incoming": 2390, "Outgoing": 3800 },
  { date: "2025-07-01", "Incoming": 3490, "Outgoing": 4300 },
];

export const recentActivity: Activity[] = [
    { id: 'REC-001', type: 'Receipt', date: '2025-07-28', status: 'Done', details: 'Received 100 units of Steel Coils from Supplier A.', category: 'Raw Materials', location: 'Warehouse A' },
    { id: 'DEL-003', type: 'Delivery', date: '2025-07-28', status: 'Waiting', details: 'Delivery of 20 chairs to Customer B.', category: 'Finished Goods', location: 'Main Warehouse' },
    { id: 'TRN-002', type: 'Transfer', date: '2025-07-27', status: 'Ready', details: 'Transferring 50kg of bolts from Main Warehouse to Production Line 2.', category: 'Components', location: 'Production Line 2' },
    { id: 'ADJ-001', type: 'Adjustment', date: '2025-07-26', status: 'Done', details: 'Adjusted -3kg of damaged Steel Coils.', category: 'Raw Materials', location: 'Warehouse A' },
    { id: 'REC-002', type: 'Receipt', date: '2025-07-25', status: 'Done', details: 'Received 500 units of Screws from Supplier C.', category: 'Components', location: 'Warehouse B' },
    { id: 'DEL-004', type: 'Delivery', date: '2025-07-29', status: 'Draft', details: 'Planning delivery for 10 desks.', category: 'Finished Goods', location: 'Main Warehouse' },
    { id: 'TRN-003', type: 'Transfer', date: '2025-07-29', status: 'Canceled', details: 'Canceled transfer of 200 units of bolts.', category: 'Components', location: 'Main Warehouse' },
];

export const products: Product[] = [
    { id: 'P001', name: 'Steel Coils', sku: 'SC-1001', category: 'Raw Materials', uom: 'kg', stock: 1200, reorderLevel: 500 },
    { id: 'P002', name: 'Aluminum Sheets', sku: 'AS-2002', category: 'Raw Materials', uom: 'kg', stock: 800, reorderLevel: 400 },
    { id: 'P003', name: 'M8x25 Bolts', sku: 'BLT-8025', category: 'Components', uom: 'units', stock: 25000, reorderLevel: 10000 },
    { id: 'P004', name: 'Ergonomic Office Chair', sku: 'CHR-ERG-01', category: 'Finished Goods', uom: 'units', stock: 150, reorderLevel: 50 },
    { id: 'P005', name: 'Standing Desk Frame', sku: 'DSK-ST-03', category: 'Finished Goods', uom: 'units', stock: 85, reorderLevel: 30 },
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
