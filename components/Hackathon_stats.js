const HackathonStats = () => {

    const stats = [
        {
            data: "36",
            title: "Hours"
        },
        {
            data: "600+",
            title: "Federal Hackers"
        },
        {
            data: "8",
            title: "Tracks"
        },
        {
            data: "ꝏ",
            title: "Opportunities"
        },
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="text-white/80 text-5xl font-semibold sm:text-6xl">
                         HACKATHON NUMBERS
                    </h1>
                    <p className="mt-3 text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.
                    </p>
                </div>
                <div className="mt-12 text-3xl">
                    <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x ">
                        {
                            stats.map((item, idx) => (
                                <li key={idx} className="text-center px-12 md:px-16">
                                    <h4 className="text-4xl text-indigo-500 font-semibold">{item.data}</h4>
                                    <p className="mt-3 font-medium">{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default HackathonStats;