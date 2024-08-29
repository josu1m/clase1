<script setup lang="ts">
import {c1,c2, r} from '@/ts/pitagora'
</script>

<template>
<input type="number" v-model.number="c1">
<input type="number" v-model.number="c2">
<div>{{ r }}</div>
</template>