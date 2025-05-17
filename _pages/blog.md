---
layout: default
title: "Blog"
permalink: /blog/
excerpt: "Aktuelle Beiträge und Neuigkeiten von KMUpower."
---

<div class="page-section">
  <fluent-heading level="1">{{ page.title }}</fluent-heading>
  <fluent-text style="display:block; margin-bottom: 20px;">{{ page.excerpt }}</fluent-text>

  {% if site.posts.size > 0 %}
    <div class="card-grid">
      {% for post in site.posts %}
        <fluent-card>
          <fluent-heading level="2"><fluent-anchor href="{{ post.url | relative_url }}">{{ post.title }}</fluent-anchor></fluent-heading>
          <fluent-text size="small" style="display: block; margin-bottom: 10px;">{{ post.date | date: "%d. %B %Y" }}</fluent-text>
          <fluent-text>
            {{ post.excerpt | strip_html | truncatewords: 30 }}
          </fluent-text>
          <div style="margin-top: 15px;">
            <fluent-button appearance="stealth" href="{{ post.url | relative_url }}">Weiterlesen</fluent-button>
          </div>
        </fluent-card>
      {% endfor %}
    </div>
  {% else %}
    <fluent-text>Momentan gibt es keine Blogbeiträge.</fluent-text>
  {% endif %}
</div>
