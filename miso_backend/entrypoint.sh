#!/bin/bash
set -e

# 開発環境で使うentrypoint.sh

cd /usr/src/app

# Remove a potentially pre-existing server.pid for Rails.
rm -f tmp/pids/server.pid

# Then exec the container's main process (what's set as CMD in the Dockerfile).
# exec "$@"

bundle exec rake db:migrate
bundle exec rails server -b 0.0.0.0 -p 8080
