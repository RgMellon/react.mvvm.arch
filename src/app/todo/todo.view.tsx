import { useTodoModel } from "./todo.model";

export default function TodoView(props: ReturnType<typeof useTodoModel>) {

    const u =(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget); 
        const newTodo = formData.get("todo")?.toString() || "";

        props.handleSubmit(newTodo)
    }

    return (
        <div className="grid place-items-center min-h-screen">
          <div className="w-full max-w-2xl">
            <h1 className="text-black">Adicionar Item a lista</h1>
  
            <form onSubmit={u}>
              <input type="text" name="todo" className="w-full h-[50px] p-2 mt-2 rounded-md border border-gray-100 text-black" />
              <button type="submit"  className="w-full bg-green-600 h-[50px] mt-4">Adicionar</button>
            </form>


            <ul  className="w-full mt-6">
                {props.todos.map(item => <li className="text-black" key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      );
}