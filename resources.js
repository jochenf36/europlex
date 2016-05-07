var contentful = require('contentful');
var client = contentful.createClient({
  accessToken: 'be380d58089d8354d6f44505b0663c1684b21ef39e857764c6d99a1fcd88106e',
  space: 'oi4b7qexgsgx',
});

module.exports = {
  getEntry: function getEntry(id) {
    return client.getEntry(id);
  },
  getEntries: function getEntries(param) {
    return client.getEntries(param);
  },
};
