# Publica o portfólio no GitHub (MatheusAyzava/matheus-portfolio)
$ErrorActionPreference = "Stop"
$root = Split-Path $PSScriptRoot -Parent
Set-Location $root

$gh = "$env:ProgramFiles\GitHub CLI\gh.exe"
if (-not (Test-Path $gh)) {
    Write-Host "Instale o GitHub CLI: winget install GitHub.cli"
    exit 1
}

$auth = & $gh auth status 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Faça login no GitHub (abre o navegador)..."
    & $gh auth login -h github.com -p https -w -s repo,read:org
}

git branch -M main

$remote = git remote get-url origin 2>$null
if (-not $remote) {
    Write-Host "Criando repositório matheus-portfolio e enviando código..."
    & $gh repo create matheus-portfolio --public --source=. --remote=origin --push `
        --description "Portfolio pessoal - Matheus Ayzava (Next.js)"
} else {
    Write-Host "Enviando para origin..."
    git push -u origin main
}

Write-Host ""
Write-Host "Pronto! Repositório: https://github.com/MatheusAyzava/matheus-portfolio"
