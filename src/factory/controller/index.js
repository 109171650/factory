'use strict';
import Base from './base.js';
import util from 'util';

export default class extends Base {

  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){

    this.assign("data", await this.model("system").getData());
    var data = await this.model("system").getData();
    // console.log(util.inspect(eval(data),true,null,true));
    this.display();
  }



}
