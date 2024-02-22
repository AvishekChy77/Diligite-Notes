import CreateNote from "./Components/CreateNote/CreateNote";
import AllNotes from "./Components/Notes/Notes";
import MyComponent from "./Components/Notes/Notes";

const Home = async () => {
  return (
    <main>
      <CreateNote />
      <AllNotes />
    </main>
  );
};

export default Home;
