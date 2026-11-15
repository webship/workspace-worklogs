Record this working session as a dated worklog in the worklogs folder.

The launch line is for Claude Code, the default; the text between the triple quotes can be given to another AI CLI as it is.

```
claude --permission-mode bypassPermissions """
Write the worklog of the session on <subject> in the worklogs folder
# ~/workspace/worklogs/session-worklog-<date>-<subject>.md · container-based (DDEV by default)
# a worklog is a record: a new file for this day, never a change to an older one

1. ls ~/workspace/worklogs/session-worklog-*.md
   tell me whether a worklog of this day and subject exists; if one does, add a section at its end
2. collect what happened: what was asked, what was run and what it printed, which files changed,
   which issues and requests were opened, what failed
   check with git status and git log in the folders that were worked in
3. write the file, in the order it happened: asked, done, found, decided, failed, left
4. read it once more: every line can be traced to something that happened

No password, no token, no personal path; addresses are example addresses.
Report the file and what is left to do.
"""
```
