/* eslint-env node */
'use strict';
var Funnel = require('broccoli-funnel');
var VersionChecker = require('ember-cli-version-checker');

module.exports = {
  name: 'ember-i18n',
  isLocalizationFramework: true,

  init() {
    this._super.init && this._super.init.apply(this, arguments);

    var checker = new VersionChecker(this);
    var dep = checker.forEmber();
    this.hasEmberHelper = !dep.lt('1.13.0');
    console.log('ember-i18n has been deprecated in favor of ember-intl'); // eslint-disable-line no-console
  },

  treeFor(name) {
    var result = this._super.treeFor.apply(this, arguments);

    if (this.hasEmberHelper) {
      result = exclude(result, [
        'initializers/ember-i18n-legacy-helper.js',
        'modules/ember-i18n/legacy/helper.js',
        'modules/ember-i18n/legacy/initializer.js',
        'modules/ember-i18n/legacy/stream.js'
      ]);
    } else {
      result = exclude(result, [
        'helpers/t.js',
        'modules/ember-i18n/helper.js'
      ]);
    }

    return result;
  }
};

function exclude(tree, files) {
  return new Funnel(tree, {
    exclude: files
  });
}
