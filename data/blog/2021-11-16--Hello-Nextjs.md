---
title: Goodbye Gatsby, Hello NextJS
date: '2021-11-16'
tags: ['NextJS', 'Tailwind']
draft: false
summary: I've decided to move from Gatsby Lumen blog to a different starter project based on NextJS.
---

In 2019 I've created this blog based on the [gatsby-starter-lumen](https://github.com/alxshelepenok/gatsby-starter-lumen) project by Alexander Shelepenok.

As I hadn't much experience in Gatsby and the company I work for built a huge NextJS project I've decided to switch to the [tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) from Timothy Lin.

Hopefully I can use my exprience from the mentioned project to customize the blog in order to fit my purposes and vice versa gain more exprience to use at work.

Additionally the blog posts will be written in English to get additional range. I took the trouble to translate all the old posts into English.

The blog is built and hosted via [Vercel](https://vercel.com/) now, so the blog post from 2020-03-27 [Blog infastructure with Terraform](../blog/2020-03-27--Iac-with-Terraform) is outdated.

You can see that the Build-Pipeline, the S3-Bucket and the CloudFront distribution have been removed, but the custom domain and the certificate are still managed by AWS.

| Old Infrastructure                                                                            | New Infrastructure                                                                               |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| ![infrastructure-before](/static/blog/2020-03-27-blog-infrastucture.png 'Old infrastructure') | ![infrastructure-after](/static/blog/2021-11-16-blog-infrastucture_new.png 'New infrastructure') |
