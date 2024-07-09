export default function cleanSet(set, startString) {
  let final = '';
  if (!startString || !startString.length) return final;
  set.forEach((item) => {
    if (item && item.startsWith(startString)) final += `${item.slice(startString.length)}-`;
  });
  return final.slice(0, final.length - 1);
}
