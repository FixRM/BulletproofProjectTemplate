const devops = require("azure-pipelines-task-lib");
const pack = require("../package.json");

const version = pack.version;
//print package version
console.log(`package version ${version}`);

//set variable
devops.setVariable("SemVer", version);

//try to change build number
devops.updateBuildNumber(`${version}$(Rev:rr)`);