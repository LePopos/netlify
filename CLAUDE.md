# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Page web complète affichant les classements UFC avec photos réelles des combattants et design professionnel.

## Project Structure

- `index.html` - Page principale avec classements UFC complets et photos réelles
- `test.html` - Page de test pour debug des images
- `index-clean.html` - Version de travail sans conflits
- `wikipedia-scraper.js` - Script Playwright pour scraper photos Wikipedia
- `wikipedia-photos.json` - Base de données des photos scrapées (43 photos)
- `.claude/settings.local.json` - Configuration Claude Code

## Development Setup

Aucun build n'est requis. Ouvrez simplement `index.html` dans un navigateur web.

Pour scraper de nouvelles photos Wikipedia :
```bash
npm install
npx playwright install chromium
node wikipedia-scraper.js
node update-photos.js
```

## Architecture

- Page HTML statique avec JavaScript vanilla
- Tailwind CSS via CDN pour le styling
- Données de classement simulées (mockRankings)
- Interface responsive avec design UFC (couleurs rouge/or)
- Affichage des classements Pound-for-Pound et par catégorie de poids

## Features

- **Classements complets** : Pound-for-Pound + 12 catégories de poids
- **Photos réelles** : Images des combattants depuis essentiallysports.com
- **Surnoms officiels** : "Bones", "Suga", "El Matador", etc.
- **Design UFC authentique** : Couleurs rouge/or, responsive
- **Champions mis en évidence** : Bordures dorées et badges
- **Fallback élégant** : Emoji boxe si photo ne charge pas
- **Animation de chargement** et gestion d'erreurs