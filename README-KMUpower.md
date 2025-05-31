# KMUpower - Professionelle Unternehmenswebsite

Eine moderne, responsive Jekyll-Website für **KMUpower**, spezialisiert auf digitale Lösungen für kleine und mittlere Unternehmen.

## 🎨 Design & Branding

**Hauptfarbe**: `#38c9c3` (Türkis)  
**Akzentfarben**: `#2ba6a1` (Dunkel), `#5dd4cf` (Hell)  
**Theme**: Minimal Mistakes Jekyll Theme mit Custom CSS

## 🚀 Features

- **Responsive Design** für alle Geräte
- **Professionelle Unternehmensoptik** mit Corporate Design
- **SEO-optimiert** für bessere Sichtbarkeit  
- **Schnelle Ladezeiten** durch optimierte Assets
- **Benutzerfreundliche Navigation** 
- **Call-to-Action Buttons** für Lead-Generierung

## 📄 Seiten-Struktur

### Hauptseiten
- **Home** (`/`) - Startseite mit Hero-Section und Services-Übersicht
- **Leistungen** (`/leistungen/`) - Übersicht aller Services
- **Über uns** (`/ueber-uns/`) - Unternehmensinfo und Team
- **Kontakt** (`/kontakt/`) - Kontaktinformationen und Anfrage-Formular

### Service-Seiten
- **Digitale Beratung** (`/leistungen/beratung/`) - Beratungsleistungen
- **Webentwicklung** (`/leistungen/webentwicklung/`) - Website & Web-Apps

### Rechtliche Seiten
- **Impressum** (`/impressum/`) - Rechtliche Angaben
- **Datenschutz** (`/datenschutz/`) - Datenschutzerklärung

## 🛠️ Technische Details

### Installation & Entwicklung

```bash
# Repository klonen
git clone [repository-url]
cd KMUpower

# Dependencies installieren
bundle install

# Development Server starten
bundle exec jekyll serve --livereload

# Website ist verfügbar unter: http://localhost:4000
```

### Wichtige Dateien

- `_config.yml` - Hauptkonfiguration der Website
- `index.html` - Startseite (Splash Layout)
- `_data/navigation.yml` - Haupt-Navigation
- `assets/css/main.scss` - Custom CSS mit Unternehmensfarben
- `_pages/` - Alle Unterseiten
- `assets/images/` - Bilder und Grafiken

### Anpassungen

**Farben ändern:**
Bearbeiten Sie die CSS-Variablen in `assets/css/main.scss`:
```scss
:root {
  --brand-primary: #38c9c3;
  --brand-primary-dark: #2ba6a1;
  --brand-primary-light: #5dd4cf;
}
```

**Kontaktdaten ändern:**
Aktualisieren Sie die Angaben in `_config.yml` und `_pages/kontakt.md`

**Navigation ändern:**
Bearbeiten Sie `_data/navigation.yml`

## 📸 Benötigte Bilder

Die Website verwendet Platzhalter-Referenzen für Bilder. Für den Produktivbetrieb sollten folgende Bilder hinzugefügt werden:

### Hero/Header Bilder (1920x1080px)
- `assets/images/hero-bg.jpg` - Hauptbild Startseite
- `assets/images/team-header.jpg` - Header "Über uns"
- `assets/images/contact-header.jpg` - Header "Kontakt"
- `assets/images/services-header.jpg` - Header "Leistungen"

### Service-Bilder (400x300px)
- `assets/images/digital-beratung.jpg`
- `assets/images/web-entwicklung.jpg`
- `assets/images/automatisierung.jpg`
- `assets/images/kmu-success.jpg`
- `assets/images/beratung-termin.jpg`

**Tipp**: Nutzen Sie Unsplash.com oder Pexels.com für professionelle Business-Bilder.

## 🚀 Deployment

### GitHub Pages
1. Repository in GitHub erstellen
2. In Repository Settings → Pages
3. Source: "Deploy from a branch" → "main" branch
4. Website ist verfügbar unter: `https://[username].github.io/[repository]`

### Netlify
1. Repository mit Netlify verbinden
2. Build Command: `bundle exec jekyll build`
3. Publish Directory: `_site`
4. Automatisches Deployment bei Git-Push

### Traditionelles Hosting
1. `bundle exec jekyll build` ausführen
2. Inhalt des `_site/` Ordners auf Webserver hochladen

## 📞 Support

Bei Fragen oder Problemen:
- E-Mail: info@kmupower.ch
- Telefon: +41 123 456 789

---

**© 2025 KMUpower GmbH - Alle Rechte vorbehalten**
