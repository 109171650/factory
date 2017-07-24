'use strict';

export default class extends think.controller.base {
  /**
   * some base method in here
   */
   init(http) {
       super.init(http);
   }

   async __before() {
      let database = 'cmswing';
      this.assign("app_root_path",'/factory/');
   }
}
