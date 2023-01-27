import { defineStore } from 'pinia'

export const useCounterStore = defineStore('useCounterStore', ()=>{
    const counter = ref(0);
    return { counter }
})
