# KMUpower Website

Dies ist die offizielle Website von KMUpower, erstellt mit Jekyll und dem Minimal Mistakes Theme für GitHub Pages.

## Lokale Entwicklung

1. Installiere die Abhängigkeiten:
   ```powershell
   bundle install
   ```
2. Starte die lokale Entwicklungsumgebung:
   ```powershell
   bundle exec jekyll serve
   ```
3. Öffne die Seite unter http://localhost:4000

## Deployment

Die Seite ist für GitHub Pages konfiguriert und wird automatisch aus dem `main`-Branch veröffentlicht.

## Struktur
- `_config.yml`: Konfiguration der Seite und des Themes
- `index.md`: Startseite
- `.github/copilot-instructions.md`: Copilot-Anweisungen
- `_pages/blog.md`: Blog-Übersicht ("KMU Digitalisierung")
- `_posts/`: Blogbeiträge

## Theme
[Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)
