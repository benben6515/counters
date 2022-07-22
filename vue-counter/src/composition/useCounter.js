import { ref } from 'vue'

// global
const globalCount = ref(0)
const addGlobalCount = () => globalCount.value++

export const useCounter = () => {
  // local
  const localCount = ref(0)
  const addLocalCount = () => localCount.value++

  return {
    globalCount,
    addGlobalCount,
    localCount,
    addLocalCount,
  }
}
