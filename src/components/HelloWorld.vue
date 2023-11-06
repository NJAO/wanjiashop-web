<script setup lang="ts">
import Preview from './Preview.vue';
defineProps<{ msg: string }>();
const emit = defineEmits<{ change: [id: number, name: string] }>();
const count = ref(0);
const change = () => {
  emit("change", 3, "supJoan")
}

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <a-button @click="count++">count is {{ count }}</a-button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
    <a-button @click="change">change</a-button>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <Suspense>
    <Preview />
  </Suspense>
</template>

<style lang="scss" scoped>
.read-the-docs {
  color: $font;
}
</style>
