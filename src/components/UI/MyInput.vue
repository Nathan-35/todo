<template>
    <input @input="updateInput" :value="modelValue" class="input" type="text">
</template>

<script>
export default {
    name: 'my-input',
    props: {
        modelValue: {
            type: [String, Number]
        }
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>
.input {
    margin-top: 15px;
    padding: 10px 15px;
}
</style>