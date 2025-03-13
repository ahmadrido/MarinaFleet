import ShinyText from "../ui/ShinyText";
import SpotlightCard from "../ui/SpotLight"


const data = [
    {
        id: 1,
        name: "Jane Doe",
        img: "https://randomuser.me/api/portraits/women/12.jpg",
        title: "Translator",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam!",
    },
    {
        id: 2,
        name: "Daniella Doe",
        img: "https://randomuser.me/api/portraits/women/14.jpg",
        title: "Mobile dev",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam!",
    },
    {
        id: 3,
        name: "Sarah Doe",
        img: "https://randomuser.me/api/portraits/women/4.jpg",
        title: "Mobile dev",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam!",
    },
    {
        id: 4,
        name: "Victoria Doe",
        img: "https://randomuser.me/api/portraits/women/3.jpg",
        title: "Creative director",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam!",
    },
    {
        id: 5,
        name: "Kate Doe",
        img: "https://randomuser.me/api/portraits/women/10.jpg",
        title: "Consultant",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam!",
    },
    {
        id: 6,
        name: "Yvonne Doe",
        img: "https://randomuser.me/api/portraits/women/7.jpg",
        title: "Content Creator",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam!",
    }

]

const Testimoni = () => {
    return (
        <div className="text-gray-600 dark:text-gray-300 relative pb-30 dark:bg-gray-900" id="reviews">

    <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">

        <div className="mb-10 space-y-4 px-6 md:px-0">
            <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                <ShinyText text="What our customers say" disabled={false} speed={3} className='custom-class' />
            </h2>
        </div>

        <div className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>


        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
            {
                data.map((item, idx) => (
                        <SpotlightCard key={idx} className="custom-spotlight-card aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none" spotlightColor="rgba(255, 255, 255, 0.3)">
                    <div className="flex gap-4">
                        <img className="w-12 h-12 rounded-full" src={item.img} alt="user avatar" width="400" height="400" loading="lazy" />
                        <div>
                            <h6 className="text-lg font-medium text-gray-700 dark:text-white">{item.name}</h6>
                            <p className="text-sm text-gray-500 dark:text-gray-300">{item.title}</p>
                        </div>
                    </div>
                    <p className="mt-4">
                        {item.desc}
                    </p>
                    </SpotlightCard>
                ))
            }
        </div>
    </div>
</div>
);
}

export default Testimoni