# @webship/workspace-worklogs

The **Worklogs** workspace of the [Webship Workspace](https://github.com/webship/workspace) dashboard:
the `worklogs/` folder (type `files`), its settings file (`core/config/workspace.worklogs.settings.yml`),
its commands and its docs, as a plugin.

## Use it

```bash
cd ~/workspace
bash core/scripts/plugins.sh --require github:webship/workspace-worklogs
bash core/scripts/plugins.sh --activate worklogs     # puts `worklogs` on the workspaces list of settings.yml
bash core/scripts/plugins.sh --install worklogs      # the folder, its settings file (once), its commands, its docs (once)
```

The settings file and the docs are placed once and never overwritten: they hold what you put there.
`--deactivate` takes the workspace off the list; the folder and its content stay.

## The commands

| Command |
| --- |
| `cmd-tool-backup-worklog.sh` |
| `cmd-tool-git-change-filemode-to-false.sh` |
| `cmd-tool-sync-agents.sh` |

The bash functions these commands call live in the dashboard's `core/scripts/functions`.
