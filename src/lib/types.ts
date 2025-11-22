export type NavItem = {
  title: string;
  href: string;
  icon: React.ReactNode;
  disabled?: boolean;
};

export type Product = {
  id: string;
  name: string;
  sku: string;
  category: string;
  uom: string;
  stock: number;
};

export type Activity = {
    id: string;
    type: 'Receipt' | 'Delivery' | 'Transfer' | 'Adjustment';
    date: string;
    status: 'Completed' | 'Pending' | 'In Transit';
    details: string;
};
