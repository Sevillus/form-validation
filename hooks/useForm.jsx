import React, { FormEvent, useState} from 'react';

const UseForm = () => {
    const [data, setData] = useState();
    const [nameError, setNameError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isFetched, setIsFetched] = useState(false);
    const [mailAgreement, setMailAgreement] = useState(false)
    const [callAgreement, setCallAgreement] = useState(false)
    const [smsAgreement, setSmsAgreement] = useState(false)

    const resetErrors = () => {
        setNameError("");
        setPhoneError("");
        setEmailError("");
    }

    const shouldSendInvalidEmail = () => {
        // Once in 10 times it returns an incorrect email
        return Math.random() < 0.1;
    };

    const handleSubmit = async (event) => {
        let error = 0;
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const email = String(formData.get('email')) ;
        const name = String(formData.get('name')) ;
        const phone = String(formData.get('phone')) ;
        formData.set('error_test', shouldSendInvalidEmail() ? "" : email);

        // form validation
        if (name === "") {
            error++;
            setNameError("Podaj imię i nazwisko!");
        }
        if (phone) {
            const numberRegex = /^\d{9}$/;
            if (!numberRegex.test(phone)) {
                error++;
                setPhoneError("Błędny format numeru telefonu!");
            }
        }
        if (email === "") {
            error++;
            setEmailError("Podaj swój adres email!");
        } else {
            const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            if (!emailRegex.test(email)) {
                error++;
                setEmailError("Błędny adres email!");
            }
        }
        if (!mailAgreement){
            error++
        }
        if (!smsAgreement && !callAgreement){
            error++
        }


        //fetching data
        if (error === 0) {
            resetErrors()
            setIsFetched(true)
            const response = await fetch("https://test8.it4u.company/sapi/modules/contact/form/40042ce28394dc369948c018b22c534d", {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            setData(data);
        } else {
            console.log("błąd walidacji");
        }

        setIsSubmitted(true);
    };

    return {
        data,
        handleSubmit,
        isSubmitted,
        nameError,
        phoneError,
        emailError,
        mailAgreement, setMailAgreement,
        callAgreement, setCallAgreement,
        smsAgreement, setSmsAgreement,
        isFetched
    };
};

export default UseForm;
