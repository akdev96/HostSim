/**
 * PM2 Ecosystem Configuration
 * Install PM2: npm install -g pm2
 * Start: pm2 start ecosystem.config.js
 * Stop: pm2 stop hostsim
 * Restart: pm2 restart hostsim
 * Logs: pm2 logs hostsim
 * Monitor: pm2 monit
 */

module.exports = {
  apps: [
    {
      name: 'hostsim',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      cwd: './',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        NEXT_TELEMETRY_DISABLED: '1',
      },
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      autorestart: true,
      max_memory_restart: '1G',
      watch: false,
      ignore_watch: ['node_modules', '.next', 'logs'],
    },
  ],
};

