---
title: "Kontakt"
permalink: /kontakt/
layout: default
excerpt: "Nehmen Sie Kontakt zu uns auf – wir freuen uns auf Ihre Anfrage!"
---

<div class="page-section">
  <fluent-heading level="1">{{ page.title }}</fluent-heading>
  <fluent-text style="display:block; margin-bottom: 20px;">{{ page.excerpt }}</fluent-text>

  <fluent-card style="margin-bottom: 30px;">
    <fluent-heading level="2" style="margin-bottom: 15px;">Kontaktformular</fluent-heading>
    <form action="https://formspree.io/f/your-form-id" method="POST" style="display: flex; flex-direction: column; gap: 15px;">
      
      <fluent-text-field type="text" name="name" id="name" required>
        Name
        <span slot="start"><fluent-icon name="PersonRegular"></fluent-icon></span>
      </fluent-text-field>
      
      <fluent-text-field type="email" name="_replyto" id="email" required>
        E-Mail
        <span slot="start"><fluent-icon name="MailRegular"></fluent-icon></span>
      </fluent-text-field>
      
      <fluent-text-area name="message" id="message" required resize="both" style="height: 120px;">
        Nachricht
        <span slot="start"><fluent-icon name="ChatRegular"></fluent-icon></span>
      </fluent-text-area>
      
      <fluent-button type="submit" appearance="accent">Senden</fluent-button>
    </form>
  </fluent-card>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
    <fluent-card>
      <fluent-heading level="2">Adresse</fluent-heading>
      <fluent-text style="display:block; margin-top: 10px;">
        KMUpower GmbH<br>
        Musterstraße 123<br>
        8000 Zürich<br>
        Schweiz
      </fluent-text>
    </fluent-card>

    <fluent-card>
      <fluent-heading level="2">Social Media</fluent-heading>
      <fluent-text style="display:block; margin-top: 10px;">
        <fluent-anchor href="https://linkedin.com/company/kmupower" target="_blank" rel="noopener noreferrer">
          <fluent-icon name="LinkRegular" slot="start"></fluent-icon> KMUpower auf LinkedIn
        </fluent-anchor>
      </fluent-text>
    </fluent-card>
  </div>

</div>

<script type="module">
  // Ensure icons are available if you use them directly in HTML like above
  // This might not be necessary if the global provider script handles it,
  // but good to be aware of for custom icon usage.
  // import { provideFluentDesignSystem, fluentIcon } from "@fluentui/web-components";
  // provideFluentDesignSystem().register(fluentIcon());
</script>
