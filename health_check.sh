#!/bin/bash

response=$(curl -s https://pokedex-eacerbi.fly.dev/health)

if [ "$response" == "ok" ] 
then 
  echo "Successful curl from shell script"
  exit 0 
fi

echo "Failed curl from shell script"
exit 1
