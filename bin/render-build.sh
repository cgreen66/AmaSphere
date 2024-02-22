#!/usr/bin/env bash

# exit on error
set -o errexit

bundle install
rails db:drop
rails db:create
rails db:migrate
rails db:seed #if needed