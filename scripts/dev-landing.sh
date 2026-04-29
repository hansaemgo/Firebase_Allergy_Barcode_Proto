#!/usr/bin/env bash
# 랜딩용 개발 서버 + 준비되면 브라우저 열기 (macOS: open, Linux: xdg-open)
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"
export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
if [[ -s "$NVM_DIR/nvm.sh" ]]; then
  # shellcheck source=/dev/null
  . "$NVM_DIR/nvm.sh"
fi

URL="http://localhost:9002/"

npm run dev &
DEV_PID=$!

cleanup() {
  kill "$DEV_PID" 2>/dev/null || true
}
trap cleanup EXIT

for _ in $(seq 1 120); do
  if nc -z 127.0.0.1 9002 2>/dev/null; then
    break
  fi
  sleep 0.25
done

if command -v open >/dev/null 2>&1; then
  open "$URL"
elif command -v xdg-open >/dev/null 2>&1; then
  xdg-open "$URL"
else
  echo "브라우저에서 열기: $URL"
fi

wait "$DEV_PID"
