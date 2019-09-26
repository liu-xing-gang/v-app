<template>
  <div>
    <h1>{{study}}</h1>
 
    <button @click="addB">同步加1</button>
    <button @click="asnyAddB">异步加1</button>
 
    <p>countB：{{moduleB.countB}}</p>
    <p>nameB：{{moduleB.nameB}}</p>
 
    <p>{{msgB}}</p>
  </div>
</template>
 
<script>
 
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
 
export default {
  data () {
    return {
      study: 'vuex-module-study'
    };
  },
 
  computed: {
    ...mapState(['moduleB']),
    ...mapGetters(['msgB'])
  },
 
  methods: {
    ...mapMutations(['addB']),
    ...mapActions(['asnyAddB'])
  }
};

</script>