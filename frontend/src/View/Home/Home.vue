<script setup>
    import { onMounted, ref } from 'vue';

    const image = ref([])

    const getImage = async () => {
        const res = await fetch('http://localhost:3000/element-game')
        const json = await res.json()

        image.value = json.data
    }

    onMounted(() => {
        getImage()
    })
</script>

<template>
    <div class="bg-red-400 min-h-screen">
        <div v-for="img in image">
            <h3>{{ img.element_name }}</h3>
            <img :src="img.element_icon">
        </div>
    </div>
</template>