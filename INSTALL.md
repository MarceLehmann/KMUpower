## Phase 1: MVP₀ Setup & On-Page SEO – Schritt-für-Schritt (Leeres Repo → Live)

Folge dieser Anleitung, um aus einem **leeren** Git-Repository in sieben klaren Schritten ein **voll funktionsfähiges**, SEO-optimiertes Jekyll-MVP₀ mit Minimal Mistakes als Remote-Theme zu erstellen.

---

### Schritt 1: Leeres Repository anlegen & initialisieren

```bash
# Neuen Ordner erstellen und ins Repo wechseln\mkdir kmupower-site && cd kmupower-site
git init
```

### Schritt 2: Gemfile anlegen

Erstelle eine Datei `Gemfile` im Root mit folgendem Inhalt:

```ruby
source "https://rubygems.org"
gem "github-pages", group: :jekyll_plugins
gem "jekyll-seo-tag"
gem "jekyll-include-cache"
gem "jekyll-remote-theme"
```

### Schritt 3: Abhängigkeiten installieren

```bash
bundle install
```

### Schritt 4: Jekyll-Konfiguration (`_config.yml`)

Lege `_config.yml` im Root an und füge ein:

```yaml
title: "KMUpower"
email: info@kmupower.ch
description: "Wir ermächtigen kleine und mittelständische Unternehmen durch digitale Exzellenz."
baseurl: ""
url: "https://www.kmupower.ch"

plugins:
  - jekyll-seo-tag
  - jekyll-include-cache
  - jekyll-remote-theme

remote_theme: "mmistakes/minimal-mistakes@v4.27.1"
lang: de
author:
  name: Marcel Lehmann
  avatar: "/assets/images/avatar.jpg"
  bio: "Gründer & CEO | Microsoft MVP | Digitalisierungsexperte für KMU im DACH-Raum"
defaults:
  - scope:
      path: ""
      type: "pages"
    values:
      layout: single
      author_profile: false
      seo:
        type: "website"
```

> **Hinweis:** Entferne jeglichen `theme:`-Eintrag, sobald du `remote_theme:` nutzt.

---

### Schritt 5: Verzeichnisstruktur & Assets

Erstelle folgende Ordner:

```
assets/
  css/
  images/
_includes/
_layouts/
```

Lege dann Datei `assets/css/custom.scss` mit deinem Design-Überride an:

```css
:root {
  --color-primary: #38c9c3;
  --color-text:    #333333;
  --font-sans:     "Poppins", sans-serif;
}
```

---

### Schritt 6: Inhaltliche Seiten anlegen

#### 6.1 `index.md` (Home)

Pfad: `/index.md`

```markdown
---
title: "KMUpower – Digitale Exzellenz für KMU"
description: "Wir ermächtigen KMUs durch digitale Exzellenz: Low-Code-Workflows & Prozessautomatisierung für nachhaltiges Wachstum."
permalink: /
seo:
  type: "WebPage"
  image: "/assets/images/hero-digital.jpg"
  twitter:
    card: "summary_large_image"
open_graph:
  title: "{{ page.title }} | KMUpower"
  description: "{{ page.description }}"
  image: "/assets/images/hero-digital.jpg"
json_ld:
  - "@context": "https://schema.org"
    "@type": "Organization"
    name: "KMUpower"
    url: "https://www.kmupower.ch"
    logo: "https://www.kmupower.ch/assets/images/logo.svg"
  - "@context": "https://schema.org"
    "@type": "BreadcrumbList"
    itemListElement:
      - "@type": "ListItem"
        position: 1
        name: "Home"
        item: "https://www.kmupower.ch/"
---

layout: home
hero:
  title: "Wir ermächtigen KMUs durch digitale Exzellenz"
  image: "/assets/images/hero-digital.jpg"
  cta:
    - text: "Kontakt aufnehmen"
      url: "/contact"
features:
  - title: "Prozessautomatisierung"
    description: "Schnelle, Low-Code-Workflows mit Power Automate."
  - title: "Individuelle Power Apps"
    description: "Maßgeschneiderte Apps für Ihre Abläufe."
  - title: "Schulung & Enablement"
    description: "Citizen Developer Programme & Anwender-Trainings."
---

## Warum KMUpower?

**Unsere Mission:**
Wir ermächtigen kleine und mittelständische Unternehmen durch digitale Exzellenz.

**Unsere Vision:**
Die führende Kraft für intelligente Digitalisierung im DACH-KMU-Sektor sein.

> „Technologie darf kein Wettbewerbsnachteil sein – wir machen sie zum Wachstumstreiber.“

<div class="cards">
{% include card title="30 % Effizienzsteigerung" text="Unsere Pilotkunden erreichen 30 % Zeitersparnis in digitalisierten Prozessen." icon="zap" %}
{% include card title="10 KMU-Kunden" text="In den ersten 6 Monaten vertrauen uns bereits 10 zahlende Unternehmen." icon="users" %}
</div>
```

---

#### 6.2 `services.md` (Leistungen)

Pfad: `/services.md`

