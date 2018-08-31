---
layout: page
title: Tech Talks
permalink: /techtalks/
---

# About Our Tech Talks
Our Tech Talks are for any students who have an interest in technology and would
like to learn about up and coming technologies that aren't typically taught in 
the classroom.

We bring in [ePartners](https://www.csc.ncsu.edu/corporate_relations/become-an-epartner.php) 
and club sponsors to come in and talk about a new technology, generally one they're 
using at their company, for about one to one and a half hours.

You can bring yourself, a few friends, and some questions you may have for the 
speaker and enjoy food and refreshments during the talk.

# Interested in giving a Tech Talk?
If you're interested in giving a Tech Talk on campus, check out more information 
on our [contact page]({{site.url}}/contact).

<div class="home">
  <h1>Recent and Upcoming Tech Talks</h1>
  <p>Browse the each Tech Talk for more information on the event, and the
    presenter.  Under each Tech Talk you can participate in a discussion among
    other students, and the Officers of ACM/AITP.</p>

  {% for post in site.posts %}
    {% if post.categories contains 'techtalk' %}
    <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
    <h2>
      <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
    </h2>
    <p>
      {{ post.excerpt }}
    </p>
    {% endif %}
  {% endfor %}
</div>
