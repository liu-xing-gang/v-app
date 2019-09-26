<template>
    <div class="hello">
        <!-- <cube-button @click="showDialog"></cube-button>
        <ul>
            <li v-for="(item, index) in arr" :key="index">{{typeof item}}</li>
        </ul> -->
        <h1>{{study}}</h1>
 
        <button @click="increment">同步加1</button>
        <button @click="asnyAdd">异步加1</button>
    
        <button @click="changePassword({password: 123456})">同步修改密码</button>
        <button @click="changeNickname({nickname: 'sleepwalker'})">异步修改昵称</button>
    
        <p>count：{{count}}</p>
        <p>number：{{number}}</p>
        <p>username：{{username}}</p>
        <p>nickname：{{nickname}}</p>
        <p>password：{{password}}</p>
    
        <p>{{message}}</p>
        <p>{{msg}}</p>

        <div>
            <p>{{ count }}</p>
            <p>
                <button @click="increment">+</button>
                <button @click="decre">-</button>
            </p>
        </div>
    </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
export default {
    name: "HelloWorld",
    data() {
        return {
            // arr: [],
            study: 'vuex'
        };
    },
    computed: {
        ...mapState(['count', 'number', 'username', 'nickname', 'password']),
        ...mapGetters(['message', 'msg'])
    },
    methods: {
        // showDialog() {
        //     this.$createDialog({
        //         type: "alert",
        //         title: "Alert",
        //         content: "dialog content"
        //     }).show();
        // }
        ...mapMutations(['increment', 'changePassword']),
        ...mapActions(['asnyAdd', 'changeNickname', 'decre'])
    },
    mounted() {
        /* eslint-disable */
        // this.$http.get("/api/test").then(res => {
        //     this.$set(this, "arr", res.body);
        //     console.log(this.arr);
        // });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
