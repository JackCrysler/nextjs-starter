export default function TemplateLiterals(props: { className: string | undefined; }) {
  function highlight(strings: TemplateStringsArray, ...values: any[]) {
    return strings.reduce((result, str, i) => {
      return `${result}${str}<mark>${values[i] || ''}</mark>`;
    }, '');
  }

  const name = 'Runoob';
  const age = 30;
  const __html = highlight`My name is ${name} and I'm ${age} years old.`;
  return <p className={props.className} dangerouslySetInnerHTML={{ __html }}></p>;
}
