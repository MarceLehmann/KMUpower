---
layout: archive
title: "Tags"
permalink: /tags/
author_profile: true
---

{% for tag in site.tags %}
  <h3 class="archive__subtitle">{{ tag[0] }}</h3>
  {% for post in tag[1] %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}
