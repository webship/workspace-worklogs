/**
 * What this plugin needs from the workspace it is added to (the manifest's `needs` and `suggests`).
 * The workspace reads them: github.com/webship/workspace, core/workspace-app/PLUGINS.md.
 */
import test from 'node:test';
import assert from 'node:assert';
import fs from 'fs';
import path from 'path';

// Compiled, this test runs from dist/tests, so the package root is one folder further up.
const PKG = fs.existsSync(path.join(__dirname, '..', 'package.json')) ? path.join(__dirname, '..') : path.join(__dirname, '..', '..');
const manifest = JSON.parse(fs.readFileSync(path.join(PKG, 'package.json'), 'utf8')).workspacePlugin;
const KINDS: Record<string, string> = { agents: 'ai-agents', skills: 'ai-skills', commands: 'ai-commands', prompts: 'ai-prompts' };

test('the manifest says what the plugin needs: the AI folder of each kind of item it ships', () => {
  assert.deepStrictEqual(manifest.needs, ['ai-agents', 'ai-skills', 'ai-commands', 'ai-prompts']);
  for (const [kind, folder] of Object.entries(KINDS)) assert.ok(manifest.ai[kind].length > 0 && manifest.needs.includes(folder), `it ships ${kind}, which is why it needs ${folder}`);
  assert.match(fs.readFileSync(path.join(PKG, 'README.md'), 'utf8'), /^## What it needs$/m, 'and the README says so');
});
