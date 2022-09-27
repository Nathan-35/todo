<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style scoped>
.btn {
    border: 1px solid indigo;
    border-radius: 3px;
    background: none;
    color: indigo;
    padding: 10px 15px;
}
</style>