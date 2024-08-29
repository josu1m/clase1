import { ref, computed } from 'vue';

const c1 = ref<number|null>(null);
const c2 = ref<number|null>(null);

const r = computed(() => {
    if (c1.value !== null && c2.value !== null) {
        return Math.sqrt(Math.pow(c1.value, 2) + Math.pow(c2.value, 2));
    }
    return 0;
})

export { r,c1,c2 }