#!/bin/bash

if [ $# -eq 0 ]; then
  echo "Please provide a project name as a command line argument."
  exit 1
fi

project_name=$1

npm create vite@latest "$project_name" -- --template react