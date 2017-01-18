# Organization model

## Introduction

This model represent the open source organization architecture used.

It is composed by two models described above.

## Top level model

Top level organization is semi-autonomous and described above.

* **Owners** [Owners]
 * They are themselves elected or chosen by admins, for now they are themselves elected.
 * Can take final descisions.
 * Can choose admins and members.

* **Admins** [Members that are team maintainer]
 * Can take descisions.
 * Can choose members.
 
* **Members** [Members that are not team maintainer]
 * Can take descisions.

* **Outside people** [Other github accounts]
 * Can purpose content or modifications.

## Low level model

Low level organization is autonomous and described above.

1. Users purpose features they want to have in steem.
* Outside developpers implement features purposed on steem they want to develop.
* Inside developpers choose outside developpers features they want to implement in project.
* Outside developpers are rewarded by posting they feature in Steem.

If an outside fork is greatly appreciate but not merged with the project, the fork can be separated in order to compose a new starting point.
