import { defineStore } from "pinia";

interface ListType {
    type: {
        name: string
    }
}

interface DataDetail {
    name: string
    types: ListType[]
    nickname: string
    sprites: {
        front_default: string
    }
    id: string
}

export const usePokemon = defineStore('pokemon', () => {
    const getListPokemon = (): DataDetail[] | [] => {
        const mypokemon = localStorage.getItem('mypokemon');

        return mypokemon ? JSON.parse(mypokemon) : [];
    }

    const setListPokemon = (values: DataDetail) => {
        const myListPokemon = getListPokemon();

        localStorage.setItem('mypokemon', JSON.stringify([...myListPokemon, values]))
    }

    return { getListPokemon, setListPokemon };
})