import React from 'react'

const SubmitInfo = ({data}) => {
    return (
        <div>
            {
                data?.result === "OK" ? (
                    <div dangerouslySetInnerHTML={{ __html: data.content }} />
                ) : data?.result === "INVALID" ? (
                    <div className={"flex justify-center text-rose-700"}>
                        <p>Błąd walidacji! Komunikat błędu: error_test:{data?.error.error_test}</p>
                    </div>
                ) : ""
            }
        </div>
    )
}
export default SubmitInfo
