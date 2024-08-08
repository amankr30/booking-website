#!/bin/bash

# Pull the latest changes
git pull origin components

# Check if pull was successful
if [ $? -ne 0 ]; then
  echo "Error: git pull failed. Resolve conflicts before pushing."
  exit 1
fi

# Add all changes
git add .

# Commit changes
git commit -m "$1"

# Push changes
git push origin components
