const topBrazilMovies = [
  {
    title: "Vingadores: Ultimato",
    peopleAmount: 19_686_119,
    distributedBy: "Disney",
  },
  {
    title: "Titanic",
    peopleAmount: 17_050_000,
    distributedBy: "Paramount / 20th Century",
  },
  { title: "0 Rei Leão", peopleAmount: 16_267_649, distributedBy: "Disney" },
  {
    title: "Vingadores: Guerra Infinita",
    peopleAmount: 14_572_181,
    distributedBy: "Disney",
  },
  { title: "Tubarão", peopleAmount: 13_035_000, distributedBy: "Universal" },
  {
    title: "Nada a Perder",
    peopleAmount: 11_944_985,
    distributedBy: "Paris Filmes",
  },
  {
    title: "Os Dez Mandamentos",
    peopleAmount: 11_259_536,
    distributedBy: "Paris / Downtown Filmes",
  },
  {
    title: "Tropa de Elite 2",
    peopleAmount: 11_204_815,
    distributedBy: "Zazen",
  },
  { title: "Os Vingadores", peopleAmount: 10_968_065, distributedBy: "Disney" },
  {
    title: "Dona Flor e Seus Dois Maridos",
    peopleAmount: 10_735_524,
    distributedBy: "Embrafilme",
  },
];

const totalPublicoDisney = topBrazilMovies
  .filter(({ distributedBy }) => distributedBy === "Disney")
  .reduce((acc, { peopleAmount }) => acc + peopleAmount, 0);
console.log(totalPublicoDisney);

const pets = [
  { name: "Boris", age: 4, gender: "Male", type: "Dog" },
  { name: "Jimmy", age: 1, gender: "Male", type: "Cat" },
  { name: "Pérola", age: 2, gender: "Female", type: "Dog" },
  { name: "Lucy", age: 5, gender: "Female", type: "Cat" },
  { name: "Cristal", age: 3, gender: "Female", type: "Dog" },
  { name: "Chico", age: 6, gender: "Male", type: "Dog" },
];

const getDogs = ({ type }) => type === "Dog";
const convertToHumanAge = ({ name, age }) => ({
  name,
  convertedAge: age * 7,
});

const dogsAge = pets.filter(getDogs).map(convertToHumanAge);
console.log(dogsAge);
