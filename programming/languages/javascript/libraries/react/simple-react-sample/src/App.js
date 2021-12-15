import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>Subjects</h1>
      <Todo
        text="React"
        description="A JavaScript library for building user interfaces"
      />
      <Todo text="Next.js" description="The React Framework for Production" />
      <Todo
        text="Node.js"
        description="a JavaScript runtime built on Chrome's V8 JavaScript engine"
      />
    </div>
  );
}

export default App;
