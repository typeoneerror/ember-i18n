// As of 4.3.0 using the ember-i18n instance initializer is no longer
// necessary.
//
// This is a no-op initializer to prevent applications that relied on the
// 'ember-i18n' instance initializer in their own workflow from breaking.
export default {
  name: 'ember-i18n',
  initialize() {
    console.log('ember-i18n has been deprecated in favor of ember-intl'); // eslint-disable-line no-console
  }
};
