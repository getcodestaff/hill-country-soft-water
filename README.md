# Gatsby Service Starter
#### based on a website for Carruth Home Solutions (chs-v2)
Jan 26, 2023

The current state of this project will necessitate a significant amount work if it is to be generic. This work can be done piecemeal.

<ul>
<li>extract hard coded values into configuration files (probably markdown).
<li>genericize hard coded filenames (instead of windows.js, doors.js, etc. they should be named service1, service2, etc.)
<li>the creation of service area pages from CSV (or other source).
</ul>

As I work on the above list, I'll try to be thorough in the namiming of commits to that git log --oneline will clearly show what has been done.

## Installation

```
gatsby new <new projet name> git@github.com:witcradg/gatsby-service-starter.git

cd <new project name>
npm install --legacy-peer-deps

```
[Ideally it would be good to figure out how to remove the need for --legacy-peer deps]

## Additional Steps

use npm-check-updates to update the package.json

```
ncu [default behavior will show prospective changes]
ncu -u [use this to actually change package.json]
npm install --legacy-peer-deps
```

#### Install tailwindcss with `https://tailwindcss.com/docs/guides/gatsby`

#### install react-icons and rsuite
```
npm install react-icons rsuite
```

npm install react-icons and rsuite setup repository. setup host

#### Replace siteMetadata values in gatsby-config.js with client specific values

```
  siteMetadata: {
    title: `Gatsby Service Starter | A template for service oriented business websites`,
    description: `A quick start on creating service oriented websites`,
    siteUrl: "https://www.witcraft.io",
    author: `@witcradg`,
  },
```    

============= 

## History
### The following work was completed as part of the original chs-v2 website
#### These steps are already included as part of the gatsby-service-starter
#### Do not do these steps    

Jan 11, 2023

<ul>
<li>Install with `gatsby new`
<li>Remove all defaults from index.js, images, extra pages, etc.
<li>Install tailwindcss with `https://tailwindcss.com/docs/guides/gatsby`
<li>npm install react-icons and rsuite and gatsby-transformer-remark
<li>Install fonts (e.g. Montserrat)
<li>Set up custom colors
<li>Setup Seo by copying the component
<li>Setup index page with Head and Seo
<li>Copy and setup Layout commenting out as needed (e.g. Header)
<li>Add (copy) Header and style as needed.
<li>Add Hero section (may be useful for delineating the Header if header background is white)
<li>Install fonts (e.g. Montserrat)
<li>Set up custom colors
<ul>

Here's a stab at a generic local-seo workflow of tasks 

Task 1 with subtasks

Setup new project. 
<ul>
<li>Install with `gatsby new`
<li>Remove all defaults from index.js, images, extra pages, etc.
<li>Install tailwindcss with `https://tailwindcss.com/docs/guides/gatsby`
<li>npm install react-icons and rsuite
<li>setup repository.
<li>setup host
</ul>

Setup Layout, Header, Footer with default template values (1 task)
    copy all three components from template source code and setup with configured default values (e.g. markdown or json files)

Build out Layout, Header, Footer with client details 
    Design must be approved first.
    Images must be available before this can be finished.

Setup Homepage Tasks
    highly specific based on design, but we could do a task list based on Steve's design.

Set up templated pages (about, contact, faq, etc.)
    These pages can easily be copied and client specific details copied in place.

Set up client back pages
    for CHS these are the services pages. We could set up a template for these, but it might be overkill.

