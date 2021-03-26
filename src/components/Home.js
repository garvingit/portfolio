import React from "react"

export default function Home() {
    document.title = "Garvin Mo Zhen"
    return (
        <header className="container md:w-2/5 md:h-auto mx-auto my-20">
            <figure class="md:flex bg-gray-100 rounded-xl p-8 shadow-xl">
                <img class="w-48 h-48 md:w-48 md:h-48 rounded-full mx-auto my-auto" src="https://avatars.githubusercontent.com/u/21044142?s=460&u=6e4cfbf01d2a2a6b622093f42c650456e85b2b24&v=4" alt="" width="384" height="512" />
                <div class="pt-6 md:p-8 text-center space-y-4 mx-auto my-auto">
                    <blockquote>
                        <p class="text-lg font-semibold">
                                I'm Garvin Mo Zhen. I am currenly a 3rd year at UCSD c/o 2022. Interested in data science, 
                                machine learning and software development.
                    </p>
                    </blockquote>
                </div>

            </figure>
        </header>
    )
}