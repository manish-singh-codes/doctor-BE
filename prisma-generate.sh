#!/bin/bash
# This script helps with Prisma generation on Render
export PRISMA_CLI_QUERY_ENGINE_TYPE=binary
export PRISMA_QUERY_ENGINE_LIBRARY=/opt/render/project/src/node_modules/@prisma/engines/libquery_engine-debian-openssl-1.1.x.so.node
npx prisma generate 