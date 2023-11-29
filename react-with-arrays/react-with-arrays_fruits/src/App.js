import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍏 Apple",
      color: "green",
    },
    {
      id: 2,
      name: "🍌",
      color: "yellow",
    },
    {
      id: 3,
      name: "🍏 strawberry",
      color: "red",
    },
    {
      id: 4,
      name: "🍏 orange",
      color: "orange",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit)=>{
return <Card key={fruit.id} name={fruit.name} color={fruit.color}/>
      })}
      {/* <Card name="🍌 banana" /> */}
    </div>
  );
}
