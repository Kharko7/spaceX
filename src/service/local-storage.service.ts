const spaceX = 'spaceX';

type StorageKey = 'bannerIdx';

const StorageSpaceX = {
  bannerIdx: 0,
};

if (!localStorage.getItem(spaceX)) {
  localStorage.setItem(spaceX, JSON.stringify(StorageSpaceX));
}
export const getFromLocalStorage = (name: StorageKey) => {
  const localObject = JSON.parse(localStorage.getItem(spaceX) || '');
  if (!localObject) {
    return null;
  }
  return localObject[name];
};

export const setToLocalStorage = (name: StorageKey, item: string | number | boolean | object) => {
  const localObject = JSON.parse(localStorage.getItem(spaceX) || '');
  if (localObject) {

    localObject[name] = item;
    localStorage.setItem(spaceX, JSON.stringify(localObject));
  }
};