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
                    <span @click="selectMenuItem(index)" class="sm:text-xl inline-block w-full relative">
                       <span v-if="props.setPlayers && index < player.length">
                           <span class="absolute right-[55%]">{{ t(item.title) }}</span> <span>-</span> <span
                           class="absolute left-[55%]">{{ $t(player[index]) }}</span>
                       </span>
                        <span v-else>
                           <span>{{ t(item.title) }}</span>
                       </span>
                    </span>
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
        <div v-if="props.difficultyMenu" class="text-right pt-2 text-yellow-300">{{ budget[selectedItem] + ' $' }}</div>
    </GameContext>
</template>

<script setup lang="ts">
    import {useLanguageStore} from "~/stores/LanguageStore";
    import GameContext from "~/layouts/GameContext.vue";
    
    const props = defineProps(['menuItems', 'selectedItem', 'isEnterPressed', 'difficultyMenu', 'setPlayers'])
    const emits = defineEmits(['update:selectedItem', 'setDifficulty'])
    
    const selectedItem = ref(0)
    const {language} = useLanguageStore()
    const {t} = useI18n()
    const menuFunctions = [newGame, tournament, loadSave, bestConquerors, authors, quitGame]
    const difficultyMenuFunctions = [pieceOfCake, lifeIsHard, youWillBeKilled]
    const budget = [50000, 100000, 200000]
    const playerRoles = ['human', 'computer', 'no']
    const player = ref(['human', 'computer', 'no', 'no'])
    const router = useRouter()
    
    function selectMenuItem(index: number): void {
        selectedItem.value !== index ? selectedItem.value = index : callFunction(index)
    }
    
    function callFunction(index: number): void {
        if (props.difficultyMenu) difficultyMenuFunctions[index]()
        else if (props.setPlayers) {
            if (index < player.value.length) {
                const currentRole = player.value[index]
                const nextRole = playerRoles.findIndex(role => role === currentRole) + 1
                player.value.splice(index, 1, playerRoles[nextRole < playerRoles.length ? nextRole : 0])
            } else {
                goToNextMenu()
            }
        }
        else menuFunctions[index]()
    }
    
    function pieceOfCake() {
        emits('setDifficulty', 0)
        router.push('SetPlayersPage')
    }
    
    function lifeIsHard() {
        emits('setDifficulty', 1)
        router.push('SetPlayersPage')
    }
    
    function youWillBeKilled() {
        emits('setDifficulty', 2)
        router.push('SetPlayersPage')
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
    
    function goToNextMenu() {
        const playersNumberCheck = player.value.reduce((acc:number, val:string) => {
            return val === 'no' ? acc + 1 : acc
        }, 0)
        if (playersNumberCheck > 2) console.log('Мало игроков')
        else router.push('TroopRecruitment')
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
        
        li {
            
            &:not(.active):hover {
                filter: brightness(125%);
            }
            
            &:is(.active):hover {
                filter: brightness(100%);
            }
        }
        
        span {
            cursor: pointer;
        }
    }
    
    h2 {
        font-weight: bold;
        font-style: italic;
        font-size: 2.5rem;
    }
    
    .active {
        color: #e72e2e;
        font-size: 2rem;
        filter: brightness(90%);
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