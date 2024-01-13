<template>
    <GameContext>
        <h2 class="text-cyan-400 font-medium text-3xl">{{ t(menuItems.title) }}</h2>
        <ul>
            <li
                :class="{ active: selectedItem === index, relative: item.value }"
                class="text-yellow-500 font-medium text-2xl mt-2"
                v-for="(item, index) in menuItems.items"
            >
                <template v-if="!item.value">
                    <span @click="selectMenuItem(index)" class="sm:text-xl">{{ t(item.title) }}</span>
                </template>
                <template v-else>
                    <span class="absolute right-48 kingdomPlayersTitles">{{ t(item.title) }}</span>
                    <span
                        class="relative"
                        :class="{'right-8': language === 'en', 'right-6': language === 'ru' }"
                    >
                        -
                    </span>
                    <span
                        class="text-yellow-200 absolute kingdomPlayersValues"
                        :class="{'left-32': language === 'en', 'left-36': language === 'ru'}"
                    >
                        {{ t(item.value) }}
                    </span>
                </template>
            </li>
        </ul>
    </GameContext>
</template>

<script setup lang="ts">
    import {useLanguageStore} from "~/stores/LanguageStore";
    import GameContext from "~/layouts/GameContext.vue";
    
    const props = defineProps(['menuItems', 'selectedItem', 'isEnterPressed', 'difficultyMenu'])
    const emits = defineEmits(['update:selectedItem'])
    
    const selectedItem = ref(0)
    const {language} = useLanguageStore()
    const {t} = useI18n()
    const menuFunctions = [newGame, tournament, loadSave, bestConquerors, authors, quitGame]
    const difficultyMenuFunctions = [pieceOfCake, lifeIsHard, youWillBeKilled]
    const router = useRouter()
    
    function selectMenuItem(index: number): void {
        selectedItem.value !== index ? selectedItem.value = index : callFunction(index)
    }
    
    function callFunction(index: number): void {
        !props.difficultyMenu ? menuFunctions[index]() : difficultyMenuFunctions[index]()
    }
    
    function pieceOfCake() {
        console.log('pieceOfCake')
    }
    
    function lifeIsHard() {
        console.log('lifeIsHard')
    }
    
    function youWillBeKilled() {
        console.log('youWillBeKilled')
    }

    function newGame() {
        router.push('GameDifficultyPage')
    }

    function tournament() {
        console.log('tournament')
    }

    function loadSave() {
        console.log('loadSave')
    }

    function bestConquerors() {
        router.push('BestConquerors')
    }

    function authors() {
        router.push('/Authors')
    }

    function quitGame() {
        router.push('/')
    }
    
    watch(selectedItem, newValue => emits('update:selectedItem', newValue))
    watch(() => props.selectedItem, newValue => selectedItem.value = newValue)
    watch(() => props.isEnterPressed, () => callFunction(selectedItem.value))
</script>

<style scoped lang="scss">
@media (hover: none) {
    span:hover {
        opacity: 1;
    }
}

@media (pointer: coarse) {
    span {
        cursor: none;
    }
}

.selection {
    ul {
        margin-top: 24px;
    
        span {
            cursor: pointer;
        
            &:hover {
                opacity: 0.75;
            }
        }
    }
    
    h2 {
        font-weight: bold;
        font-style: italic;
        font-size: 2.5rem;
    }
    
    .active {
        color: rgba(255, 0, 0, 0.75);
        font-size: 2rem;
    }
}

@media screen and (max-width: 340px) {
    .kingdomPlayersValues {
        left: 8rem;
    }
    
    .kingdomPlayersTitles {
        right: 11rem;
    }
    
    .selection h2 {
        font-size: 2rem;
    }
}
</style>