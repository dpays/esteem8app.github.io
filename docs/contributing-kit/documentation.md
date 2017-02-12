# Documentation
## Introduction

Esteem8 application use the polymer framework and is composed of web components.

## Main components
#### app-shell.html

Application starting point loaded from index.html.

It provide:
* Page router
* Local data (settings, favorites posts, favorites users, favorites tags)
* Theme colors

#### shared-styles.html

Shared css style across application's components.

## Components folder
#### /pages

All application pages component.

#### /api

Set of steem API components wrapper to get steem network data.

It use [SteemJS](https://github.com/adcpm/steem) project.

#### /components
Set of shared components across application used in /pages.

#### /dialogs
Set of dialog components across application used in /pages.

#### /scripts
set of scripts used by components.

## Single components
Single components documentation is include in itself in form of comments.
