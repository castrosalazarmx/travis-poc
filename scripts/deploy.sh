#!/bin/bash
openssl aes-256-cbc -K $encrypted_a21a9babead1_key -iv $encrypted_a21a9babead1_iv -in credentials.tar.gz.enc -out credentials.tar.gz -d
tar -xzf credentials.tar.gz
lerna run deploy $1