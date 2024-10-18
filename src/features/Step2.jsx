import { useFormContext } from "react-hook-form";
const faculties = {
  engineering: [
    "prep",
    "first year",
    "second year",
    "third year",
    "fourth year",
  ],
  business: ["first year", "second year", "third year", "fourth year"],
  medicine: [
    "first year",
    "second year",
    "third year",
    "fourth year",
    "fifth year",
    "sixth year",
  ],
  arts: ["first year", "second year", "third year", "fourth year"],
  other: ["first year", "second year", "third year", "fourth year"],
};
const preferences = ["PR", "IT", "FR", "HR", "MR"];
function Step2() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <div className="mb-4">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          {...register("name", { required: "this field is required" })}
          type="text"
          id="name"
          className="form-input"
        />
        {errors.name && (
          <span className="text-red-200">{errors.name.message}</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          {...register("email", {
            required: "this field is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "invalid email",
            },
          })}
          type="text"
          id="email"
          className="form-input"
        />
        {errors.email && (
          <span className="text-red-200">{errors.email.message}</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="form-label">
          phone
        </label>
        <input
          {...register("phone", {
            required: "this field is required",
            pattern: {
              value: /^\+?[0-9\s-]{7,15}$/,
              message: "invalid phone number",
            },
          })}
          type="text"
          id="phone"
          className="form-input"
        />
        {errors.phone && (
          <span className="text-red-200">{errors.phone.message}</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="university" className="form-label">
          university
        </label>
        <select
          {...register("university", {
            validate: (value) => value !== "def" || "please select university",
          })}
          id="university"
          className=" form-input"
        >
          <option value="def">select university</option>
          <option value="ain-shams">Ain shams</option>
          <option value="cairo">cairo</option>
          <option value="helwan">Helwan</option>
          <option value="other">other</option>
        </select>
        {watch("university") === "other" && (
          <input
            {...register("otherUniversity", {
              required: "this field is required",
            })}
            type="text"
            className="form-input mt-2"
            placeholder="please enter your university"
          />
        )}
        {errors.university && (
          <span className="text-red-200">{errors.university.message}</span>
        )}
        {errors.otherUniversity && (
          <span className="text-red-200">{errors.otherUniversity.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="faculty" className="form-label">
          faculty
        </label>
        <select
          {...register("faculty", {
            validate: (value) => value !== "def" || "please select faculty",
          })}
          id="faculty"
          className=" form-input"
        >
          <option value="def">select faculty</option>
          {Object.keys(faculties).map((faculty) => (
            <option value={faculty} key={faculty}>
              {faculty}
            </option>
          ))}
        </select>
        {watch("faculty") === "other" && (
          <input
            {...register("otherFaculty", {
              required: "this field is required",
            })}
            type="text"
            className="form-input mt-2"
            placeholder="please enter your faculty"
          />
        )}
        {errors.faculty && (
          <span className="text-red-200">{errors.faculty.message}</span>
        )}
        {errors.otherFaculty && (
          <span className="text-red-200">{errors.otherFaculty.message}</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="currentYear" className="form-label">
          current year
        </label>
        <select
          {...register("currentYear", {
            validate: (value) => value !== "def" || "please select year",
          })}
          id="currentYear"
          className=" form-input"
        >
          <option value="def">select year</option>
          {(faculties[watch("faculty")] || faculties["other"]).map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>
        {errors.currentYear && (
          <span className="text-red-200">{errors.currentYear.message}</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="firstPreference" className="form-label">
          first preference
        </label>
        <select
          {...register("firstPreference", {
            validate: (value) => value !== "def" || "please select preference",
          })}
          id="firstPreference"
          className=" form-input"
        >
          <option value="def">select preference</option>
          {preferences.map((year) => {
            return watch("secondPreference") === year ? null : (
              <option value={year} key={year}>
                {year}
              </option>
            );
          })}
        </select>
        {errors.firstPreference && (
          <span className="text-red-200">{errors.firstPreference.message}</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="secondPreference" className="form-label">
          second preference
        </label>
        <select
          {...register("secondPreference", {
            validate: (value) => value !== "def" || "please select preference",
          })}
          id="secondPreference"
          className=" form-input"
        >
          <option value="def">select preference</option>
          {preferences.map((year) => {
            return watch("firstPreference") === year ? null : (
              <option value={year} key={year}>
                {year}
              </option>
            );
          })}
        </select>
        {errors.secondPreference && (
          <span className="text-red-200">
            {errors.secondPreference.message}
          </span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="previousExperience" className="form-label">
          previous expoerience
        </label>
        <textarea
          id="previousExperience"
          {...register("previousExperience", {
            required: "this field is required",
          })}
          className="form-input min-h-20"
        />
        {errors.previousExperience && (
          <span className="text-red-200">
            {errors.previousExperience.message}
          </span>
        )}
      </div>
    </>
  );
}

export default Step2;
