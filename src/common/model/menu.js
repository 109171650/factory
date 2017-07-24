'use strict';
/**
 * model
 */
export default class extends think.model.base {

    async buildtree(){
      let data = [];
      data['showfullcolumns'] = await this.query('SHOW FULL FIELDS FROM cmswing_menu');

      data['menu'] = await this.where('pid=0').order('sort asc').select();
      for( var i=0, len1=data['menu'].length; i<len1; i++ ){
          data['menu'][i]['level_2'] = await this.where('pid='+data['menu'][i]['id']).order('sort asc').select();
              for( var k=0,len2=data['menu'][i]['level_2'].length; k<len2; k++ ){
                 data['menu'][i]['level_2'][k]['level_3'] = await this.where('pid='+data['menu'][i]['level_2'][k]['id']).order('sort asc').select();
              }
      }
      return data;
    }
}
