import os

# Simulate Heroku Nodejs buildpack
os.system('npm install')

# Simulate Heroku Python buildpack (all pip dependencies are already installed)
os.system('python manage.py collectstatic --no-input')

# Run the Procfile locally
os.system('heroku local')