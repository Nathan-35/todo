<template>
    <div @click="hideDialog" class="dialog" v-if="show">
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-dialog',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideDialog() {
            this.$emit('update:show', false)
        }
    }
}
</script>

<style scoped>
.dialog {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    position: fixed;
}

.dialog__content {
    margin: auto;
    background: white;
    border-radius: 14px;
    min-width: 350px;
    min-height: 60px;
    padding: 20px;
}
</style>