<template>
    <div>
        <book-management-item :bookManageItem="books"></book-management-item>
    </div>
</template>
<script>
    import BookManagementItem from './BookManagementItem.vue'
    export default {
        name: 'BookManagementList',
        components: {
            BookManagementItem
        },
        props: ["books"],
        data() {
            return {
            }
        },
        methods: {
        },
        created() {
        },
        computed: {
        },
    }
</script>
<style>

</style>