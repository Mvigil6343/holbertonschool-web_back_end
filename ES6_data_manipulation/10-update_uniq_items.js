export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw Error('Cannot process');
  for (const info of map) if (info[1] === 1) map.set(info[0], 100);
  return map;
}
