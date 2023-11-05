import {useState} from "react";
import ErrorInfo from "@/components/ErrorInfo";


const FormInput = ({placeholder, name, type, error, value, setValue}) => {

  return (
      <div>
        <input
            type={ type }
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="form-control text-center input__bg border-0 rounded-0 py-4"
        />
        <ErrorInfo error={error}/>
      </div>

  );
};
export default FormInput;
