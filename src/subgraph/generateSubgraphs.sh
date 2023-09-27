#!/bin/sh

echo "\n\n----- Starting subgraphs generation -----\n\n"

echo "\n--- DEV subgraph generation ---\n"
{
  yarn subgraph-codegen:dev
} || {
  mkdir "./src/subgraph/dev/generated/"
  cp src/subgraph/fakeGeneratedSubgraph.ts src/subgraph/dev/generated/subgraph.ts
  echo "Generation of dev subgraph FAILED\n\n"
}

echo "\n--- STAGING subgraph generation ---\n"
{
  yarn subgraph-codegen:staging
} || {
  cp ./src/subgraph/fakeGeneratedSubgraph.ts ./src/subgraph/staging/generated/subgraph.ts
  echo "Generation of staging subgraph FAILED\n\n"
}

echo "\n--- PROD subgraph generation ---\n"
{
  yarn subgraph-codegen:prod
} || {
  cp ./src/subgraph/fakeGeneratedSubgraph.ts ./src/subgraph/prod/generated/subgraph.ts
  echo "Generation of prod subgraph FAILED\n\n"
}

echo "\n\n----- Subgraphs generation finished -----\n\n"
