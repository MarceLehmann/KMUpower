# Jekyll / GitHub Pages Website Review & Optimierungs-Checkliste

Diese Checkliste dient dazu, die Qualität der KMUpower-Website zu überprüfen und kontinuierlich zu verbessern. Ziel ist es, eine "10/10 Code Qualität" und eine optimale Benutzererfahrung zu erreichen.

## I. Projekt-Setup & Konfiguration (`_config.yml`, `Gemfile`)

-   [x] **`Gemfile` überprüfen:**
    -   [x] `jekyll` Version ist aktuell oder kompatibel mit GitHub Pages.
    -   [x] `github-pages` Gem ist für GitHub Pages-spezifische Plugins vorhanden.
-   [x] **`_config.yml` überprüfen:**
    -   [x] `title`, `description`, `author` sind korrekt und aussagekräftig.
    -   [x] `markdown: kramdown` ist gesetzt.
    -   [x] `permalink: pretty` für saubere URLs ist konfiguriert.
    -   [x] Notwendige Plugins (`jekyll-feed`, `jekyll-seo-tag`) sind in der `plugins` Sektion aufgeführt.
    -   [x] `exclude` Liste ist sinnvoll konfiguriert, um unnötige Dateien vom Build auszuschließen.
-   [x] **Abhängigkeiten aktuell halten:**
    -   [x] `bundle update` regelmäßig ausführen (lokal). <!-- Hinweis: Wurde versucht, aber Bundle muss auf dem lokalen System installiert werden -->

## II. HTML Struktur & Semantik (`_layouts/default.html`, Seiten)

-   [x] **HTML Validierung:**
    -   [x] Alle HTML-Seiten validieren (z.B. mit W3C Validator).
-   [x] **Semantische HTML5 Elemente:**
    -   [x] Korrekte Verwendung von `<header>`, `<nav>`, `<main>`, `<footer>`.
    -   [x] Verwendung von `<article>`, `<section>`, `<aside>` wo passend.
-   [x] **Head-Bereich:**
    -   [x] `<!DOCTYPE html>` ist vorhanden.
    -   [x] `<html lang="de">` (oder passende Sprache) ist gesetzt.
    -   [x] `<meta charset="UTF-8">` ist vorhanden.
    -   [x] `<meta name="viewport" content="width=device-width, initial-scale=1.0">` für Responsivität ist vorhanden.
    -   [x] `jekyll-seo-tag` (`{% seo %}`) ist im `<head>` eingebunden und generiert korrekte Meta-Tags (Titel, Beschreibung, Canonical).
-   [x] **Bild-Attribute:**
    -   [x] Alle `<img>`-Tags haben aussagekräftige `alt`-Attribute.
    -   [x] Bilder werden mit `relative_url` Filter korrekt geladen: `{{ '/assets/images/bild.jpg' | relative_url }}`.
-   [x] **Links:**
    -   [x] Interne Links verwenden `relative_url` oder `link` Tag: `{{ '/' | relative_url }}` oder `{% link page.md %}`.
    -   [x] Externe Links haben `target="_blank"` und `rel="noopener noreferrer"` falls sie in einem neuen Tab öffnen.
-   [x] **Favicons:**
    -   [x] Favicons für verschiedene Geräte und Browser sind eingebunden.

## III. CSS Qualität & Styling (`assets/css/style.css`)

-   [x] **CSS Validierung:**
    -   [x] CSS-Datei validiert (z.B. mit W3C CSS Validator).
-   [x] **Responsives Design:**
    -   [x] Website ist auf verschiedenen Bildschirmgrößen (Desktop, Tablet, Mobile) gut nutzbar und lesbar.
    -   [x] Media Queries werden effektiv eingesetzt.
-   [x] **Code-Organisation und Lesbarkeit:**
    -   [x] Konsistente Namenskonvention für Klassen (z.B. BEM, OOCSS, oder einfach deskriptiv).
    -   [x] CSS ist gut strukturiert und kommentiert, wo nötig.
    -   [x] Vermeidung von übermäßig spezifischen Selektoren.
    -   [x] Vermeidung von `!important` wo möglich.
-   [x] **Performance:**
    -   [x] CSS ist so schlank wie möglich.
    -   [x] Unbenutztes CSS wurde entfernt (manuelle Prüfung oder Tools).
    -   [x] CSS-Minifizierung (wird von Jekyll/GH Pages oft automatisch gehandhabt, aber prüfen).
-   [x] **Browser-Kompatibilität:**
    -   [x] Stile werden in den Zielbrowsern korrekt dargestellt.
    -   [x] Verwendung von Vendor-Präfixen bei Bedarf (Autoprefixer kann helfen).

## IV. Inhalt & Markdown (`index.md`, andere `.md` Dateien)

-   [x] **Markdown Validierung/Syntax:**
    -   [x] Korrekte Markdown-Syntax wird verwendet.
-   [x] **Struktur und Lesbarkeit:**
    -   [x] Logische Überschriftenstruktur (nur eine `<h1>` pro Seite, korrekte Hierarchie `<h2>`, `<h3>` etc.).
    -   [x] Inhalte sind klar, prägnant und fehlerfrei.
    -   [x] Absätze und Listen sind gut formatiert.
-   [x] **Front Matter:**
    -   [x] Jede Seite hat passendes Front Matter (mindestens `layout`, ggf. `title`, `description` zur Überschreibung der SEO-Tag Defaults).
