#!/usr/bin/env node

import { createWorkspace } from 'create-nx-workspace';

async function main() {
  const name = process.argv[2]; // TODO: use libraries like yargs or enquirer to set your workspace name
  if (!name) {
    throw new Error('Please provide a name for the workspace');
  }

  console.log(`Creating the workspace: ${name}`);

  // This assumes "nx-hardhat" and "nx-hardhat-app" are at the same version
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const presetVersion = require('../package.json').version;

  // TODO: update below to customize the workspace
  const { directory } = await createWorkspace(`nx-hardhat@${presetVersion}`, {
    name,
    nxCloud: 'skip',
    packageManager: 'pnpm',
  });

  console.log(`Successfully created the workspace: ${directory}.`);
}

main();
