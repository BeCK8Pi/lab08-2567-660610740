import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Input from "./components/input.jsx";
import Todo from "./components/todo.jsx";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header/>

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <Input/>
        {/* task */}
        <Todo todo="Read a book"/>
        {/* task */}
        <Todo todo="Take a shower"/>
        {/* task */}
        <Todo todo="Sleep"/>
      </div>

      {/* //footer section */}
      <Footer year="2024" fullName="Kritsaran Khuntip" studentId="660610740"/>
    </div>
  );
}
