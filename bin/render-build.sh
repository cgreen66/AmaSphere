#!/usr/bin/env bash

# exit on error
set -o errexit

bundle install
rails db:drop DISABLE_DATABASE_ENVIRONMENT_CHECK=1
rails db:create
rails db:migrate
rails db:seed #if needed