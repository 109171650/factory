'use strict';
/**
 * model
 */
export default class extends think.model.base {

    async showFullFields(table_name){
      return await this.query('SHOW FULL FIELDS FROM '+table_name);
    }

    async showTableStatus(){
      return await this.query('SHOW TABLE STATUS');
    }

    async stowCreateTables(table_name){
      // return await this.query('SHOW CREATE TABLES '+table_name);
      return await this.query('show processlist');
    }

}