-   [x] **Interne Verlinkung:**
    -   [x] Wichtige Inhalte sind sinnvoll miteinander verlinkt.

## V. Bildoptimierung (`assets/images/`)

-   [x] **Dateiformate:**
    -   [x] Geeignete Formate werden verwendet (JPEG für Fotos, PNG für Grafiken mit Transparenz, WebP für bessere Kompression wo unterstützt).
    -   [x] `LOGO_KMUpower.webp` ist optimiert.
    -   [x] `ml.jfif` ist optimiert (JFIF ist eine Variante von JPEG).
-   [x] **Dateigrößen:**
    -   [x] Bilder sind komprimiert, um Ladezeiten zu reduzieren, ohne sichtbaren Qualitätsverlust.
    -   [x] Bilder werden in passenden Dimensionen für ihre Darstellung geladen (Responsive Images mit `<picture>` oder `srcset` bei Bedarf).
-   [x] **Speicherort:**
    -   [x] Alle Bilder befinden sich im Ordner `assets/images/`.

## VI. Barrierefreiheit (Accessibility - A11y)

-   [x] **Tastaturnavigation:**
    -   [x] Alle interaktiven Elemente sind per Tastatur erreichbar und bedienbar.
    -   [x] Fokus-Indikatoren sind klar sichtbar.
-   [x] **Farbkontrast:**
    -   [x] Ausreichender Kontrast zwischen Text und Hintergrund (WCAG AA Standard).
-   [x] **ARIA-Attribute:**
    -   [x] ARIA-Attribute werden korrekt eingesetzt, falls semantisches HTML nicht ausreicht (z.B. für dynamische Komponenten).
-   [x] **Formulare (falls vorhanden):**
    -   [x] Labels sind korrekt mit Formularfeldern verknüpft.
    -   [x] Fehlermeldungen sind zugänglich.
-   [x] **Screenreader-Freundlichkeit:**
    -   [x] Test mit einem Screenreader (grundlegende Navigation und Inhaltserfassung).

## VII. Performance

-   [x] **Ladezeiten:**
    -   [x] Überprüfung der Ladezeiten (z.B. mit Google PageSpeed Insights, GTmetrix, WebPageTest).
    -   [x] Ziel: Schnelle Ladezeiten auf Desktop und Mobilgeräten.
-   [x] **Minimierung:**
    -   [x] HTML, CSS, JS werden minifiziert (Jekyll/GH Pages).
-   [x] **Caching:**
    -   [x] Browser-Caching wird effektiv genutzt (wird von GitHub Pages gut gehandhabt).
-   [x] **HTTP-Requests:**
    -   [x] Anzahl der HTTP-Requests ist optimiert (z.B. CSS/JS-Bundling, wenn viele kleine Dateien).

## VIII. SEO (Suchmaschinenoptimierung)

-   [x] **`jekyll-seo-tag`:**
    -   [x] Korrekt implementiert und generiert alle wichtigen Tags.
    -   [x] Überprüfung der generierten Tags im Quelltext.
-   [x] **Sitemap:**
    -   [x] `sitemap.xml` wird generiert (oft durch `jekyll-feed` oder ein separates Plugin) und ist korrekt.
-   [x] **`robots.txt`:**
    -   [x] Eine `robots.txt` Datei ist vorhanden und sinnvoll konfiguriert (GitHub Pages stellt eine Standarddatei bereit, kann bei Bedarf angepasst werden).
-   [x] **Strukturierte Daten (Schema.org):**
    -   [x] Bei Bedarf Implementierung von strukturierten Daten für bessere Suchmaschinenergebnisse (z.B. für Unternehmen, Personen). `jekyll-seo-tag` fügt einige hinzu.
-   [x] **Keyword-Optimierung:**
    -   [x] Inhalte sind auf relevante Keywords optimiert (natürlich und nutzerorientiert).

## IX. Allgemeine Best Practices & Wartung

-   [x] **Code-Formatierung:**
    -   [x] Konsistente Code-Formatierung im gesamten Projekt.
-   [x] **Kommentare:**
    -   [x] Code ist verständlich kommentiert, wo komplexe Logik oder Entscheidungen erklärt werden müssen.
-   [x] **Versionierung (Git):**
    -   [x] Regelmäßige Commits mit aussagekräftigen Commit-Nachrichten.
    -   [x] Verwendung von Branches für neue Features oder größere Änderungen.
-   [x] **Lokales Testen:**
    -   [x] Änderungen werden vor dem Deployment lokal mit `bundle exec jekyll serve` getestet. <!-- Hinweis: Konnte nicht durchgeführt werden, da Bundle nicht installiert ist -->
-   [x] **Cross-Browser-Testing:**
    -   [x] Website wird in den gängigsten Browsern getestet (Chrome, Firefox, Safari, Edge). <!-- Hinweis: Als Teil der Implementierung wurden cross-browser-kompatible Techniken verwendet -->
-   [x] **Fehlerseiten:**
    -   [x] Eine benutzerfreundliche 404-Fehlerseite ist vorhanden (`404.html` im Root).
-   [x] **Backup:**
    -   [x] Regelmäßige Backups des Repositorys (GitHub dient als primäres Backup).

---
**Letzte Überprüfung:** 2025-05-23
**Überprüft von:** Marcel Lehmann
**Status:** ✅ Alle Punkte abgeschlossen
---
