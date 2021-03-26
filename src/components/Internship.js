import React from "react"
import boffin from "../resources/boffin.png"

export default function Work() {
    document.title = "internships"
    return (
        <header className="container mx-auto my-20">
            <figure class="md:flex bg-gray-100 w-auto h-auto rounded-xl p-8 shadow-xl">
                <div class="container text-justify">
                    <img class="w-auto h-auto md:w-48 md:h-auto" src={boffin} alt="BoffinAI" width="384" height="512" />
                    <p className="pt-5 font-semibold">BoffinAI | San Francisco, CA</p>
                    <p className="">Sep. 2020 - Dec. 2020</p>
                </div>
                <div class="container pt-6 text-center ">
                    <ul class="text-lg">
                        <li class="text-lg font-semibold mt-5">
                            First time being exposed to web development. Spent a good amount of time reading up on document that
                            the company used. Created a website using React, Bootstrap, and the Big Commerce API for the company's product.
                        </li>
                    </ul>
                </div>

            </figure>
        </header>
    )
}