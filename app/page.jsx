
import Header from "@/components/Header";
import Form from "@/components/Form";


export default function Home() {
  return (
    <main className={"homePage__bg w-full flex flex-col justify-center items-center px-2 py-10 md:py-24 min-[1900px]:py-40"}>
        <Header />
        <Form />
    </main>
  )
}
