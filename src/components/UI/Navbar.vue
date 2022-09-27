<template>
    <div class="navbar">
        <h3 @click="$router.push('/')" class="mainTitle">Vue 3</h3>
        <div class="navbar__btns">
            <my-button @click="$router.push('/posts')">Posts</my-button>
            <my-button @click="$router.push('/about')">About</my-button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: lightgray;
    height: 60px;
    padding: 0 15px;
}

.navbar__btns>*:not(:last-child) {
    margin-right: 7px;
}

.mainTitle {
    color: indigo;
}
</style>