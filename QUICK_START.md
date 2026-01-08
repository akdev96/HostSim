# Quick Start Guide - Self-Hosting HostSim

## Prerequisites
- Node.js 20+ installed
- Domain `simutools.net` pointing to your server
- Server with at least 1GB RAM

## Fastest Deployment (5 minutes)

### 1. On Your Server

```bash
# Clone or upload your project
cd /path/to/hostsim

# Run the deployment script
./deploy.sh

# Start with PM2 (recommended)
npm install -g pm2
pm2 start ecosystem.config.js
pm2 save
pm2 startup  # Follow instructions to enable on boot
```

### 2. Setup Nginx Reverse Proxy

```bash
# Copy the example config
sudo cp nginx.conf.example /etc/nginx/sites-available/hostsim

# Edit the config (update SSL paths after certbot)
sudo nano /etc/nginx/sites-available/hostsim

# Enable the site
sudo ln -s /etc/nginx/sites-available/hostsim /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 3. Setup SSL Certificate

```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d simutools.net -d www.simutools.net
```

## Alternative: Docker Deployment

```bash
# Build and run
docker-compose up -d

# Check status
docker-compose ps

# View logs
docker-compose logs -f
```

## Verify Deployment

1. Check if app is running: `curl http://localhost:3000`
2. Visit `https://simutools.net` in your browser
3. Check PM2 status: `pm2 status`
4. Check Nginx: `sudo systemctl status nginx`

## Common Commands

### PM2
- `pm2 status` - Check status
- `pm2 logs hostsim` - View logs
- `pm2 restart hostsim` - Restart
- `pm2 stop hostsim` - Stop

### Docker
- `docker-compose up -d` - Start
- `docker-compose down` - Stop
- `docker-compose logs -f` - View logs
- `docker-compose restart` - Restart

### Nginx
- `sudo nginx -t` - Test config
- `sudo systemctl restart nginx` - Restart
- `sudo systemctl status nginx` - Check status

## Troubleshooting

**App not accessible?**
- Check if port 3000 is open: `sudo ufw allow 3000`
- Verify app is running: `pm2 status` or `docker-compose ps`
- Check logs: `pm2 logs` or `docker-compose logs`

**502 Bad Gateway?**
- Ensure app is running on port 3000
- Check Nginx error logs: `sudo tail -f /var/log/nginx/error.log`
- Verify proxy_pass in Nginx config points to `http://localhost:3000`

**SSL Issues?**
- Ensure DNS points to your server
- Check certificate: `sudo certbot certificates`
- Renew if needed: `sudo certbot renew`

For detailed instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

