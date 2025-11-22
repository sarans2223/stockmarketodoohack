# **App Name**: StockPilot

## Core Features:

- User Authentication: Secure signup/login with OTP-based password reset, redirecting to the inventory dashboard upon successful login.
- Dashboard KPIs: Display a real-time inventory snapshot including total products in stock, low/out-of-stock alerts, pending receipts and deliveries, and scheduled internal transfers, all filterable by type, warehouse, status, and category.
- Product Management: Enable creation and updating of products with details like name, SKU/Code, category, UoM, stock availability per location, and reordering rules.
- Receipts Module: Process incoming goods by adding supplier, products, and received quantities, with automatic stock increases upon validation.
- Delivery Orders Module: Manage outgoing goods by picking, packing, and validating shipments, with automatic stock decrease upon validation.
- Internal Transfers Module: Facilitate stock movements between warehouses/locations, logging movement history for tracking and accountability.
- Stock Adjustments Module: Correct discrepancies between physical stock and system records, with automatic ledger updates upon adjustment. Includes tool that uses information from recent deliveries to flag likely locations for discrepancies, improving stock accuracy.

## Style Guidelines:

- Primary color: Deep indigo (#3F51B5) to evoke a sense of trust and efficiency.
- Background color: Very light indigo (#E8EAF6) to provide a clean, non-distracting backdrop.
- Accent color: Electric blue (#03A9F4) to highlight key interactive elements and important alerts.
- Body and headline font: 'Inter' sans-serif for a clean, modern, and highly readable interface. Suitable for both headlines and body text.
- Use consistent and clear line icons to represent actions and categories within the system.
- Maintain a clean and organized layout with a clear hierarchy to enhance usability.
- Subtle animations on state transitions and data updates to provide feedback to the user without being distracting.