import { useForm, FormProvider } from "react-hook-form";
import Button from "../ui/Button";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
const validateSteps = {
  1: [""],
  2: [
    "name",
    "email",
    "phone",
    "university",
    "otherUniversity",
    "faculty",
    "otherFaculty",
    "currentYear",
    "firstPreference",
    "secondPreference",
    "previousExperience",
  ],
  3: [""],
  4: [""],
  5: [""],
};

function Form({ currentStep, setCurrentStep }) {
  const methods = useForm();
  function handleNext() {
    methods.trigger(validateSteps[currentStep]).then((isValid) => {
      if (isValid) {
        setCurrentStep((prev) => prev + 1);
      }
    });
  }
  function handleBack() {
    setCurrentStep((prev) => prev - 1);
  }
  function onSubmit(formData) {
    console.log(formData);
    const {
      name,
      email,
      phone,
      university,
      otherUniversity,
      faculty,
      otherFaculty,
      currentYear,
      firstPreference,
      secondPreference,
      previousExperience,
    } = formData;
    const finalForm = {
      name,
      email,
      phone,
      university: university === "other" ? otherUniversity : university,
      faculty: faculty === "other" ? otherFaculty : faculty,
      currentYear,
      firstPreference,
      secondPreference,
      previousExperience,
    };
    console.log(finalForm);
    /// send data to server
  }
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      case 5:
        return <Step5 />;
      default:
        return null;
    }
  };
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="border bg-[#a5a2a256]  rounded-md p-10 border-white"
      >
        {renderStep()}
        <div className="flex items-center justify-between mt-10">
          {currentStep > 1 && (
            <Button type="button" onClick={handleBack}>
              back
            </Button>
          )}
          {currentStep < 5 && (
            <Button type="button" onClick={handleNext}>
              next
            </Button>
          )}
          {currentStep === 5 && <Button type="sumbit">submit</Button>}
        </div>
      </form>
    </FormProvider>
  );
}

export default Form;
