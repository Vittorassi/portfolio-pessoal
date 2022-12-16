const LSSet = (key: string, value: any) => {
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

const LSGet = (key: string) => {
  if (typeof(Storage) !== "undefined") {
    return localStorage.getItem(key);
  }
}

export { LSSet, LSGet };