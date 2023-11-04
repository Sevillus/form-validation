import React from 'react'

const SubmitButton = ({ label }) => {
    return (
        <div className={"w-full flex justify-center "}>
            <button type={"submit"} className={"btn__bg text-white font-bold text-2xl px-14 py-2 hover:scale-105 easy-in-out duration-300"}>
                { label }
            </button>
        </div>
    )
}
export default SubmitButton
