import { fetchListPokemonById } from "@/apis/pokemon";
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { useLoadingStore } from "@/stores/layout";
import { usePokemonStore } from "@/stores/pokemon";
import { message } from "ant-design-vue";
import { checkPokemonIsTaken } from "../configs/utils";

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

interface Detail {
    name: string
    moves: Moves[]
    types: ListType[],
    sprites: {
        front_default: string
    }
}

interface DetailSave {
    nickname: string
    name: string
    moves: Moves[]
    types: ListType[],
    sprites: {
        front_default: string
    }
    id: string
}

interface FormState {
    nickname: string
}

const initialState: Detail | null = null;

const detail = ref<Detail | null>(initialState);
const modal = ref<boolean>(false);
const formState = reactive<FormState>({ nickname: '' })

const reset = () => detail.value = null;
const resetForm = () => Object.assign(formState, { nickname: '' });

const handleFetchDetail = async () => {
    useLoadingStore().setLoading(true);
    const { params } = useRoute();

    const id = params ? params.id : '';

    const res: Detail | null = await fetchListPokemonById(String(id));

    detail.value = res;
    useLoadingStore().setLoading(false);
}

const handleOpen = () => {
    const isCatch = Math.floor(Math.random() * 2);
    useLoadingStore().setLoading(true);

    setTimeout(() => {
        if (isCatch) {
            message.success('Congratulations');
            modal.value = true;
        } else {
            message.error('Pokemon mocks you');
        }

        useLoadingStore().setLoading(false);
    }, 2000)

}
const handleClose = () => modal.value = false;

const onFinish = (values: FormState) => {
    const currentListPokemon = usePokemonStore().getListPokemon();
    const isTaken = checkPokemonIsTaken(currentListPokemon, values.nickname, detail.value?.name || '')
    if (isTaken) {
        return message.warning('Nickname already used');
    }

    const detailPokemon = { ...detail.value, nickname: values.nickname };
    usePokemonStore().setListPokemon(<DetailSave>detailPokemon);
    resetForm();
    message.success('Now pokemon is in your bag!');
    handleClose();
}

export default { detail, handleFetchDetail, reset, modal, handleOpen, handleClose, formState, onFinish };