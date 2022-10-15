<template>
    <div>
        <h2 class="pageH2">Страница с постами</h2>
        <my-input placeholder="Поиск" v-model="searchQuery" />
        <div class="app__btns">
            <my-button @click="showDialog">Создать пост</my-button>
            <my-select :options="sortOptions" v-model="selectedSort" />
        </div>
        <transition name="dialog-anim">
            <my-dialog v-model:show="dialogVisible">
                <post-form @create="createPost" />
            </my-dialog>
        </transition>
        <post-list @remove="removePost" :posts="sortedAndSearchQuery" v-if="!isLoadingPosts" />
        <h3 v-else class="loading">Идёт загрузка...</h3>
    </div>
</template>
  
<script>
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';
import axios from 'axios'

export default {
    components: { PostList, PostForm },
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isLoadingPosts: false,
            searchQuery: '',
            selectedSort: '',
            sortOptions: [
                { value: 'title', name: 'По названию' },
                { value: 'body', name: 'По содержимому' }
            ]
        }
    },
    methods: {
        createPost(post) {
            post.title.trim() && post.body.trim() ? this.posts.push(post) : ''
            this.dialogVisible = false
            this.saveToLocalStorage()
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showDialog() {
            this.dialogVisible = true
        },
        saveToLocalStorage() {
            localStorage.setItem('posts', JSON.stringify(this.posts))
        },
        getNotes() {
            this.posts = JSON.parse(localStorage.getItem('posts')) || []
        },
        async fetchPosts() {
            try {
                this.isLoadingPosts = true
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=2')
                this.posts.slice = response.data
            } catch (err) {
                console.log(err)
            } finally {
                this.isLoadingPosts = false
            }
        }
    },
    mounted() {
        this.getNotes()
        this.fetchPosts()
    },
    watch: {
        posts(newPosts) {
            localStorage.setItem('posts', JSON.stringify(newPosts))
        }
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
        },
        sortedAndSearchQuery() {
            return this.sortedPosts.filter(post => post.title.includes(this.searchQuery) || post.body.includes(this.searchQuery))
        }
    }
}
</script>
  
<style scoped>
.app__btns {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
}

.pageH2 {
    color: indigo;
}

.loading {
    color: gray;
}

.dialog-anim-item {
    display: inline-block;
}

.dialog-anim-leave-active {
    transition: all 0.4s ease;
}

.dialog-anim-leave-to {
    opacity: 0;
    transform: scale(1.025);
}
</style>
