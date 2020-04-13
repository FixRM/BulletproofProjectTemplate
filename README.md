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

## Developing Plugins and Custom workflow activities
This project use [spkl](https://github.com/scottdurow/SparkleXrm/wiki/spkl) to develop plugins. Never use Plugin Registration tool to deploy plugins or steps. Instead of this, decorate plugin types with `CrmPluginRegistration` attribute and use `deploy-plugins.bat` or `deploy-workflows.bat` scripts.

>**Don't forget to add newly registered plugin or step to CDS solution**

>**Don't forget to unpack CDS solution to keep plugin configuration in sync with customizations**

Each plugin use case must be covered with Unit test. Use [FakeXrmEasy](https://dynamicsvalue.com/home) to mock CDS related calls.

Use `.runsettings` to configure [Code Coverage](https://docs.microsoft.com/en-us/visualstudio/test/configure-unit-tests-by-using-a-dot-runsettings-file?view=vs-2019#specify-a-run-settings-file). Always check if you test all code paths.

## Early Bound  types
Use `earlybound.bat` script to generate early bound classes. EB configuration should be stored with generated code.

## Release

To start a release run `npm run release`
