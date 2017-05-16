import user from './userApi';
import data from './dataApi';
export default  {
    init: function (_vue) {
        this.user.init(_vue);
        this.data.init(_vue);
    },
    user,
    data
}