export default {
    /**
     * 删除数据中符合条件的元素
     * @param {array} ary 源数组
     * @param {function} filter 过滤条件
     */
    deleteItem(ary, filter) {
        if (ary == null || ary.length <= 0) {
            return;
        }
        for (var i = ary.length - 1; i > 0; i--) {
            var item = ary[i];
            if (filter(item)) {
                ary.splice(i, 1);
            }
        }
    }
}