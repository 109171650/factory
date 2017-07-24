'use strict';
import Base from './base.js';
import util from 'util';
export default class extends Base {

  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){

    this.assign("tables", await this.model("database").showTableStatus());
    this.display();
  }
}
