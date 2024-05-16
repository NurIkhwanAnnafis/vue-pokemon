interface ListType {
    type: {
        name: string
    }
}

export const getUrlId = (url: string) => {
    const arr = url.split('/');
    const id = arr[arr.length - 2];

    return id;
}

export const normalizeTypes = (listType: ListType[]) => {
    if (!listType || listType.length === 0) return 'Unknown';
    if (listType.length === 1) return listType[0].type.name;

    const result = listType.reduce((temp, val, index) => {
        if (index === 0) {
            temp = val.type.name;
        } else if (listType.length - 1 === index) {
            temp = temp.concat(' and ', val.type.name);
        } else {
            temp = temp.concat(', ', val.type.name);
        }

        return temp;
    }, '');

    return result;
}