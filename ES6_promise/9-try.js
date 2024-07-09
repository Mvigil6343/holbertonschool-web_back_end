export default function guardrail(mathFunction) {
  let info = '';
  try {
    info = mathFunction();
  } catch (error) {
    info = error.toString();
  }
  const list = [];
  list.push(info);
  list.push('Guardrail was processed');

  return list;
}
