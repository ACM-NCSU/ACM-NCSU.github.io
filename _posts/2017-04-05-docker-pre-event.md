---
layout: post
title: Review Containerization and Docker
published: true
comments: true
categories: techtalk docker redhat lug
---

[![Docker workshop poster]({{ site.url }}/assets/images/docker-poster.png)]( {{ page.url }})
<!--more-->


A HUGE thank you to Vincent Batts for the amazing presentation, and worthy information!  
Also, a special thank-you to [LUG](https://lug.ncsu.edu) for helping to organize this event.  

Last Thursday, April 13th we had a great talk about Docker and containerization. Vincent Batts, a software developer at Red Hat described
how his experience working with OpenSource technologies provided him the skills to make a career in software.  Containerization is an
exciting technology that is becoming increasingly popular!  Containers abstract away the underlying hardware, in many of the same ways that
virtual machines do. However, while a virtual machine acts almost as a stand alone computing device, a container shares the kernel of the host.
This proves to have various advantages, including performance, but also poses obstacles that must be overcome.  


Docker is an implementation of this containerization technology that allows applications to be run within a pre-configured environment.
These environments are defined in an _image_ which can be instantiated as a _running container_.  Unlike virtual machines,
which can be very costly to computing resources, a multitude of containers can be instantiated on a single running host.

Thank you to everyone who helped and came to the event! Please post any questions, or items of discussion below!

![Red Hat Icon]({{ site.url }}/assets/images/red-hat.svg)
![LUG Icon]({{ site.url }}/assets/images/lug-icon.png)

![Docker Icon]({{ site.url }}/assets/images/docker-icon.png)
![LXC Icon]({{ site.url }}/assets/images/lxc-icon.png)
