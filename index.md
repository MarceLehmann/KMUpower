---
layout: default
excerpt: "Wir ermächtigen kleine und mittelständische Unternehmen durch digitale Exzellenz."
---

<div class="page-section" style="text-align: center;">
  <fluent-heading level="1">{{ site.title | escape }}</fluent-heading>
  <fluent-text size="large" weight="semibold" style="margin-top: 10px; display: block;">
    {{ page.excerpt }}
  </fluent-text>
  <div style="margin-top: 20px;">
    <fluent-button appearance="accent" href="{{ '/suite/' | relative_url }}">Unsere Suite kennenlernen</fluent-button>
    <fluent-button appearance="neutral" href="{{ '/kontakt/' | relative_url }}" style="margin-left: 10px;">Kontakt aufnehmen</fluent-button>
  </div>
</div>

<div class="page-section">
  <fluent-heading level="2">Ihr Partner für digitale Exzellenz</fluent-heading>
  <fluent-text>
    KMUpower ist Ihr Spezialist für Digitalisierungslösungen auf Basis der Microsoft Power Platform. Wir unterstützen KMUs im DACH-Raum dabei, ihre Geschäftsprozesse zu optimieren, Effizienz zu steigern und durch digitale Transformation wettbewerbsfähig zu bleiben.
  </fluent-text>
</div>

<div class="page-section">
  <fluent-heading level="2">Unsere Kernkompetenzen</fluent-heading>
  <div class="card-grid">
    <fluent-card>
      <fluent-heading level="3">Power Apps Entwicklung</fluent-heading>
      <fluent-text>Maßgeschneiderte Geschäftsanwendungen für KMUs.</fluent-text>
    </fluent-card>
    <fluent-card>
      <fluent-heading level="3">Power Automate Workflows</fluent-heading>
      <fluent-text>Automatisierung von Geschäftsprozessen.</fluent-text>
    </fluent-card>
    <fluent-card>
      <fluent-heading level="3">KI-Integration</fluent-heading>
      <fluent-text>Intelligente Lösungen mit Azure OpenAI und AI Builder.</fluent-text>
    </fluent-card>
    <fluent-card>
      <fluent-heading level="3">Beratung & Schulung</fluent-heading>
      <fluent-text>Befähigung Ihrer Mitarbeiter.</fluent-text>
    </fluent-card>
  </div>
  <div style="margin-top: 20px; text-align: center;">
    <fluent-button appearance="primary" href="{{ '/leistungen/' | relative_url }}">Alle Leistungen entdecken</fluent-button>
  </div>
</div>

<div class="page-section">
  <fluent-heading level="2">KMUpower Suite</fluent-heading>
  <fluent-text>
    Unsere modulare Softwarelösung für die häufigsten Herausforderungen von KMUs:
  </fluent-text>
  <div class="card-grid" style="margin-top: 15px;">
    <fluent-card>
      <fluent-heading level="4" style="font-size: 1.1em;">KMU-DocManager</fluent-heading> <!-- Smaller heading for suite items -->
      <fluent-text size="small">Intelligente Dokumentenverwaltung.</fluent-text>
    </fluent-card>
    <fluent-card>
      <fluent-heading level="4" style="font-size: 1.1em;">KMU-ProcessFlow</fluent-heading>
      <fluent-text size="small">Prozessautomatisierung mit Vorlagen.</fluent-text>
    </fluent-card>
    <fluent-card>
      <fluent-heading level="4" style="font-size: 1.1em;">KMU-TimeTracker</fluent-heading>
      <fluent-text size="small">Effiziente Zeiterfassung.</fluent-text>
    </fluent-card>
    <fluent-card>
      <fluent-heading level="4" style="font-size: 1.1em;">KMU-DataInsight</fluent-heading>
      <fluent-text size="small">KI-gestützte Datenanalyse.</fluent-text>
    </fluent-card>
    <fluent-card>
      <fluent-heading level="4" style="font-size: 1.1em;">KMU-FormConnector</fluent-heading>
      <fluent-text size="small">Digitale Formularlösungen.</fluent-text>
    </fluent-card>
  </div>
  <div style="margin-top: 20px; text-align: center;">
    <fluent-button appearance="primary" href="{{ '/suite/' | relative_url }}">Suite kennenlernen</fluent-button>
  </div>
</div>

<div class="page-section">
  <fluent-heading level="2">Aktuelle Beiträge</fluent-heading>
  {% if site.posts.size > 0 %}
    <div class="card-grid">
      {% for post in site.posts limit:3 %}
        <fluent-card>
          <fluent-heading level="3"><fluent-anchor href="{{ post.url | relative_url }}">{{ post.title }}</fluent-anchor></fluent-heading>
          <fluent-text size="small" style="display: block; margin-bottom: 10px;">{{ post.date | date: "%d. %B %Y" }}</fluent-text>
          <fluent-text>
            {{ post.excerpt | strip_html | truncatewords: 20 }}
          </fluent-text>
          <div style="margin-top: 15px;">
            <fluent-button appearance="stealth" href="{{ post.url | relative_url }}">Weiterlesen</fluent-button>
          </div>
        </fluent-card>
      {% endfor %}
    </div>
    {% if site.posts.size > 3 %}
      <div style="text-align: center; margin-top: 20px;">
        <fluent-button appearance="neutral" href="{{ '/blog/' | relative_url }}">Alle Beiträge anzeigen</fluent-button>
      </div>
    {% endif %}
  {% else %}
    <fluent-text>Momentan gibt es keine aktuellen Beiträge.</fluent-text>
  {% endif %}
</div>
