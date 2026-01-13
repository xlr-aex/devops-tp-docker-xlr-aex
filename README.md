# TP# DevOps TP Docker - XLR AEX

[![Build, Scan and Push Docker Image](https://github.com/xlr-aex/devops-tp-docker-xlr-aex/actions/workflows/docker-deploy.yml/badge.svg)](https://github.com/xlr-aex/devops-tp-docker-xlr-aex/actions/workflows/docker-deploy.yml)
[![CodeQL](https://github.com/xlr-aex/devops-tp-docker-xlr-aex/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/xlr-aex/devops-tp-docker-xlr-aex/actions/workflows/codeql-analysis.yml)CI/CD

Projet réalisé dans le cadre du TP 1 - Déploiement Automatisé avec Docker et GitHub Actions.

## Description
Ce projet contient une application web statique conteneurisée avec Nginx, déployée automatiquement via GitHub Actions sur GitHub Container Registry (GHCR).

## Architecture
- **src/** : Code source de l'application (HTML/CSS/JS)
- **nginx/** : Configuration du serveur Nginx
- **.github/workflows/** : Pipeline CI/CD
- **Dockerfile** : Définition de l'image Docker

## Utilisation
Pour lancer l'application localement :
```bash
docker run -d -p 8080:80 ghcr.io/xlr-aex/devops-tp-docker-xlr-aex:latest
```
Accédez ensuite à http://localhost:8080

## Auteur
Réalisé par xlr-aex.
