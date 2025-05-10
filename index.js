/**
 * Main application file (app.js)
 */
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Import routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');

// Root route
app.get('/', (req, res) => res.send('Modular Node.js App Running'));

// Register routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/notifications', notificationRoutes);
app.use('/analytics', analyticsRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app; // Export for testing purposes

/**
 * User routes (routes/userRoutes.js)
 */
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsers);
// Additional user routes can be added here
// router.get('/:id', userController.getUserById);
// router.post('/', userController.createUser);
// etc.

module.exports = router;

/**
 * Product routes (routes/productRoutes.js)
 */
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getProducts);
// Additional product routes can be added here

module.exports = router;

/**
 * Order routes (routes/orderRoutes.js)
 */
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.get('/', orderController.getOrders);
// Additional order routes can be added here

module.exports = router;

/**
 * Notification routes (routes/notificationRoutes.js)
 */
const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

router.post('/', notificationController.sendNotification);
// Additional notification routes can be added here

module.exports = router;

/**
 * Analytics routes (routes/analyticsRoutes.js)
 */
const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');

router.get('/peak-hours', analyticsController.analyzeTraffic);
// Additional analytics routes can be added here

module.exports = router;

/**
 * User controller (controllers/userController.js)
 */
const userService = require('../services/userService');

exports.getUsers = (req, res) => {
  try {
    const users = userService.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Product controller (controllers/productController.js)
 */
const productService = require('../services/productService');

exports.getProducts = (req, res) => {
  try {
    const products = productService.getProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Order controller (controllers/orderController.js)
 */
const orderService = require('../services/orderService');

exports.getOrders = (req, res) => {
  try {
    const orders = orderService.getOrders();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Notification controller (controllers/notificationController.js)
 */
const notificationService = require('../services/notificationService');

exports.sendNotification = (req, res) => {
  try {
    notificationService.sendNotification(req.body.message);
    res.send("Notification sent successfully");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Analytics controller (controllers/analyticsController.js)
 */
const analyticsService = require('../services/analyticsService');

exports.analyzeTraffic = (req, res) => {
  try {
    const peakHours = analyticsService.analyzeTraffic();
    res.json(peakHours);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * User service (services/userService.js)
 */
exports.getUsers = () => {
  // Implementation of getUsers
  return [
    { id: 1, name: 'User 2' },
    { id: 2, name: 'User 6' }
  ];
};

/**
 * Product service (services/productService.js)
 */
exports.getProducts = () => {
  // Implementation of getProducts
  return [
    { id: 1, name: 'Product 9', price: 120 },
    { id: 2, name: 'Product 1', price: 114 }
  ];
};

/**
 * Order service (services/orderService.js)
 */
exports.getOrders = () => {
  // Implementation of getOrders
  return [
    { id: 34, userId: 12, products: [7, 8], total: 2500 },
    { id: 37, userId: 16, products: [4,6], total: 2900 }
  ];
};

/**
 * Notification service (services/notificationService.js)
 */
exports.sendNotification = (message) => {
  // Implementation of sendNotification
  console.log(`Sending notification: ${message}`);
  // In a real application, this might connect to a messaging service
};

/**
 * Analytics service (services/analyticsService.js)
 */
exports.analyzeTraffic = () => {
  // Implementation of analyzeTraffic
  return {
    peakHours: ['7:00 AM - 10:00 pm', '11:00 PM - 12:00 AM'],
    averageUsers: 1200,
    recommendations: 'Consider scaling .'
  };
};
