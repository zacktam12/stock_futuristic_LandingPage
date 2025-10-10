#!/bin/bash
# Render build script for landing page (Next.js)

echo "📦 Installing dependencies..."
npm install

echo "🏗️ Building Next.js application..."
npm run build

echo "✅ Build complete!"

