const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;
const CANONICAL_HOST = 'santirev.com';

// Consolidate SEO: redirect fly.dev / www to https://santirev.com so Google
// indexes a single canonical site (localhost and internal checks are left alone).
app.use((req, res, next) => {
  const host = (req.headers.host || '').toLowerCase().split(':')[0];
  const isDuplicate = host.endsWith('.fly.dev') || host === `www.${CANONICAL_HOST}`;
  if (isDuplicate) {
    return res.redirect(301, `https://${CANONICAL_HOST}${req.originalUrl}`);
  }
  next();
});

// Serve static files from build directory
app.use(express.static(path.join(__dirname, 'build')));

// Route for legal documents - serve them directly without SPA redirect
app.get('/privacy-policy.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'privacy-policy.html'));
});

app.get('/terms-of-service.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'terms-of-service.html'));
});

app.get('/user-agreement.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'user-agreement.html'));
});

app.get('/legal-documents.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'legal-documents.html'));
});

app.get('/legal-docs-config.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'legal-docs-config.json'));
});

// Route for URLs without extension (redirect to .html versions)
app.get('/privacy-policy', (req, res) => {
  res.redirect(301, '/privacy-policy.html');
});

app.get('/terms-of-service', (req, res) => {
  res.redirect(301, '/terms-of-service.html');
});

app.get('/user-agreement', (req, res) => {
  res.redirect(301, '/user-agreement.html');
});

app.get('/legal-documents', (req, res) => {
  res.redirect(301, '/legal-documents.html');
});

// All other routes go to React SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
