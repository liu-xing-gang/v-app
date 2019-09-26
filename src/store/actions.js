const actions = {
    asnyAdd: context => {
        context.commit('asnyAdd');
    },
    changeNickname ({commit}, payload) {
        commit('changeNickname', payload);
    },
    decre: context => {
        context.commit('decrement')
    } 
}

export default actions;