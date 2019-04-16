<template>
    <div class="hello">
        <cube-button @click="showDialog"></cube-button>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
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
            console.log(res.body);
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
