---
layout: page
title: About
permalink: /about/
---

The [ACM (Association for Computing Machinery)](https://www.acm.org/)
is the world's oldest and largest
scientific and educational computing society. Since 1947 it has served members
now numbering over 80,000 worldwide. The [AITP (Association of Information
Technology Professionals)](https://www.aitp.org/) is a professional association
comprised of career
minded individuals who seek to expand their potential.

At [North Carolina State University](http://ncsu.edu), the student chapters of these two
organizations are combined and serve students as a
joint body, the NC State Student ACM/AITP. As an active part of the Computer Science
Department here at NC State, ACM/AITP provides opportunities throughout the year
for students to get involved in their department and learn about the exciting
job opportunities awaiting them in this growing field.

**Interested in joining?** Check out our [Calendar]({{site.url}}/calendar)
to see when and where we're having our next event!

# Events
We hold a number of events each semester including:

+ **[Tech Talks]({{site.baseurl}}/techtalks)** where professionals come to give a short presentation on
their company or a technology that they are passionate about. Previous
participants have included Microsoft, Intel and IBM.
Interested in giving a Tech Talk? Check out our [Contact]()
page for details!

+ **Workshops** which are similar to Tech Talks, but more interactive. Here,
students get the opportunity to learn a new technology from professionals
that use them everyday.

+ **Social Events** that strengthen the local computer science community.
These include Video Game Nights at Hunt Library, and hikes at Umstead Park.

+ **Year End Pig Pickin'** which is our annual barbecue event where we invite the whole
community and all of our sponsors over for good food! This is an annual
tradition of the NC State CSC department, and we'd love to have you be a part!

# Leadership Team
- President: Matt Dzwonczyk
- Vice President: Joshua Kayani
- General Officers:
    - Wade Moore
    - John Ravi
    - Caeman Toombs
    - Jack Kurtz
    - Bryant Delgado

# Sponsors
None of this possible without the help of our sponsors, a subset
of [NC State's Computer Science e-Partners](https://www.csc.ncsu.edu/corporate_relations/current-epartners.php).
Our sponsors are incredible companies that provide resources to
students and faculty to engage with industry, and our ACM/AITP chapter is
very grateful! We'd specifically like to thank the following sponsors:

<div id="sponsors">
{% for sponsor in site.data.sponsors %}
  {% if sponsor.link %}
    <a href="{{ sponsor.link }}" target="_blank" rel="noopener noreferrer">
        <img src="{{site.baseurl}}/assets/images/sponsors/{{ sponsor.image-name }}" alt="{{ sponsor.name }}" />
    </a>
  {% else %}
    <img src="{{site.baseurl}}/assets/images/sponsors/{{ sponsor.image-name }}" alt="{{ sponsor.name }}" />
  {% endif %}
{% endfor %}
</div>

# Becoming a Sponsor
Becoming a sponsor of ACM/AITP at NC State is a great way to get access to the
huge amount of Computer Science talent produced at NC State.
If your organization is interested in becoming an ePartner or sponsor of ACM/AITP at NC State, please take a look at the
[Becoming an ePartner](https://www.csc.ncsu.edu/corporate_relations/become-an-epartner.php) guide.

We really appreciate all of the support our sponsors provide, and would love to 
create a partnership with your organization and have you come on
campus for some of our events!