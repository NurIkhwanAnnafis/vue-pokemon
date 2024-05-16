import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('layout', () => {
  const loading = ref<boolean>(false);

  const setLoading = (flag: boolean) => loading.value = flag;

  return { loading, setLoading }
})
