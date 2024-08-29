<script setup lang="ts">
import { count, increment, decrement } from '@/ts/count'
</script>

<template>
  <h2>INCRMENTAR</h2>

  <button @click="increment">Incrementar</button>

  <p>{{ count }}</p>
</template>