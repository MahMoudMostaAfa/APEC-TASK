function ProgressBar({ currentStep, setCurrentStep }) {
  // const currentStep = 3;
  return (
    <div className="relative w-[80%] mx-auto mb-20">
      <span className="block  h-[2px] bg-white rounded-lg"></span>
      <span
        style={{
          width: `${(currentStep - 1) * 25}%`,
        }}
        className="transition-all duration-500  z-20 absolute top-1/2 translate-y-[-50%]  h-[3px] bg-red-500 rounded-lg "
      ></span>
      <ul className="z-30 absolute top-1/2 translate-y-[-50%]  w-full flex justify-between">
        {Array.from({ length: 5 }).map((_, index) => (
          <li
            key={index}
            className={` w-5 h-5 text-center rounded-sm transition-all  duration-100  ${
              index + 1 <= currentStep
                ? "bg-red-500 text-white"
                : "bg-white text-black"
            } `}
          >
            <button
              onClick={() => {
                if (index + 1 > currentStep) return;
                setCurrentStep(index + 1);
              }}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProgressBar;
