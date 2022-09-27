<template>
    <form @submit.prevent>
        <h3>Создание поста</h3>
        <my-input v-model="post.title" placeholder="Название" />
        <my-input v-model="post.body" placeholder="Описание" />
        <my-button @click="createPost" class="createBtn">Создать</my-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now()
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: ''
            }
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}

.createBtn {
    margin-top: 15px;
    align-self: flex-end;
}
</style>