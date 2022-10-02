<template>
    <nav data-tauri-drag-region class="w-full bg-black flex h-6 items-center">
        <div class="text-white ml-3">
            Tauri App
        </div>
        <div class="text-white ml-auto flex">
            <button @click="appWindow.minimize();" class="hover:bg-gray-700" :class="divStyles">
                <icon-svg icon="minimize" />
            </button>
            <button @click="appWindow.toggleMaximize();" class="hover:bg-gray-700" :class="divStyles">
                <icon-svg icon="expand" />
            </button>
            <button @click="appWindow.close();" class="hover:bg-red-500" :class="divStyles">
                <icon-svg icon="close" />
            </button>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { appWindow } from '@tauri-apps/api/window'

const divStyles = ['w-8', 'h3', 'justify-center', 'items-center', 'flex', 'h-6']

</script>