const handleLocalStorage = () => {
  const store = (key, value) =>
    localStorage.setItem(key, JSON.stringify(value));

  const getItem = item => {
    const res = localStorage.getItem(item);

    return JSON.parse(res) || "Item not exist";
  };

  const remove = item => localStorage.removeItem(item);

  return { store, getItem, remove };
};

export default handleLocalStorage;
