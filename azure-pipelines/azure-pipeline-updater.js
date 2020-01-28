// azure-pipeline-updater.js

const regex = /semver:\s+(\d+\.\d+\.\d+$)/;

module.exports.readVersion = function (contents) {
    return regex.test(contents)[1];
};

module.exports.writeVersion = function (contents, version) {
    return contents.replace(regex, version);
};