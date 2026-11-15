---
description: Write the dated worklog of this session in the worklogs/ folder of the Webship Workspace: what was done, in order, from what was really run and changed, as a new file that is never rewritten.
argument-hint: '<subject> [date as YYYY-MM-DD]'
---

# /worklogs-write

Write the worklog of this session in `~/workspace/worklogs` for: `$ARGUMENTS`

The arguments are the text typed after the command: the first words are the subject of the
session, and a last word in the form `YYYY-MM-DD` is the day (today when it is left out). With no
subject, stop and ask for one. The workspace is container-based (DDEV by default): say so where
the worklog describes it.

## 1. Name the file

```bash
cd ~/workspace/worklogs
ls session-worklog-*.md | tail -5
```

The file is `session-worklog-<date>-<subject>.md`, the subject short, lowercase, with hyphens. If
a file of that day and subject exists, add a section at its end; never change what is in it, and
never touch a file of another day.

## 2. Collect what happened

From this session: what was asked, the commands that were run and what they printed, the files
that changed, the issues and requests that were opened, what failed. Check the folders that were
worked in with `git status` and `git log` rather than writing from memory.

## 3. Write

In the order it happened: what was asked, what was done, what was found, what was decided and
why, what failed, what is left. No password, no token, no personal path.

## 4. Report

The file, its sections, and what is left to do. To keep a copy:

```bash
bash cmd-tool-backup-worklog.sh <name>
```

For what should stay true beyond this day, say which document of the Docs folder it belongs in.
The `worklogs-recorder` agent does the same for a longer session; the `worklogs-workflow` skill
says how worklogs are kept in this folder.
