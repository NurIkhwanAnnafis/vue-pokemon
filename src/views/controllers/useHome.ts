import { fetchListPokemon } from "@/apis/pokemon";
import { reactive } from "vue"
import { useLoadingStore } from "@/stores/layout";
import { usePokemon } from "@/stores/pokemon";
import { getUrlId } from "../configs/utils";
import router from "@/router";

interface DataSource {
    data: { name: string, url: string }[]
    meta: { total: number }
}

interface Home {
    dataSource: DataSource
    page: number
}

const initialState: Home = {
    dataSource: { data: [], meta: { total: 0 } },
    page: 1,
}

const home = reactive<Home>({ ...initialState });

const reset = () => Object.assign(home, initialState);

const handleFetch = async (offset: number = 0) => {
    useLoadingStore().setLoading(true);
    const myListPokemon = usePokemon().getListPokemon();
    const params = {
        limit: 10,
        offset: offset
    };

    const res: DataSource = await fetchListPokemon(params);

    const newData = res.data.map((data: { name: string, url: string }) => ({ ...data, count: myListPokemon.filter(pokemon => String(pokemon.id) === getUrlId(data.url)).length }));

    home.dataSource = { data: newData, meta: res.meta };
    useLoadingStore().setLoading(false);
}

const handleChangePage = (page: number) => {
    const offset = (page - 1) * 10;

    home.page = page;
    handleFetch(offset);
}

const handleRowClick = (record: { name: string, url: string }) => {
    const id = getUrlId(record.url)

    router.push({ path: `/detail/${id}` });
}

export default {
    home,
    reset,
    handleChangePage,
    handleFetch,
    handleRowClick,
}