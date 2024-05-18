import { ref } from "vue";
import { usePokemonStore } from "@/stores/pokemon";
import { useLoadingStore } from "@/stores/layout";
import { message } from "ant-design-vue";

interface MyPokemon {
    nickname: string
    name: string
    types: {
        type: {
            name: string
        }
    }[],
    sprites: {
        front_default: string
    }
    id: string
}

const initialState: MyPokemon[] | [] = [];

const myPokemon = ref<MyPokemon[] | []>(initialState);

const handleGetLisMyPokemon = () => {
    useLoadingStore().setLoading(true);

    const listPokemon = usePokemonStore().getListPokemon();
    myPokemon.value = listPokemon;

    useLoadingStore().setLoading(false);
}

const handleRelease = (name: string, nickname: string) => {
    useLoadingStore().setLoading(true);
    setTimeout(() => {
        const listPokemon = usePokemonStore().getListPokemon();
        const indexReleasedPokemon = listPokemon.findIndex(pokemon => pokemon.name === name && pokemon.nickname === nickname);

        if (indexReleasedPokemon > -1) {
            listPokemon.splice(indexReleasedPokemon, 1);
            message.success('Pokemon released')
            usePokemonStore().setListAllPokemon(listPokemon);
            handleGetLisMyPokemon();
        }

        useLoadingStore().setLoading(false);
    }, 2000)
}

export default {
    myPokemon,
    handleGetLisMyPokemon,
    handleRelease
}