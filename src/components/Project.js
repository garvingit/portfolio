import React from "react"
import project1 from "../resources/project1.png"
import project2 from "../resources/project2.jpg"
import project3 from "../resources/project3.png"
import project4 from "../resources/project4.png"

export default function Project() {
    return (
        <header className="container md:w-2/5 md:h-auto mx-auto my-10">

            <figure class="md:flex bg-gray-100 rounded-xl p-8 shadow-xl hover:shadow-2xl">
                <img class="w-48 h-48 md:w-48 md:h-48 mx-auto my-auto" src={project1} alt="" width="384" height="512" />
                <div class="pt-6 md:p-8 text-center space-y-4 mx-auto my-auto">
                    <blockquote>
                    <h3 class="text-xl font-semibold">Comparison of Supervised Algorithms</h3>
                        <p class="text-lg">
                                Recreated a study to compare several supervised learning algorithms on four different datasets.
                    </p>
                    </blockquote>
                </div>

            </figure>

            <figure class="md:flex bg-gray-100 rounded-xl p-8 shadow-xl hover:shadow-2xl mt-10">
                <img class="w-48 h-48 md:w-48 md:h-48 mx-auto my-auto" src={project2} alt="" width="384" height="512" />
                <div class="pt-6 md:p-8 text-center space-y-4 mx-auto my-auto">
                    <blockquote>
                    <h3 class="text-xl font-semibold">Traffic Analysis</h3>
                        <p class="text-lg">
                                Data science project that analyzed the relationship between traffic collisions in NYC and 
                                rising COVID-19 cases. 
                    </p>
                    </blockquote>
                </div>

            </figure>

            <figure class="md:flex bg-gray-100 rounded-xl p-8 shadow-xl hover:shadow-2xl mt-10">
                <img class="w-48 h-48 md:w-48 md:h-48 mx-auto my-auto" src={project3} alt="" width="384" height="512" />
                <div class="pt-6 md:p-8 text-center space-y-4 mx-auto my-auto">
                    <blockquote>
                    <h3 class="text-xl font-semibold">Stock Screener</h3>
                        <p class="text-lg">
                                Calculated the RSI (relative strength index) of a stock manually. Program scans through all ticker symbols 
                                in a given watchlist and indicates whether the stock is oversold/overbought.
                    </p>
                    </blockquote>
                </div>

            </figure>

            <figure class="md:flex bg-gray-100 rounded-xl p-8 shadow-xl hover:shadow-2xl mt-10">
                <img class="w-48 h-48 md:w-48 md:h-48 mx-auto my-auto" src={project4} alt="" width="384" height="512" />
                <div class="pt-6 md:p-8 text-center space-y-4 mx-auto my-auto">
                    <blockquote>
                        <h3 class="text-xl font-semibold">Minesweeper</h3>
                        <p class="text-lg">
                                Recreated the classic game of Minesweeper with basic functionalities.
                    </p>
                    </blockquote>
                </div>

            </figure>
        </header>
    )
}