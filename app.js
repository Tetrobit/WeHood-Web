const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Мой район - Ваш умный помощник',
    description: 'Мобильное приложение для удобной жизни в вашем районе'
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 