

export const storeData = (key, value) => {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
    console.log(" data stored ")
}

export const removeData = (key) => {
    localStorage.removeItem(key);
};
