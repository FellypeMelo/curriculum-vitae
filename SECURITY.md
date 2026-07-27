# Security Policy

## Scope

This repository is a static, client-only personal CV/portfolio site (React + Vite, built to
static HTML/CSS/JS and served from GitHub Pages). There is no backend, no API, no database, no
authentication, and no user-submitted or user-stored data. The realistic attack surface is
small: mainly the front-end dependency tree, the build output committed to `dist/`, and the
GitHub Actions deploy workflow.

## Reporting a vulnerability

Please **do not open a public GitHub issue** for a security report.

Use GitHub's private vulnerability reporting for this repository instead:

1. Go to the repository's **Security** tab.
2. Select **Report a vulnerability** to open a private advisory
   (GitHub Security Advisories).

This creates a private channel between you and the repository maintainer and is the preferred
way to report anything you believe could affect the security of this project or its users
(for example: a dependency with a known exploit, an XSS vector, or exposed credentials).

If GitHub private reporting is not enabled for this repository at the time you look, please
open a minimal, non-sensitive issue asking the maintainer to enable it, rather than disclosing
details publicly.

## Known historical issue: tracked credential file

An earlier commit in this repository's history tracked a local file,
`.openclaude-profile.json`, that contained what appears to be an API credential. A later commit
stopped tracking that file and added it to `.gitignore`, but removing a file from the current
tree does **not** remove it from git history — anyone with clone access to this repository can
still retrieve the old blob from earlier commits.

If you are the maintainer: treat any credential that was ever in that file as compromised,
rotate it at the provider, and consider rewriting history (e.g. `git filter-repo` or BFG
Repo-Cleaner) plus force-pushing and asking any forks/clones to re-clone, if the credential's
provider does not let you rely on rotation alone. This documentation pass does not perform that
rotation or history rewrite — it is a repository-owner action, not something a docs change can
safely do on your behalf.

## Supported versions

This project does not use semantic version releases or tags today (see
[`CHANGELOG.md`](./CHANGELOG.md)); only the current `main` branch is maintained.
