# Worklogs

Dated session worklogs. They stay as written: a worklog is a record, not a document to
keep current.

Part of the **Webship Workspace** (`~/workspace`), a container-based harness (DDEV by default). The rules in the root
`CLAUDE.md` apply here too; what follows is what is specific to this folder.

## What an item is here

A dated worklog. **They are not updated.** A worklog records what happened on a day; something
that should stay true belongs in `docs/` instead.

## Commands here

```bash
bash cmd-tool-backup-worklog.sh                       # Bootstrap.
bash cmd-tool-git-change-filemode-to-false.sh         # Bootstrap.
```

Every one locates the workspace from its own path, so there is nothing to export and nothing to
install. `--help` on any of them lists its arguments.

## AI items for this folder

The plugin of this folder (`@webship.co/workspace-worklogs`) places its own AI items in the AI folders of the
workspace, when they are active:

- `worklogs-recorder` (`ai-agents/`): Writes the dated worklog of a session in `worklogs/` from what was really run and changed, as a new file that is never rewritten; backs one up
- `worklogs-workflow` (`ai-skills/`): How work is done in `worklogs/`: what a worklog is, its name, collect, write, leave it; the commands, the settings keys
- `/worklogs-write` (`ai-commands/`): `/worklogs-write <subject> [date]`: names the file, collects what happened and writes the worklog of the session
- `worklogs-record-this-session` (`ai-prompts/`): A new session that records a working session as a dated worklog
