import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./page/Homepage";

function App() {
  return (
    <div className="mx-auto">
      <Header />
      <div className="bg-green-600 min-h-screen lg:min-w-[900px] flex justify-center items-center">
        <Homepage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
