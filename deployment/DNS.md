---
layout: blog-post
title: Knowledge of DNS
tags:
  - DNS
date: 2020-08-17
description: 
---

### A record (address)
A record is used for mapping domain to IP. It is also known as alias  

### CNAME (Canonical Name)
it map alias of Domain name to Domain.
it use to provide www and mail service.
e.g.
```
A record: host.domian.com
we can set two CNAMEs for it 
www.host.domian.com
mail.host.domian.com
```
### NS record (Name server)
it is used to decide which DNS server is used for resolve 
```
ns1.domain.com、
ns2.domain.com
```
### MX (mail )
In simple DNS terms, an MX record is used to tell the world which mail servers accept incoming mail for your domain and where emails sent to your domain should be routed to. If your MX records are not pointed to the correct location, you will not receive email.