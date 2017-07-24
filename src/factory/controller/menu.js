'use strict';

import Base from './base.js';
import os from 'os';
import util from 'util';

export default class extends Base {

  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    var data = await this.model("menu").buildtree();
    this.assign("data", await this.model("menu").buildtree());
    this.display();
  }

}
