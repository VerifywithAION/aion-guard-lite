$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

$RepoRoot = "C:\Lab_Research\aion-guard-lite"
Set-Location $RepoRoot

Write-Host ""
Write-Host "=========================================================="
Write-Host " STAGE 2 HISTORY PURGE START"
Write-Host "=========================================================="
Write-Host ("RepoRoot : " + $RepoRoot)

# Safety check
$CurrentBranch = (git rev-parse --abbrev-ref HEAD).Trim()
if ($CurrentBranch -ne "main") {
    throw "Expected to be on main, found: $CurrentBranch"
}

# Paths to purge from ALL history
$IndexFilter = 'git rm -r --cached --ignore-unmatch bin runtime scripts harness docs/api docs/chains docs/guard-pro docs/evidence/transcripts examples'

git filter-branch --force --index-filter $IndexFilter --prune-empty --tag-name-filter cat -- --all

Write-Host ""
Write-Host "FILTER-BRANCH COMPLETE"

# Remove filter-branch backup refs
$OriginalRefs = @(git for-each-ref --format="%(refname)" refs/original/)
foreach ($r in $OriginalRefs) {
    if ($r) {
        git update-ref -d $r
    }
}

Write-Host "ORIGINAL REFS CLEANED"

# Expire reflogs and garbage collect
git reflog expire --expire=now --all
git gc --prune=now --aggressive

Write-Host "GIT GC COMPLETE"

# Quick history recheck by filenames
$HistorySensitiveNames = @(
    "bin/",
    "runtime/",
    "scripts/",
    "harness/",
    "docs/api/",
    "docs/chains/",
    "docs/guard-pro/",
    "docs/evidence/transcripts/",
    "examples/"
)

$HistoryHits = New-Object System.Collections.Generic.List[string]
$AllHistory = @(git log --all --name-only --pretty=format: | Where-Object { $_ -and $_.Trim() -ne "" } | Sort-Object -Unique)

foreach ($h in $AllHistory) {
    foreach ($needle in $HistorySensitiveNames) {
        if ($h.StartsWith($needle)) {
            $HistoryHits.Add($h)
            break
        }
    }
}

Write-Host ""
Write-Host "POST-PURGE HISTORY HIT COUNT: $($HistoryHits.Count)"

if ($HistoryHits.Count -gt 0) {
    Write-Host "Remaining history-sensitive paths:"
    $HistoryHits | Sort-Object -Unique | ForEach-Object { Write-Host (" - " + $_) }
    throw "Stage 2 verification failed: history-sensitive paths still present."
}

# Force-push cleaned public history
git push origin --force --all
git push origin --force --tags

Write-Host ""
Write-Host "=========================================================="
Write-Host " STAGE 2 HISTORY PURGE COMPLETE"
Write-Host "=========================================================="
git log --oneline -n 12