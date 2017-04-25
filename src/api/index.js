/**
 * API 资源
 * http://www.cnblogs.com/axl234/p/5899137.html
 * get: {method: 'GET'},
 * save: {method: 'POST'},
 * query: {method: 'GET'},
 * update: {method: 'PUT'},
 * remove: {method: 'DELETE'},
 * delete: {method: 'DELETE'}
 */

import { ValuesResource } from './resources'

export default {
    getAllValues() {
        return ValuesResource.get();
    },
    getValueById(id) {
        return ValuesResource.get({ id: id });
    },
    saveValue(data) {
        return ValuesResource.save(data);
    },
    updateValue(id, data) {
        return ValuesResource.update({ id: id }, data);
    },
    deleteValue(id) {
        return ValuesResource.remove({ id: id });
    }
}