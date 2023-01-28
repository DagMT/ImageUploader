<template>
    <div class="dark:bg-slate-900">
        <p class="text-lg text-green-300">
            PyrexPics
        </p>
        <div>
            <button @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
                <span v-if="$colorMode.value == 'light'">
                    Dark
                </span>
                <span v-else class="dark:text-white">
                    Light
                </span>
            </button>
        </div>

        <div class="dark:bg-slate-900 dark:text-green-500">
            <p>DarkMode</p>
        </div>
        <slot />
    </div>
</template>

<script setup>
const setColorTheme = (newTheme) => {
    useColorMode().preference = newTheme
}
</script>

<style >

</style>