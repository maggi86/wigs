<template>
    <ul>
        <div v-if="wigs">
        <li v-for="wig in wigs" :key="wig">
            <p>{{wig.name}} R{{wig.price}}</p>
        </li>
        </div>
        <div v-else>
            Loading...
        </div>
    </ul>
</template>
<script>

export default {
    mounted(){
        this.$store.dispatch('fetchAllWigs')
    },
    computed: {
        wigs(){
            return this.$store.state.wigs
        }
    }
}
</script>
