// solution-updater.js</Version>

const regex = /<Version>(\d+\.\d+\.\d+)<\/Version>/;

module.exports.readVersion = function (contents) {
    return contents.match(regex)[1];
};

module.exports.writeVersion = function (contents, version) {
    return contents.replace(regex, `<Version>${version}</Version>`);
};