const loadData = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    return null;
  }
};

const saveData = (key, payload) => {
  localStorage.setItem(key, JSON.stringify(payload));
};

export { loadData, saveData };