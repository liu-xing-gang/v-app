<template>
    <div>
        <h1>{{study}}</h1>
 
        <button @click="addA">同步加1</button>
        <button @click="asnyAddA">异步加1</button>
    
        <p>countA：{{moduleA.countA}}</p>
        <p>nameA：{{moduleA.nameA}}</p>
    
        <p>{{msgA}}</p>
        <p>{{msgTotal}}</p>
    </div>
</template>

<script lang="ts">
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
export default({
    data () {
        return {
        study: 'vuex-module-study'
        };
    },
 
    computed: {
        ...mapState(['moduleA']),
        ...mapGetters(['msgA', 'msgTotal'])
    },
 
    methods: {
        ...mapMutations(['addA']),
        ...mapActions(['asnyAddA'])
    },
  
    mounted () {
        console.log(this.$store.state.moduleA); // 是一个对象
        console.log('moduleA.countA：' + this.$store.state.moduleA.countA);
        console.log(this.$store.getters.msgA);
        console.log(this.$store.getters.msgTotal);
    }
})
</script>>