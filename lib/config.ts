// Configuration for the landing page
export const config = {
  // Frontend application URL
  frontendUrl: process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:5500',
  
  // API URL (if needed)
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
  
  // App version
  version: '2.5.0',
  
  // App name
  appName: 'StockPilot',
  
  // App description
  appDescription: 'Modern Inventory Management',
};

// Helper function to get login URL
export const getLoginUrl = () => `${config.frontendUrl}/login`;

// Helper function to get dashboard URL
export const getDashboardUrl = () => `${config.frontendUrl}/dashboard`; 