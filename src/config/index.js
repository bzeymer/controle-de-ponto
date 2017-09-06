let envName = process.env.NODE_ENV;
if (!envName) {
    envName = 'development';
}
let envSpecific = require(`./env/${envName}`);
export default Object.assign({}, envSpecific.default)
