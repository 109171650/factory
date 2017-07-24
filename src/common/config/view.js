'use strict';
/**
 * template config
 */
export default {
  type: 'ejs',
  content_type: 'text/html',
  file_ext: '.html',
  file_depr: '_',
  // root_path: think.ROOT_PATH + '/view',
  root_path: '',
  layout:true,
  adapter: {
    ejs: {}
  }
};
