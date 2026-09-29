#!/usr/bin/env bash
# Builds data/AGENT_INDEX.md: a plain-text map of the repo for AI assistants that can only
# fetch URLs or read GitHub Issues (no git clone). Links are raw.githubusercontent.com URLs,
# pinned to the source commit so they're never stale or cached.
set -euo pipefail
REPO="${GITHUB_REPOSITORY:-Lukestaz/market-watch}"
SHA="${SOURCE_SHA:-$(git rev-parse HEAD)}"
RAW="https://raw.githubusercontent.com/$REPO"
OUT="data/AGENT_INDEX.md"
mkdir -p data

{
  echo "# market-watch: assistant index"
  echo
  echo "Source commit: \`${SHA:0:7}\` · generated $(date -u +'%Y-%m-%dT%H:%M:%SZ')"
  echo
  echo "Fetch any link below to read the file as plain text. Pinned links (@sha) never go stale;"
  echo "\`main\` links always point at the newest version (may lag ~5 min due to CDN caching)."
  echo
  echo "## Latest run"
  echo
  echo "- Status JSON: $RAW/main/data/run-status.json"
  echo "- Full log (redacted): $RAW/main/data/latest-run.log"
  echo "- Last 100 lines: $RAW/main/data/latest-run-summary.txt"
  echo "- Watch state (all listings): $RAW/main/data/state.json"
  if [ -f data/run-status.json ]; then
    echo
    echo '```json'
    node -e 'const s=require("./data/run-status.json");delete s.summary;console.log(JSON.stringify(s,null,2))'
    echo '```'
  fi
  echo
  echo "## Source files"
  echo
  echo "| File | Lines | Pinned | Latest |"
  echo "|---|---|---|---|"
  git ls-files | grep -vE '^(package-lock\.json|data/|src/generated/|debug/|certs/)' | while read -r f; do
    echo "| \`$f\` | $(wc -l < "$f") | [@${SHA:0:7}]($RAW/$SHA/$f) | [main]($RAW/main/$f) |"
  done
} > "$OUT"
echo "Wrote $OUT"
