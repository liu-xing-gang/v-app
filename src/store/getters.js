const getters = {
    getNum: state => {
        return state.count;
    },
    message: state => {
        return '用户名为：' + state.username;
    },
    msg: state => {
        return `昵称为：${state.nickname}`;
    }
}

export default getters;