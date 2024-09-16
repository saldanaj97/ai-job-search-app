#!/bin/sh

# If you need to pull the latest schema from the database, uncomment the next line
npx prisma db pull

# Generate Prisma client
npx prisma generate

# Run database migrations (if needed)
# pnpm prisma migrate deploy

# Start the application
exec "$@"
