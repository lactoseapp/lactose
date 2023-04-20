#!/bin/sh

# Run Prisma db push to sync the schema with the database
npx prisma db push

# Start the development server
npm run dev