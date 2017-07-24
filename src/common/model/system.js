'use strict';
import os from 'os';
import util from 'util';
/**
 * model
 */
export default class extends think.model.base {

  async getData(){
    let node = process.versions;
    let mysqlv=await this.model('mysql').query("select version()");
    // let tables = await this.query('SHOW TABLE STATUS');
    // console.log(util.inspect(tables,true,null,true));
    var data=[];
     data['system']= {
        'cpu':os.arch(),
        '物理内存':Math.floor( os.totalmem()/1000/1000)+'M',
        '可用内存':Math.floor( os.freemem()/1000/1000)+'M',
        '架构':os.arch(),
        '平台':os.platform(),
        '系统类型':os.type(),
        '操作系统':os.release(),
        'MYSQL':mysqlv[0]['version()'],
        'nodejs':node.node,
        '连续运行时间':Math.floor(os.uptime()/60)+'分钟',
        '系统缓存目录':os.tmpdir(),
        'ThinkJS':think.version,
    }
    data['processmemoryUsage']=process.memoryUsage();
    return data;
  }
}
