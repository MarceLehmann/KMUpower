---
layout: archive
title: "Kategorien"
permalink: /categories/
author_profile: true
---

{% for category in site.categories %}
  <h3 class="archive__subtitle">{{ category[0] }}</h3>
  {% for post in category[1] %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}
