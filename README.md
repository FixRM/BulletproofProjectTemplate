# Bulletproof D365/Power Apps Project Template

This is demo repository for a [blog series](https://fixrm.wordpress.com/2020/01/20/bulletproof-project-template-part-1-intro) focusing on my personal experience of setting up good DevOps practice for D365/Power Apps project.

## Solution level setup

1. Install latest LTS version of [Node.js](https://nodejs.org/en/)
1. Open solution folder in terminal and run `npm install`

## Committing changes

This project is following [Conversational Commits](https://www.conventionalcommits.org/en/v1.0.0) and [Semantic Versioning](https://semver.org) conventions. Please make sure you are familiar with them.

To make a commit run `npm run git-cz` or manually type commit message in suitable format.

## Customization as Code
This project use "Customization as Code" approach for developing CDS solutions. Project named "Solutions" is used to store customization files.

Any customization changes you made should be exported to the repo. Create a PR to merge this changes to mainline as usual. 

To export solution from CDS, open "spkl" folder in terminal and run `unpack.bat` and follow instructions. To import customizations to CDS run `pack+import.bat`.

Always take and publish last changes to development environment before starting new feature branch.

## Release

To start a release run `npm run release`
