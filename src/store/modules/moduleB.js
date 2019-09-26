const moduleB = {
 
    state: {
      countB: 1,
      nameB: 'moduleB'
    },
   
    getters: {
      msgB: state => {
        return `模块B的名称为：${state.nameB}`;
      }
    },
   
    mutations: {
      addB (state) {
        state.countB++;
      }
    },
   
    actions: {
      asnyAddB ({ state, commit, rootState }) {
        commit('addB');
        console.log('局部状态countB为：' + state.countB);
        console.log('根节点状态count为：' + rootState.count);
      }
    }
  };
   
  export default moduleB;
