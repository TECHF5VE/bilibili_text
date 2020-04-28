export const details = [
  {
    id: 0,
    detail: '0-detail'
  },
  {
    id: 1,
    detail: '1-detail'
  },
  {
    id: 2,
    detail: '2-detail'
  }
];

export const users = [
  {
    id: 0,
    name: '0-aa'
  },
  {
    id: 1,
    name: '1-bb'
  },
  {
    id: 2,
    name: '2-cc'
  }
];

export function getNextUser(currentId: number) {
  return currentId === 2 ? 0 : currentId + 1;
}