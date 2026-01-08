# Deployment Guide for HostSim

This guide covers deploying HostSim to your own server.

## Prerequisites

- Node.js 20+ installed on your server
- npm or yarn package manager
- Domain name configured (simutools.net)
- SSL certificate (Let's Encrypt recommended)

## Option 1: Direct Node.js Deployment (Recommended for Quick Setup)

### 1. Build the Application

```bash
# Install dependencies
npm install

# Build for production
npm run build
```

### 2. Start the Application

```bash
# Start the production server
npm start
```

The application will run on port 3000 by default. You can change this by setting the `PORT` environment variable.

### 3. Using PM2 (Process Manager)

For production, it's recommended to use PM2 to keep the application running:

```bash
# Install PM2 globally
npm install -g pm2

# Start with PM2
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Setup PM2 to start on system boot
pm2 startup
```

PM2 commands:
- `pm2 status` - Check application status
- `pm2 logs hostsim` - View logs
- `pm2 restart hostsim` - Restart application
- `pm2 stop hostsim` - Stop application
- `pm2 monit` - Monitor resources

## Option 2: Docker Deployment

### 1. Build Docker Image

```bash
docker build -t hostsim:latest .
```

### 2. Run Docker Container

```bash
docker run -d \
  --name hostsim \
  -p 3000:3000 \
  --restart unless-stopped \
  hostsim:latest
```

### 3. Using Docker Compose

Create a `docker-compose.yml` file:

```yaml
version: '3.8'

services:
  hostsim:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - PORT=3000
    restart: unless-stopped
```

Then run:
```bash
docker-compose up -d
```

## Option 3: Nginx Reverse Proxy Setup

For production, use Nginx as a reverse proxy:

### 1. Install Nginx

```bash
# Ubuntu/Debian
sudo apt update && sudo apt install nginx

# CentOS/RHEL
sudo yum install nginx
```

### 2. Create Nginx Configuration

Create `/etc/nginx/sites-available/hostsim`:

```nginx
server {
    listen 80;
    server_name simutools.net www.simutools.net;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name simutools.net www.simutools.net;

    # SSL Configuration (Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/simutools.net/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/simutools.net/privkey.pem;
    
    # SSL Security Settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # Gzip Compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;

    # Proxy Settings
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Static file caching
    location /_next/static {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 60m;
        add_header Cache-Control "public, immutable";
    }
}
```

### 3. Enable Site and Restart Nginx

```bash
sudo ln -s /etc/nginx/sites-available/hostsim /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 4. Setup SSL with Let's Encrypt

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Obtain SSL certificate
sudo certbot --nginx -d simutools.net -d www.simutools.net

# Auto-renewal (already configured by certbot)
```

## Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

Edit `.env` with your production settings.

## Systemd Service (Alternative to PM2)

Create `/etc/systemd/system/hostsim.service`:

```ini
[Unit]
Description=HostSim Next.js Application
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/path/to/hostsim
Environment=NODE_ENV=production
Environment=PORT=3000
ExecStart=/usr/bin/npm start
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

Enable and start:

```bash
sudo systemctl daemon-reload
sudo systemctl enable hostsim
sudo systemctl start hostsim
```

## Firewall Configuration

```bash
# Allow HTTP and HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# If running directly (not behind Nginx)
sudo ufw allow 3000/tcp
```

## Monitoring and Maintenance

### Check Application Status

```bash
# With PM2
pm2 status

# With systemd
sudo systemctl status hostsim

# With Docker
docker ps
```

### View Logs

```bash
# PM2
pm2 logs hostsim

# systemd
sudo journalctl -u hostsim -f

# Docker
docker logs -f hostsim
```

### Update Application

```bash
# Pull latest changes
git pull

# Install dependencies
npm install

# Rebuild
npm run build

# Restart
pm2 restart hostsim
# or
sudo systemctl restart hostsim
# or
docker-compose restart
```

## Troubleshooting

### Application won't start
- Check if port 3000 is already in use: `lsof -i :3000`
- Verify Node.js version: `node -v` (should be 20+)
- Check logs for errors

### 502 Bad Gateway (Nginx)
- Ensure the Next.js app is running on port 3000
- Check Nginx error logs: `sudo tail -f /var/log/nginx/error.log`
- Verify proxy_pass URL in Nginx config

### SSL Certificate Issues
- Ensure domain DNS points to your server
- Check certificate expiration: `sudo certbot certificates`
- Renew if needed: `sudo certbot renew`

## Performance Optimization

1. **Enable Caching**: Configure Nginx caching for static assets
2. **CDN**: Consider using a CDN for static assets
3. **Database**: If using a database, ensure proper connection pooling
4. **Monitoring**: Set up monitoring (e.g., PM2 Plus, New Relic, Datadog)

## Security Checklist

- [ ] SSL/TLS certificate installed and configured
- [ ] Firewall rules configured
- [ ] Environment variables secured (not in git)
- [ ] Regular security updates applied
- [ ] Strong passwords for server access
- [ ] SSH key authentication enabled
- [ ] Regular backups configured

## Support

For issues or questions, check the application logs and ensure all prerequisites are met.

