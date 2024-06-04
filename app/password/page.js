import Link from 'next/link';
export default function Password() {
    return (
        <main className="flex flex-col items-center justify-between min-h-screen p-24 bg-primary_color">
            <div className="w-4/12 h-[597.59px]">
                <header className="flex justify-around px-10 text-white  justify-centert-bold h-[50px]">
                    <div className="flex logo">
                        <svg width="14" height="28" viewBox="0 0 14 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.666016 0.666237H13.9973L0.666016 27.3288V0.666237Z" fill="white"/>
                        </svg>

                        <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.666016 0.666237H20.663L13.9973 13.9975L0.666016 0.666237Z" fill="black" fill-opacity="0.15"/>
                        </svg>

                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.666016 0.666237H27.3286V27.3288L0.666016 0.666237Z" fill="white"/>
                        </svg>



                    </div>
                    RED PRODUCT
                </header>

                <div className="content  h-[424.25px] border-2 border-white bg-white">
                    <h2 className=" pt-10 text-center ">Mot de passe oublié ?</h2>
                    <span className="text-center flex">Entrez votre adresse e-mail ci-dessous et nous vous envoyons des instructions sur la façon de modifier votre mot de passe.</span>
                    <div className="input flex flex-col justify-around h-[150px] items-center ">
                        <input type="text" placeholder="Email" className="text h-[45.33px] w-[270px] border-b border-gray-400 outline-none focus:border-none"/>
                    </div>

                    <button className="bg-buttonColor  font-roboto font-medium text-xl px-4 py-2 text-white rounded mt-10 w-[320px] mx-10">Envoyer</button>

                    <footer className="flex flex-col p-4 bg-primary_color mt-3 text-center">
                        <Link href="/" className="text-white curs">Revenir a la  <span className="text-linkColor">connexion</span></Link>
                    </footer>

                </div>



            </div>
        </main>
    );
}