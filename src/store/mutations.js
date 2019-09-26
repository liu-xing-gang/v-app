const mutations = {
    increment(state){
        state.count ++
    },
    decrement: state => state.count>0 && state.count--,
    asnyAdd: state => {
        state.number++;
    },
    changePassword: (state, payload) => {
        state.password = payload.password;
    },
    changeNickname: (state, payload) => {
        state.nickname = payload.nickname;
    }
}

export default mutations;