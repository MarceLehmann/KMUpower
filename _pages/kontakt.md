---
permalink: /kontakt/
title: "Kontakt – KMUpower Schweiz"
layout: single
header:
  overlay_color: "#38c9c3"
  overlay_filter: "0.6"
  overlay_image: "{{ site.baseurl }}/assets/images/contact-header.jpg"
  overlay_alt: "Kontaktseite Headerbild: Büro-Szene mit Telefon und Notizblock"
sidebar:
  nav: "main"
seo:
  title: "Kontakt – KMUpower: Beratung, Digitalisierung, Webentwicklung"
  description: "Kontaktieren Sie KMUpower für ein kostenloses Beratungsgespräch zu Digitalisierung, Webentwicklung und Automatisierung für KMU. Jetzt Kontakt aufnehmen!"
  keywords: [KMUpower, Kontakt, Beratung, Digitalisierung, Webentwicklung, Automatisierung, Schweiz]
---

# Kontaktieren Sie uns

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "KMUpower GmbH",
  "url": "https://kmupower.ch{{ site.baseurl }}/kontakt/",
  "logo": "{{ site.baseurl }}/assets/images/logo.png",
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+41411234567",
    "contactType": "customer service",
    "email": "info@kmupower.ch"
  }],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Musterstrasse 123",
    "addressLocality": "Zürich",
    "postalCode": "8000",
    "addressCountry": "CH"
  }
}
</script>

<div class="contact-info">
  <h3>Direkter Kontakt</h3>
  <p><strong>Telefon:</strong> <a href="tel:+41411234567" rel="noopener noreferrer">+41 41 123 45 67</a><br>
  <strong>E-Mail:</strong> <a href="mailto:info@kmupower.ch" rel="noopener noreferrer">info@kmupower.ch</a><br>
  <strong>WhatsApp:</strong> <a href="https://wa.me/41411234567" rel="noopener noreferrer">+41 41 123 45 67</a></p>
  <p><strong>Bürozeiten:</strong><br>
  Mo–Fr: 08:00–18:00 Uhr<br>
  Sa: 09:00–14:00 Uhr</p>
</div>

[Leistungen]({{ site.baseurl }}/leistungen/) | [Über uns]({{ site.baseurl }}/ueber-uns/) | [Webentwicklung]({{ site.baseurl }}/webentwicklung/)

## Unser Standort

**KMUpower GmbH**<br>
Musterstrasse 123<br>
8000 Zürich<br>
Schweiz

## Schnelle Anfrage

Für eine schnelle Rückmeldung nutzen Sie bitte unser Kontaktformular oder senden Sie eine E-Mail an <a href="mailto:info@kmupower.ch" rel="noopener noreferrer">info@kmupower.ch</a>.

<form name="kontakt" id="kontaktformular" method="POST" action="https://formspree.io/f/your-form-id" class="form--kontakt" aria-label="Kontaktformular" style="max-width:500px; margin:2em auto;">
  <label for="name">Name* <span class="sr-only">(Pflichtfeld)</span></label><br>
  <input type="text" id="name" name="name" required aria-required="true" aria-label="Name" class="form-control" />
  <label for="email">E-Mail* <span class="sr-only">(Pflichtfeld)</span></label><br>
  <input type="email" id="email" name="email" required aria-required="true" aria-label="E-Mail" class="form-control" />
  <label for="telefon">Telefon</label><br>
  <input type="text" id="telefon" name="telefon" aria-label="Telefon" class="form-control" />
  <label for="unternehmen">Unternehmen</label><br>
  <input type="text" id="unternehmen" name="unternehmen" aria-label="Unternehmen" class="form-control" />
  <label for="nachricht">Nachricht* <span class="sr-only">(Pflichtfeld)</span></label><br>
  <textarea id="nachricht" name="nachricht" rows="5" required aria-required="true" aria-label="Nachricht" class="form-control"></textarea>
  <div style="margin:1em 0; font-size:0.95em;">
    <input type="checkbox" id="datenschutz" name="datenschutz" required aria-required="true" />
    <label for="datenschutz">Ich akzeptiere die <a href="{{ site.baseurl }}/datenschutz/" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a>*</label>
  </div>
  <button type="submit" class="btn btn--primary btn--large">Absenden</button>
  <div class="form-success-message" style="display:none; color: #38c9c3; margin-top:1em;">Vielen Dank für Ihre Nachricht! Wir melden uns schnellstmöglich.</div>
</form>

<script>
// Zeige nach Absenden eine Bestätigung (nur für Formspree, JS-Fallback)
document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('kontaktformular');
  if(form) {
    form.addEventListener('submit', function(e) {
      setTimeout(function() {
        var msg = form.querySelector('.form-success-message');
        if(msg) msg.style.display = 'block';
      }, 1000);
    });
  }
});
</script>

## Häufige Fragen (FAQ)

<details>
  <summary><strong>Wie lange dauert ein typisches Projekt?</strong></summary>
  Die Projektdauer hängt vom Umfang ab. Einfache Websites sind oft in 2–4 Wochen fertig, komplexere Anwendungen können 2–6 Monate dauern.
</details>
<details>
  <summary><strong>Bieten Sie auch Support nach Projektabschluss?</strong></summary>
  Ja, wir bieten verschiedene Support-Pakete an, von grundlegender Wartung bis hin zu umfassender Betreuung.
</details>
<details>
  <summary><strong>Arbeiten Sie nur mit Schweizer Unternehmen?</strong></summary>
  Hauptsächlich ja, aber wir unterstützen auch deutschsprachige KMU in Deutschland und Österreich.
</details>
<details>
  <summary><strong>Ist die Erstberatung kostenlos?</strong></summary>
  Ja, das erste Beratungsgespräch (bis 60 Minuten) ist für Sie kostenfrei.
</details>

---

<div class="cta-section" style="margin-top:3em;">
  <h2>Bereit für Ihr Digitalprojekt?</h2>
  <p>Vereinbaren Sie jetzt ein <strong>kostenloses Beratungsgespräch</strong> mit unseren Experten.</p>
  <a href="#kontaktformular" class="btn btn--primary btn--large">Jetzt Termin vereinbaren</a>
</div>

*Wir antworten in der Regel innerhalb von 24 Stunden auf Ihre Anfrage.*
