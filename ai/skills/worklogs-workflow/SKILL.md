---
name: worklogs-workflow
description: How work is done in the `worklogs/` folder of the Webship Workspace — what a worklog is there (one dated markdown file per session, never updated), how one is named and written from what really happened, how it is backed up, the commands of the folder and its settings keys. Use when asked to "write the worklog", "record this session", "where are the worklogs", "back up a worklog", or when a file of `worklogs/` is about to be written.
argument-hint: '[what you are about to do in worklogs]'
---

# worklogs-workflow

`~/workspace/worklogs` is the Worklogs folder of a Webship Workspace (container-based, DDEV by default).
Worklogs are dated session worklogs: each one records what happened on a day, and stays as written. It comes with the Worklogs plugin (`@webship.co/workspace-worklogs`), which places the commands below in the folder. Every command finds the workspace from its own path; run it from the folder, and read `bash <command> --help` before quoting a flag.

## The order of work

1. **Name** the file: `~/workspace/worklogs/session-worklog-<date>-<subject>.md`, the date as
   `YYYY-MM-DD`.
2. **Collect** what happened from what was run and what changed, not from memory.
3. **Write** it in order: asked, done, found, decided, failed, left.
4. **Leave it.** A worklog of another day is never edited; what should stay true goes into a
   document of the Docs folder.
5. **Back up** when asked: `bash cmd-tool-backup-worklog.sh session-worklog-2026-01-31-example`.

## Commands

| Command | What it does | Flags |
| --- | --- | --- |
| `cmd-tool-backup-worklog.sh` | An item as an archive, into `backups/worklogs/` | none |
| `cmd-tool-git-change-filemode-to-false.sh` | Sets `core.fileMode` to false in one folder with a git checkout: `<project>` | none |
| `cmd-tool-sync-agents.sh` | Copies agent definitions between an agents folder, the AI CLI and the shared repository. Not about worklogs: it reads the settings of another folder. Do not run it here | `--filter` `--install` `--source` |

## Settings

| Key | File | What it says |
| --- | --- | --- |
| `doc.name` | `core/config/workspace.worklogs.settings.yml` | The folder under the workspace root: `worklogs` |
| `type` | `core/config/workspace.worklogs.settings.yml` | `files`: the page is a list of documents, edited in place |
| `assistant.name`, `assistant.placeholder` | `core/config/workspace.worklogs.settings.yml` | What the assistant is called on this page; `default` takes the workspace's |
| `workspaces` | `core/config/settings.yml` | The active folders; `worklogs` is on it once the plugin is activated |

## Rules

- **A worklog is a record.** It is written once and stays as written: never rewrite one to match
  what is true today. Something that should stay true belongs in the Docs folder.
- **Only what happened.** Every line can be traced to something that was run, changed or decided;
  what was not done, and what failed, is written too.
- **Nothing private**: no password, no token, no personal path; an address is an example address.
- The workspace is container-based (DDEV by default): say so when a worklog describes it.

The Worklogs plugin places these beside this one, each in the workspace folder of its kind: the agent `worklogs-recorder` (`ai-agents/`), the command `/worklogs-write` (`ai-commands/`) and the prompt `worklogs-record-this-session` (`ai-prompts/`).
