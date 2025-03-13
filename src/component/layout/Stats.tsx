import CountUp from "../ui/Count"
import SplitText from "../ui/SplitText"

export default () => {

    const stats = [
        {
            data: "35",
            unit: "K",
            desc: "Customers consectetur adipiscing elit."
        },
        {
            data: "10",
            unit: "K+",
            desc: "Downloads efficitur id eu nulla facilisis turpis"
        },
        {
            data: "40",
            unit: "+",
            desc: "Countries maximus sit amet auctor sed,"
        },
        {
            data: "30",
            unit: "M+",
            desc: "Total revenue consectetur adipiscing elit"
        },
    ]

    return (
        <section className="py-28 bg-gray-900 h-full">
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl xl:mx-auto xl:text-center">
                    <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                        <SplitText text=" Our customers are always happy" />
                    </h3>
                    <p className="mt-3 text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="flex-wrap gap-x-12 gap-y-10 items-center space-y-8 sm:space-y-0 sm:flex xl:justify-center">
                        {
                            stats.map((item, idx) => (
                                <li key={idx} className="sm:max-w-[15rem] text-center">
                                    <h4 className="text-4xl text-white font-semibold"><CountUp from={0} to={parseInt(item.data)} duration={2} separator="," />{item.unit}</h4>
                                    <p className="mt-3 text-gray-400 font-medium">{item.desc}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="absolute inset-0 max-w-md mx-auto h-80 blur-[118px] sm:h-72" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
        </section>
    )
}