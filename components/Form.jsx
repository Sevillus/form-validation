"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkbox from "@/components/Checkbox";
import SubmitButton from "@/components/SubmitButton";
import PrivacyPolicyLink from "@/components/PrivacyPolicyLink";
import AgreeText from "@/components/AgreeText";
import FormInput from "@/components/FormInput";
import SubmitInfo from "@/components/SubmitInfo";
import useForm from "@/hooks/useForm";
import {useState} from "react";

const Form = () => {
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const {
        data,
        handleSubmit,
        nameError,
        phoneError,
        emailError,
        mailAgreement,
        setMailAgreement,
        setCallAgreement,
        setSmsAgreement,
        smsAgreement,
        callAgreement,
        isSubmitted,
        isFetched,
        numberRegex,
        emailRegex
    } = useForm();

    return (
        <section className={"formContainer__bg w-11/12 md:w-8/12 lg:w-4/12 min-[1900px]:w-4/12 shadow-lg form__textColor"}>
            <form onSubmit={handleSubmit} className="form-group flex flex-col gap-4 min-[1900px]:px-20 px-10 py-10">
                <FormInput
                    placeholder={"IMIĘ I NAZWISKO"}
                    type={"text"}
                    name={"name"}
                    error={nameError}
                    value={name}
                    setValue={setName}
                />
                <FormInput
                    placeholder={"TELEFON"}
                    type={"number"}
                    name={"phone"}
                    error={phoneError}
                    value={phone}
                    setValue={setPhone}
                />
                <FormInput
                    placeholder={"EMAIL"}
                    type={"email"}
                    name={"email"}
                    error={emailError}
                    value={email}
                    setValue={setEmail}
                />
                <AgreeText />
                <Checkbox
                    label="w formie elektronicznej (mail) na wskazany adres mailowy"
                    name={"agreement_mail"}
                    checked={mailAgreement}
                    setChecked={setMailAgreement}
                    isSubmitted={isSubmitted}
                    isFetched={isFetched}
                    value={email}
                    regex={emailRegex}
                />
                <Checkbox
                    label="drogą telefoniczną na udostępniony numer telefony"
                    name={"agreement_call"}
                    checked={callAgreement}
                    setChecked={setCallAgreement}
                    isSubmitted={isSubmitted}
                    isFetched={isFetched}
                    value={phone}
                    regex={numberRegex}
                />
                <Checkbox
                    label="W formie SMS, na udostępniony numer telefonu"
                    name={"agreement_sms"}
                    checked={smsAgreement}
                    setChecked={setSmsAgreement}
                    isSubmitted={isSubmitted}
                    isFetched={isFetched}
                    value={phone}
                    regex={numberRegex}
                />
                <SubmitInfo  data={data}/>
                <SubmitButton label="Wyślij"/>
                <PrivacyPolicyLink />
            </form>
        </section>
    )
}
export default Form
