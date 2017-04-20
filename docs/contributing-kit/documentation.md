# Documentation
## Introduction

Esteem8 application use the polymer framework and is composed of web components.

## Main components in "/src"
#### app-entry.html

Application starting point loaded from index.html.

It provide:
* Page router
* Local data (settings, favorites posts, favorites users, favorites tags, favorites files)
* Theme colors

#### shared-styles.html

Shared css style across application's components.

## Components folder
#### /src/pages

All application pages component.

#### /src/api

Set of steem API components wrapper to get steem network data.

It use [SteemJS](https://github.com/adcpm/steem) project.

#### /src/components
Set of shared components across application used in /pages.

#### /src/dialogs
Set of dialog components across application used in /pages.

#### /src/scripts
set of scripts used by components.

## Single components
Single components documentation is include in itself in form of comments.
