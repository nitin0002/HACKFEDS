import { Medal } from "./LottieAnim";

const WinnerFemale =(props) => {
    return (
       
<div class="flex-wrap items-center justify-center gap-8 text-center sm:flex">
    <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
        <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
                <svg width="20" height="20" fill="currentColor" class="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                    </path>
                </svg>
            </div>
        </div>
        <h3 class="py-4 text-2xl font-semibold text-gray-700 lg:text-3xl sm:text-xl dark:text-white">
            Best Women Team
        </h3>
        <p class="py-4 text-gray-500 text-md dark:text-gray-300">
            Encompassing today’s website design technology to integrated and build solutions relevant to your business.
        </p>
    </div>
    <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24 dark:bg-gray-800">
        <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-20 h-20 mx-auto text-white bg-indigo-500 rounded-md">
                <Medal />
                <svg width="20" height="20" fill="currentColor" class="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    {/* <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                    </path> */}
                </svg>
            </div>
        </div>
        <h3 class="py-4 text-2xl font-semibold text-gray-700 lg:text-4xl sm:text-xl dark:text-amber-400">
            Best Solo Hacker
        </h3>
        <p class="py-4 text-gray-500 text-md dark:text-gray-300">
            Share relevant, engaging, and inspirational brand messages to create a connection with your audience.
        </p>
    </div>
    <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
        <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
                <svg width="20" height="20" fill="currentColor" class="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                    </path>
                </svg>
            </div>
        </div>
        <h3 class="py-4 text-2xl font-semibold text-gray-700lg:text-3xl sm:text-xl dark:text-white">
            2nd Best Women Team
        </h3>
        <p class="py-4 text-gray-500 text-md dark:text-gray-300">
            Let us help you level up your search engine game, explore our solutions for digital marketing for your business.
        </p>
    </div>
</div>

    )
}
export default WinnerFemale;