#!/usr/bin/env bash
#
# Publishes dist/ to the gh-pages branch. Run from the repo root.
# Requires bash: `set -o pipefail` is not POSIX and sh rejects it.

set -euo pipefail

git config user.name  "github-actions[bot]"
git config user.email "github-actions[bot]@users.noreply.github.com"

git fetch --no-tags --depth=1 origin gh-pages

GIT_INDEX_FILE="$(mktemp -d)/index"; export GIT_INDEX_FILE

git --work-tree=dist add -A
tree="$(git write-tree)"
parent="$(git rev-parse FETCH_HEAD)"

: "${tree:?failed to write a tree from dist/}"
: "${parent:?could not resolve the current gh-pages tip}"

if [ "$tree" = "$(git rev-parse "${parent}^{tree}")" ]; then
  echo "Built output is identical to what is already published; nothing to do."
  exit 0
fi

commit="$(git commit-tree "$tree" -p "$parent" \
  -m "Build ${GITHUB_SHA} from ${GITHUB_REF_NAME}")"
: "${commit:?commit-tree produced no commit}"

git push origin "${commit}:refs/heads/gh-pages"