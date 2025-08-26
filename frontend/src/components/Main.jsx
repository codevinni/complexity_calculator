import Button from "./Button";
import Footer from "./Footer";

function Main() {
    return(
        <main className="flex justify-center justify-items-center">
            <div className="w-full md:w-2/3 mt-6 p-6 md:p-8">

                <Button name={"Calculate"}/>

                <textarea
                    placeholder="Insert a code snippet..."
                    className="w-full h-80 p-4 bg-neutral-800 text-neutral-100 rounded-2xl resize-none placeholder-neutral-400">
                </textarea>

                <Footer/>
                
            </div>
        </main>
    )
}

export default Main;