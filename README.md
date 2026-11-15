# @webship.co/workspace-worklogs

The **Worklogs** workspace of the [Webship Workspace](https://github.com/webship/workspace) dashboard:
the `worklogs/` folder (type `files`), its settings file (`core/config/workspace.worklogs.settings.yml`),
its commands and its docs, as a plugin.

## Use it

```bash
cd ~/workspace
bash core/scripts/plugins.sh --require github:webship/workspace-worklogs
bash core/scripts/plugins.sh --activate worklogs --with-needs     # puts `worklogs` on the workspaces list of settings.yml
bash core/scripts/plugins.sh --install worklogs      # the folder, its settings file (once), its commands, its docs (once)
```

The settings file and the docs are placed once and never overwritten: they hold what you put there.
`--deactivate` takes the workspace off the list; the folder and its content stay.

## What it needs

The AI items land in the four AI folders, so the manifest needs them (`needs`): `ai-agents`, `ai-skills`, `ai-commands`, `ai-prompts`. `--activate worklogs` and `--install worklogs` stop while one is missing and name it; with `--with-needs` they are required, activated and installed first.

## The AI items

The plugin carries its own AI items (`ai/` in the package, the manifest's `ai` block), written for the work this folder is for. `--install` places each one in the workspace folder of its kind, when that folder is an active workspace folder; `--uninstall` removes them, and keeps one that was edited in its folder.

| Item | Kind | Lands in | What it is for |
| --- | --- | --- | --- |
| `worklogs-recorder` | Agent | `ai-agents/worklogs-recorder.md` | Writes the dated worklog of a session in `worklogs/` from what was really run and changed, as a new file that is never rewritten; backs one up |
| `worklogs-workflow` | Skill | `ai-skills/worklogs-workflow/` | How work is done in `worklogs/`: what a worklog is, its name, collect, write, leave it; the commands, the settings keys |
| `/worklogs-write` | Command | `ai-commands/worklogs-write.md` | `/worklogs-write <subject> [date]`: names the file, collects what happened and writes the worklog of the session |
| `worklogs-record-this-session` | Prompt | `ai-prompts/worklogs-record-this-session.md` | A new session that records a working session as a dated worklog |

From its folder an item is installed into the AI CLI (Claude Code by default) like any other: the folder's page on the dashboard, or `bash cmd-tools-ai-items.sh <name> --install` in the AI folder (`--to dev/<project>` for one project). A prompt is not installed: the New screen form lists it as the start of a new session. The body of every item is plain Markdown any AI CLI can follow; Claude Code is the default shape (the frontmatter, the launch line of a prompt). Every command, flag, settings key and path an item names is checked by `tests/items.test.ts`; the shape of the items is the one of the reference, [`docs/plugin-items-pattern.md` of the WordPress plugin](https://github.com/webship/workspace-wordpress/blob/1.0.x/docs/plugin-items-pattern.md).

## The commands

| Command |
| --- |
| `cmd-tool-backup-worklog.sh` |
| `cmd-tool-git-change-filemode-to-false.sh` |
| `cmd-tool-sync-agents.sh` |

The bash functions these commands call live in the dashboard's `core/scripts/functions`.
