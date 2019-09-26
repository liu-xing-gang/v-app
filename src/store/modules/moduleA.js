// 默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的
// 模块的状态默认注册在全局命名空间，为一个对象，对象中的属性是模块中的状态
const moduleA = {
    state: {
        countA: 1,
        name: 'moduleA'
    },

    // 模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象。
    getters: {
        // 这里的 state 对象是模块的局部状态
        msgA: state => {
            return `模块A的名称为：${state.nameA}`;
        },

        // 对于模块内部的 getter，根节点状态作为第三个参数（rootState）暴露出来
        msgTotal: (state, getters, rootState) => {
            return `根节点用户名为：${rootState.username}，模块A的名称为：${state.nameA}`;
        }
    },

    // 在模块的muatations中不能使用根节点状态，因为muatations中是同步更新状态
    mutations: {
        addA (state) {
            state.countA++;
        }
    },

    // 对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState
    actions: {
        asnyAddA (context) {
            context.commit('addA');
            console.log('局部状态countA为：' + context.state.countA);
            console.log(context.rootState); // 根节点状态是一个对象
            console.log('根节点状态count为：' + context.rootState.count);
        }
    }   
}

export default moduleA;