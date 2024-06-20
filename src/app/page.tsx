import Footer from "./components/Footer";
import Form from "./components/Form";
import { Navbar } from "./components/Navbar"


export default function Home() {
  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center pt-5">
  
        <h1 className="text-4xl font-bold text-blue-900">Evaluate your English Level</h1>
      
      </div>

      <Form />

      <Footer />
    </>
  );
}
