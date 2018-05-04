#!/bin/bash

cp ../../keyfile-dev.json .
gcloud config set project $2
gcloud auth activate-service-account --key-file keyfile-dev.json
gcloud app deploy app.yaml -q --version $1
