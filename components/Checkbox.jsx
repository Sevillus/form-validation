
const Checkbox = ({ label, name, checked, setChecked, isSubmitted, isFetched, value, regex}) => {

    return (
        <div className={`form-check form-check-inline text-xs montserrat font-semibold easy-in-out duration-300 ${regex.test(value) ? "opacity-1" :"opacity-0" }`}>
            <input
                className={`form-check-input checkbox ${isSubmitted && (!isFetched )? 'border-2 border-rose-600' : ''}`}
                type="checkbox"
                id="inlineCheckbox1"
                checked={checked}
                onChange={() => setChecked(!checked)}
                name={name}
            />
            <label className="form-check-label ml-2" htmlFor="inlineCheckbox1">
                {label}
            </label>
        </div>
    );


};
export default Checkbox;
