module.exports = {
  apps : [{
    name: 'minhasena-api',
    script: 'npm start',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      host : 'localhost',
      ref  : 'origin/master',
      repo : 'https://github.com/Capheast/minhasena-API.git',
      path : '/home/ubuntu/minhasena-API',
      'pre-deploy-local': "echo 'This is a local executed command'",
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
