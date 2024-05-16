import { fetchListPokemon } from "@/apis/pokemon";
import { reactive } from "vue"
import { useLoadingStore } from "@/stores/layout";
import { getUrlId } from "../configs/utils";
import router from "@/router";

interface DataSource {
    data: object[]
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
    const params = {
        limit: 10,
        offset: offset
    };

    const res: DataSource = await fetchListPokemon(params);

    home.dataSource = { data: res.data, meta: res.meta };
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