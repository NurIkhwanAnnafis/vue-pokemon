import { fetchListPokemonById } from "@/apis/pokemon";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useLoadingStore } from "@/stores/layout";

interface ListType {
    type: {
        name: string
    }
}

interface Moves {
    name: string
}

interface Detail {
    moves: Moves[]
    types: ListType[],
    sprites: {
        front_default: string
    }
}

const initialState: Detail | null = null;

const detail = ref<Detail | null>(initialState);

const reset = () => detail.value = null;

const handleFetchDetail = async () => {
    useLoadingStore().setLoading(true);
    const { params } = useRoute();

    const id = params ? params.id : '';

    const res: Detail | null = await fetchListPokemonById(String(id));

    detail.value = res;
    useLoadingStore().setLoading(false);
}

export default { detail, handleFetchDetail, reset };