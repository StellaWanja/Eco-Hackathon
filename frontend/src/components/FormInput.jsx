const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text text-[#40826D] text-lg">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`bg-[#FEFDED] text-[#40826D] border-2 focus:ring-[#40826D] ${size}`}
        placeholder="Search here..."
      />
    </div>
  );
};
export default FormInput;
