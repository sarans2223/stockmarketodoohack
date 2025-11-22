
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
    status: 'Draft' | 'Waiting' | 'Ready' | 'Done' | 'Canceled';
    details: string;
    category?: string;
    location?: string;
};

export type NavRoute = {
    href: string;
    label: string;
    active: boolean;
    icon: React.ReactNode;
    badge?: string;
    type?: undefined;
} | {
    type: 'heading';
    label: string;
} | {
    type: 'separator';
};
