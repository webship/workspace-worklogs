/**
 * The Worklogs workspace for Webship Workspace: the `worklogs/` folder as a plugin.
 *
 * What the package carries is placed by the installer from the manifest (the folder's settings file,
 * its commands, its docs and its AI items, each in the folder of its kind) and listed by --activate; the dashboard draws the workspace from the
 * settings file like any other. Nothing to register at run time yet: this is where the folder's own
 * rail buttons, row menus or assistant context would go.
 */

import type { PluginApi } from '@webship.co/workspace-plugin-api';

export const WORKSPACE_KEY = 'worklogs';

/** The AI items the installer places, each in the workspace folder of its kind (ai/ in this package). */
export const AGENTS = ['worklogs-recorder'];
export const SKILLS = ['worklogs-workflow'];
export const AI_COMMANDS = ['worklogs-write'];
export const PROMPTS = ['worklogs-record-this-session'];

export function register(api: PluginApi): void {
  api.addAssistantContext(() => `The worklogs/ workspace is the Worklogs workspace (a plugin, @webship.co/workspace-worklogs); its commands are the cmd-*.sh scripts in that folder. It comes with AI items for work in this folder: the agent \`worklogs-recorder\` (ai-agents/), the skill \`worklogs-workflow\` (ai-skills/), the command \`/worklogs-write\` (ai-commands/) and the prompt \`worklogs-record-this-session\` (ai-prompts/).`);
}
