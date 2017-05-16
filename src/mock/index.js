import Mock from 'mockjs';
import {datasource} from './datasource.js';

let data = [].concat(datasource);

data.forEach(function(res){
    Mock.mock(res.path, res.data);
});

export default Mock;