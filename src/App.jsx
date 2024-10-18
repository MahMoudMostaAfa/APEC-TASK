import { useState } from "react";
import Container from "./ui/Container";
import Header from "./ui/Header";
import ProgressBar from "./ui/ProgressBar";
import Heading from "./ui/Heading";
import Form from "./features/Form";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className="bg-gradient-to-b from-[#333333] from-10%  bg-fixed via-[#8b1313] via-80% to-[#8b1313] to-90% min-h-screen p-5 lg:10 ">
      <Container>
        <Header />
        <ProgressBar
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
        <Heading />
        <Form currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </Container>
    </div>
  );
}

export default App;
