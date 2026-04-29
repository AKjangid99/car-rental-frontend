export const storeData = (key, value) => {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
    console.log(" data stored ")
}

export const getData = (key) => {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error("Error fetching from localStorage", error);
        return null;
    }
};

export const removeData = (key) => {
    localStorage.removeItem(key);
};
