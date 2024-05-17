interface DataSource {
    data: { name: string, url: string }[]
    meta: { total: number }
}

interface ListType {
    type: {
        name: string
    }
}

interface Moves {
    move: {
        name: string
        url: string
    }
}

interface DataDetail {
    name: string
    moves: Moves[]
    types: ListType[]
    sprites: {
        front_default: string
    }
}

export const fetchListPokemon = async (params: any): Promise<DataSource> => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?' + new URLSearchParams(params));
        const data = await response.json();

        return { data: data.results, meta: { total: data.count } };
    } catch (error) {
        console.error(error)
        return { data: [], meta: { total: 0 } }
    }
}

export const fetchListPokemonById = async (id: string): Promise<DataDetail | null> => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error)
        return null;
    }
}