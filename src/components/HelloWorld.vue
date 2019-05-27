<template>
    <div class="hello">
        <cube-button @click="showDialog"></cube-button>
        <ul>
            <li v-for="(item, index) in arr" :key="index">{{typeof item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            arr: []
        };
    },
    props: {
        msg: String
    },
    methods: {
        showDialog() {
            this.$createDialog({
                type: "alert",
                title: "Alert",
                content: "dialog content"
            }).show();
        }
    },
    mounted() {
        /* eslint-disable */
        this.$http.get("/api/test").then(res => {
            this.$set(this, "arr", res.body);
            console.log(this.arr);
        });
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
