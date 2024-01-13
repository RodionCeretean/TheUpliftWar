import {defineStore} from "pinia";

export const useDifficultyStore = defineStore('DifficultyStore', () => {
    const difficulty = ref<number|null>(null)

    function changeDifficulty(payload: number|null): void {
        difficulty.value = payload
    }

    return {difficulty, changeDifficulty}
})