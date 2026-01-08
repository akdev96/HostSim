#!/bin/bash

# HostSim Deployment Script
# This script helps deploy the application to your server

set -e

echo "🚀 HostSim Deployment Script"
echo "============================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 20+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 20 ]; then
    echo "❌ Node.js version 20+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application
echo "🔨 Building application for production..."
npm run build

echo ""
echo "✅ Build completed successfully!"
echo ""
echo "To start the application:"
echo "  npm start"
echo ""
echo "Or use PM2 for process management:"
echo "  npm install -g pm2"
echo "  pm2 start ecosystem.config.js"
echo ""
echo "Or use Docker:"
echo "  docker-compose up -d"
echo ""

