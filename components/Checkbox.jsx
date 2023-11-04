
const Checkbox = ({ label, name, checked, setChecked, isSubmitted, isFetched}) => {
  return (
    <div className="form-check form-check-inline text-xs montserrat font-semibold">
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
