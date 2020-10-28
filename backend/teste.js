const projects = [
  { id: '1', title: "Curso de PHP", owner: "Fulano"},
  { id: '2', title: "Curso de PYTHON3", owner: "Fulano"},
  { id: '3', title: "Curso de WEB", owner: "Fulano"},
];

const title = 'de';

const results = projects.filter(project => project.title.includes(title))

console.log(results)