#!/bin/bash

cp ../../../keyfile-dev.json .
gcloud auth activate-service-account --key-file keyfile-dev.json
gcloud app deploy app.yaml