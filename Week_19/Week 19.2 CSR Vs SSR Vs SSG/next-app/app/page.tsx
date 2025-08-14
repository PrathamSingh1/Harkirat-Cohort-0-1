import Image from "next/image";

export default async function Home() {
  const response = await fetch("https://sum-server.100xdevs.com/todos");
  const data = response.json();
  console.log("Data found from the be server is");
  console.log(JSON.stringify(data));
  return (
    <div>
      {data.todos.map((todo: any) => <div>
        {todo.title}
        {todo.description}
      </div>)}
    </div>
  );
}