```markdown
---
title: "Unsere Leistungen | KMUpower"
description: "Digitalisierungsberatung, Low-Code-Entwicklung & Schulungen für KMU im DACH-Raum."
permalink: /services/
seo:
  type: "WebPage"
  image: "/assets/images/services-preview.jpg"
  twitter:
    card: "summary_large_image"
open_graph:
  title: "{{ page.title }}"
  description: "{{ page.description }}"
  image: "/assets/images/services-preview.jpg"
json_ld:
  - "@context": "https://schema.org"
    "@type": "BreadcrumbList"
    itemListElement:
      - "@type": "ListItem"
        position: 1
        name: "Home"
        item: "https://www.kmupower.ch/"
      - "@type": "ListItem"
        position: 2
        name: "Leistungen"
        item: "https://www.kmupower.ch/services/"
---

# Unsere Leistungen

## 1. Prozessautomatisierung für KMU
### Low-Code-Workflows mit Power Automate
> Effiziente Automatisierung von Routineaufgaben – Zeitersparnis bis 30 %.

### RPA & Cloud Flows
> Bot-basierte Automatisierungen für Ihre Legacy-Systeme.

## 2. Individuelle Power Apps
> Canvas und Modellgetriebene Apps für nahtlose Prozessintegration.

## 3. Schulung & Enablement
- Citizen Developer Programme: Self-Service-Workshops vor Ort.
- Admin- & Governance-Trainings: Sicherer Betrieb Ihrer Plattform.

## 4. Managed Services
> Proaktive Wartung mit PowerCare & SLA-gestütztem Support.
```

---

#### 6.3 `about.md` (Über uns)

Pfad: `/about.md`

```markdown
---
title: "Über uns | KMUpower"
description: "Erfahren Sie mehr über das Kernteam, unsere Mission und Werte."
permalink: /about/
seo:
  type: "WebPage"
  image: "/assets/images/team-preview.jpg"
  twitter:
    card: "summary_large_image"
open_graph:
  title: "{{ page.title }}"
  description: "{{ page.description }}"
  image: "/assets/images/team-preview.jpg"
json_ld:
  - "@context": "https://schema.org"
    "@type": "BreadcrumbList"
    itemListElement:
      - "@type": "ListItem"
        position: 1
        name: "Home"
        item: "https://www.kmupower.ch/"
      - "@type": "ListItem"
        position: 2
        name: "Über uns"
        item: "https://www.kmupower.ch/about/"
---

# Über uns

## Unser Kernteam

**Marcel Lehmann**  
Gründer & CEO | Microsoft MVP  
„Seit 2023 begleite ich KMUs im DACH-Raum zu digitalen Quick Wins und nachhaltigen Automatisierungen.“

*(Weitere Profile hier ergänzen)*

---

## Mission & Vision

> **Mission:** Wir ermächtigen kleine und mittelständische Unternehmen durch digitale Exzellenz.
> **Vision:** Die führende Kraft für intelligente Digitalisierung im DACH-KMU-Sektor sein.

---

## Unsere Werte
1. Expertise mit Bodenständigkeit
2. Wertorientierung
3. Pragmatischer Fortschritt
4. Durchgängige Exzellenz
5. Partnerschaftliche Zusammenarbeit
```

---

#### 6.4 `contact.md` (Kontakt)

Pfad: `/contact.md`

```markdown
---
title: "Kontakt | KMUpower"
description: "Kontaktieren Sie uns für eine Beratung zur Prozessautomatisierung & Low-Code-Entwicklung."
permalink: /contact/
seo:
  type: "ContactPage"
  image: "/assets/images/contact-preview.jpg"
  twitter:
    card: "summary_large_image"
open_graph:
  title: "{{ page.title }}"
  description: "{{ page.description }}"
  image: "/assets/images/contact-preview.jpg"
json_ld:
  - "@context": "https://schema.org"
    "@type": "BreadcrumbList"
    itemListElement:
      - "@type": "ListItem"
        position: 1
        name: "Home"
        item: "https://www.kmupower.ch/"
      - "@type": "ListItem"
        position: 2
        name: "Kontakt"
        item: "https://www.kmupower.ch/contact/"
---

# Kontakt

Sie haben Fragen oder benötigen eine individuelle Beratung? Wir freuen uns auf Ihre Nachricht!

<form name="contact" method="POST" data-netlify="true">
  <p><label>Ihr Name<br><input type="text" name="name" required></label></p>
  <p><label>E-Mail<br><input type="email" name="email" required></label></p>
  <p><label>Nachricht<br><textarea name="message" rows="5" required></textarea></label></p>
  <p><button type="submit">Senden</button></p>
</form>

---

**Adresse:** KMUpower, Zürich, Schweiz  
**E-Mail:** info@kmupower.ch  
**Telefon:** +41 44 123 45 67

**Folgen Sie uns:** [LinkedIn](https://www.linkedin.com/company/kmupower) • [X (Twitter)](https://twitter.com/kmupower)
```

---

### Schritt 7: Build & Preview

```bash
bundle exec jekyll serve --livereload
```

Öffne dann `http://localhost:4000` im Browser und überprüfe:

* **Lighthouse** (Performance, SEO, Accessibility)
* **PageSpeed Insights** (Mobile & Desktop)
* **Rich Results Test** (JSON-LD)

---

Dein MVP₀ ist jetzt live, SEO-optimiert und bereit für Phase 2 (Blog, Case Studies, Mehrsprachigkeit etc.).