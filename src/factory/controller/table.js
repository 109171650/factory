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
    let database = 'cmswing';
    let table_name = this.get(table_name);
    let data =[];
    data['showFullFields'] = await this.model().query('SHOW FULL FIELDS FROM '+table_name['table_name']);
    data['list'] = await this.model(table_name['table_name'].substring(8)).select();
    data['showTableStatus'] = await this.model().query('show table status from '+database+' like '+"'"+table_name['table_name']+"'");
    this.assign("data",data);
    this.display();
  }
  /**
  * insert action
  *@return {Promise}
  **/
  async insertAction(){
    let database = 'cmswing';
    let table_name = this.get(table_name);
    let data =[];
    data['showFullFields'] = await this.model().query('SHOW FULL FIELDS FROM '+table_name['table_name']);
    data['list'] = await this.model(table_name['table_name'].substring(8)).select();
    data['showTableStatus'] = await this.model().query('show table status from '+database+' like '+"'"+table_name['table_name']+"'");
    data['htmlInput'] = await this.model('html_input').select();
    console.log(util.inspect(eval("("+data['showFullFields'][2]['Comment'].split('|')[1]+")"),true,null,true));
    this.assign("data",data);
    this.display();
  }
  /**
   * status action
   * @return {Promise} []
   */
  async statusAction(){
    let database = 'cmswing';
    let table_name = this.get(table_name);
    let data =[];
    data['showFullFields'] = await this.model().query('SHOW FULL FIELDS FROM '+table_name['table_name']);
    data['showTableStatus'] = await this.model().query('show table status from '+database+' like '+"'"+table_name['table_name']+"'");
    this.assign("data",data);
    this.display();
  }
}
