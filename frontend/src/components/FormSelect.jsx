const FormSelect = ({ label, name, list, defaultValue, size }) => {
    return (
      <div className='form-control'>
        <label htmlFor={name} className='label'>
          <span className='label-text text-[#40826D] text-lg'>{label}</span>
        </label>
        <select
          name={name}
          id={name}
          className={`select select-bordered bg-[#FEFDED] text-[#40826D] border-2 focus:ring-[#40826D] ${size}`}
          defaultValue={defaultValue}
        >
          {list.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    );
  };
  export default FormSelect;
  