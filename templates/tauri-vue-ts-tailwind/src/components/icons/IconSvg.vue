<template>
    <inline-svg :src="`icons/${icon}.svg`" :class="iconClasses" :style="customStyles" />
</template>

<script setup lang="ts">
import InlineSvg from "vue-inline-svg";
import { computed, withDefaults } from "vue";

interface IProps {
    icon: string,
    customClasses?: string[],
    customStyles?: Object
}

const props = withDefaults(defineProps<IProps>(), {
    icon: "",
    customClasses: () => [],
});


const iconClasses = computed(() => {
    let classes: string[] = [];

    props.customClasses.forEach((customClass) => {
        classes.push(customClass)
    })

    return classes;
})
</script>
  