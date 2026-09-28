// Placeholder data for UI preview until real product/order APIs exist.
// Replace with live data once /api/product and /api/order endpoints ship.

export interface MockPartnerProduct {
  id: string;
  title: string;
  type: string;
  sales: number;
  revenue: number;
}

export const mockPartnerProducts: MockPartnerProduct[] = [
  { id: "1", title: "React Dashboard Kit", type: "Source Code", sales: 42, revenue: 12600 },
  { id: "2", title: "UI Design Systems 101", type: "Course", sales: 18, revenue: 5400 },
  { id: "3", title: "Startup Pitch Deck Template", type: "Template", sales: 65, revenue: 3900 },
];

export const mockPartnerStats = {
  totalEarnings: 21900,
  totalSales: 125,
  activeProducts: mockPartnerProducts.length,
};

export interface MockAdminPartner {
  id: string;
  name: string;
  email: string;
  products: number;
  sales: number;
  revenue: number;
  isActive: boolean;
}

export const mockAdminPartners: MockAdminPartner[] = [
  { id: "1", name: "Utkarsh Gupta", email: "utkarsh@forgemark.app", products: 3, sales: 125, revenue: 21900, isActive: true },
  { id: "2", name: "Ananya Rao", email: "ananya@forgemark.app", products: 5, sales: 89, revenue: 15200, isActive: true },
  { id: "3", name: "Rohit Sharma", email: "rohit@forgemark.app", products: 1, sales: 6, revenue: 900, isActive: false },
];

export const mockAdminStats = {
  totalSales: mockAdminPartners.reduce((sum, p) => sum + p.sales, 0),
  adminEarnings: 5400,
  totalPartners: mockAdminPartners.length,
  totalProducts: mockAdminPartners.reduce((sum, p) => sum + p.products, 0),
};

export const mockPayoutEligiblePartners = mockAdminPartners.filter(
  (partner) => partner.revenue >= 10000,
);
