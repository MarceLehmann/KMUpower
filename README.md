# KMUpower Website

Dies ist die Website für KMUpower, erstellt mit Jekyll und dem Minimal Mistakes Theme.

## Installation und lokale Entwicklung

Voraussetzungen:
- Ruby 2.7 oder höher
- RubyGems
- Git

### Installation der Abhängigkeiten

```bash
gem install bundler
bundle install
```

### Lokale Entwicklung

```bash
bundle exec jekyll serve
```

Die Webseite ist dann unter `http://localhost:4000/KMUpower/` verfügbar.

## Projektstruktur

- `_config.yml`: Hauptkonfigurationsdatei
- `_data/`: Enthält Datenstrukturen wie die Navigation
- `_includes/`: Enthält wiederverwendbare HTML-Fragmente
- `_layouts/`: Enthält die Layout-Vorlagen
- `_pages/`: Enthält Einzelseiten
- `_posts/`: Enthält Blog-Posts
- `assets/`: Enthält Bilder, CSS und andere statische Dateien

## Farbschema anpassen

Das Farbschema kann in der `_config.yml` Datei durch Ändern des Wertes `minimal_mistakes_skin` angepasst werden. Verfügbare Optionen sind:
- "default"
- "air"
- "aqua"
- "contrast"
- "dark"
- "dirt"
- "neon"
- "mint"
- "plum"
- "sunrise"
