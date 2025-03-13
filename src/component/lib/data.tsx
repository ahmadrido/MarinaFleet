    export interface BoatDetails {
    id: string;
    name: string;
    type: string;
    capacity: number;
    length: string;
    price: string;
    features: string[];
    images: string[];
    description: string;
  }

    export const boats: BoatDetails[] = [
    {
      id: "yacht-1",
      name: "Ocean Voyager",
      type: "Luxury Yacht",
      capacity: 12,
      length: "78 ft",
      price: "$2,500/day",
      features: [
        "4 Luxury Cabins",
        "Spacious Sundeck",
        "Swimming Platform",
        "Fully Equipped Kitchen",
        "Air Conditioning",
        "Sound System",
        "WiFi"
      ],
      images: ["https://newimages.yachtworld.com/resize/1/18/98/6521898_20171108093741165_1_XLARGE.jpg?f=/1/18/98/6521898_20171108093741165_1_XLARGE.jpg&w=3091&h=2318&t=1510166414000", "https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?cs=srgb&dl=boat-luxury-river-163236.jpg&fm=jpg", "http://wunwun.com/wp-content/uploads/2020/04/load-image-48.jpeg"],
      description: "The Ocean Voyager is our premier luxury yacht offering an unmatched experience on the water. Perfect for day cruises, overnight stays, or special events. Its elegant design and spacious layout provide comfort and style for up to 12 guests."
    },
    {
      id: "catamaran-1",
      name: "Wind Dancer",
      type: "Catamaran",
      capacity: 8,
      length: "45 ft",
      price: "$1,200/day",
      features: [
        "2 Cabins",
        "Stable Multi-hull Design",
        "Trampoline Sundeck",
        "Compact Galley",
        "Snorkeling Gear",
        "Bluetooth Speaker System"
      ],
      images: ["https://worthly.com/wp-content/uploads/2017/01/Hemisphere-Catamaran-1.jpg", "https://i.pinimg.com/originals/1a/fe/1a/1afe1a25627a6e101fd9ebdf3f5974fd.jpg"],
      description: "Wind Dancer offers stability and speed with its catamaran design. Ideal for day trips and coastal explorations, this vessel provides a comfortable and exciting sailing experience for families and small groups."
    },
    {
      id: "speedboat-1",
      name: "Sea Sprint",
      type: "Speedboat",
      capacity: 6,
      length: "28 ft",
      price: "$650/day",
      features: [
        "High Performance Engine",
        "Comfortable Seating",
        "Bimini Top Sun Cover",
        "Bluetooth Audio System",
        "Cooler Storage",
        "Water Sports Ready"
      ],
      images: ["https://www.yachtworld.com/research/files/2022/02/42Auroris-Hero-BG-sized-1536x1035.jpg"],
      description: "For thrill-seekers and water sports enthusiasts, Sea Sprint delivers exhilarating performance and agility. This speedboat is perfect for island hopping, wakeboarding, or simply enjoying a fast-paced day on the water."
    },
    {
      id: "pontoon-1",
      name: "Leisure Bay",
      type: "Pontoon Boat",
      capacity: 14,
      length: "26 ft",
      price: "$450/day",
      features: [
        "Spacious Open Layout",
        "Comfortable Lounge Seating",
        "Swim Ladder",
        "Bimini Top",
        "Small Kitchenette",
        "Fishing Rod Holders"
      ],
      images: ["https://goldstarmarinarentals.com/wp-content/uploads/2018/08/resize_pic.jpg"],
      description: "Leisure Bay combines comfort and functionality for relaxed days on the water. This pontoon boat is ideal for family outings, casual fishing trips, or calm water cruising with its stable platform and ample seating."
    },
    {
      id: "sailboat-1",
      name: "Breeze Chaser",
      type: "Sailboat",
      capacity: 6,
      length: "36 ft",
      price: "$800/day",
      features: [
        "Classic Sailing Experience",
        "2 Sleeping Cabins",
        "Navigation Equipment",
        "Small Galley",
        "Marine Toilet",
        "Solar Charging"
      ],
      images: ["http://www.mcmichaelyachtbrokers.com/wp-content/uploads/j45-1-article.jpg"],
      description: "Experience the traditional joy of sailing with Breeze Chaser. This well-maintained sailboat offers a peaceful and eco-friendly way to explore coastal waters while providing essential comforts for day trips or overnight adventures."
    }
  ];


    export interface TourPackageDetails {
    id: string;
    name: string;
    duration: string;
    price: string;
    destinations: string[];
    includes: string[];
    description: string;
    images: string[];
    highlights: string;
    difficulty: string;
    maxParticipants: number;
  }

    export const tourPackages: TourPackageDetails[] = [
    {
      id: "island-hopping",
      name: "Island Hopping Adventure",
      duration: "Full Day (8 hours)",
      price: "$350/person",
      destinations: [
        "Secret Beach",
        "Coral Bay",
        "Turtle Island",
        "Tropical Lagoon"
      ],
      includes: [
        "Professional Captain & Guide",
        "Gourmet Lunch & Refreshments",
        "Snorkeling Equipment",
        "Life Jackets",
        "Towels & Beach Amenities",
        "Underwater Camera Use"
      ],
      description: "Experience the ultimate island-hopping adventure as we take you to four breathtaking locations in a single day. Swim in crystal-clear waters, explore hidden beaches, and encounter diverse marine life in this unforgettable journey.",
      images: ["https://2.bp.blogspot.com/-Y4I5A5BIsRM/WK7c6QaOVvI/AAAAAAAAy18/6SlspBuBjFYwutPGA7LPNqRCAykXjGWCwCPcB/s1600/DSC08124.JPG", "https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg", "https://cdn.pixabay.com/photo/2021/08/03/11/48/canal-6519196_1280.jpg"],
      highlights: "Snorkeling at pristine coral reefs, discovering hidden lagoons, and encountering sea turtles in their natural habitat",
      difficulty: "Easy to Moderate",
      maxParticipants: 12
    },
    {
      id: "sunset-cruise",
      name: "Romantic Sunset Cruise",
      duration: "3 hours",
      price: "$180/person",
      destinations: [
        "Harbor Bay",
        "Sunset Point",
        "Coastal Waters"
      ],
      includes: [
        "Champagne Welcome",
        "Gourmet Appetizers & Desserts",
        "Professional Photography",
        "Live Acoustic Music",
        "Cozy Blankets",
        "Custom Keepsake"
      ],
      description: "Experience the magic of twilight on the water with our intimate sunset cruise. Perfect for couples celebrating special occasions or anyone seeking a peaceful evening surrounded by natural beauty.",
      images: ["https://www.expedia.com/stories/wp-content/uploads/2021/09/Hero-cruise-couple-sunset.jpg", "http://cdn.patchcdn.com/users/2126828/2013/01/T800x600/4e787371b7dfb81bcdf7343c3a75dbe.jpg"],
      highlights: "Spectacular sunset views, intimate atmosphere, gourmet dining experience on the water",
      difficulty: "Easy",
      maxParticipants: 8
    },
    {
      id: "fishing-expedition",
      name: "Deep Sea Fishing Expedition",
      duration: "6 hours",
      price: "$275/person",
      destinations: [
        "Offshore Fishing Grounds",
        "Reef Drop-offs",
        "Blue Water Zones"
      ],
      includes: [
        "Professional Fishing Guide",
        "All Fishing Equipment",
        "Bait & Tackle",
        "Lunch & Beverages",
        "Fish Cleaning Service",
        "Fishing License"
      ],
      description: "Join our experienced captains for an exciting deep-sea fishing adventure. Target trophy fish species in prime fishing grounds with top-quality equipment and expert guidance for anglers of all skill levels.",
      images: ["https://www.cancunfishing.com/images/og/fishing-cancun-charters.jpg", "https://www.sealeveler.com/wp-content/uploads/2017/07/beautiful-sail-fish.jpg"],
      highlights: "Opportunity to catch trophy fish, expert guidance from seasoned anglers, all equipment provided",
      difficulty: "Moderate",
      maxParticipants: 6
    },
    {
      id: "diving-adventure",
      name: "Scuba Diving Adventure",
      duration: "5 hours",
      price: "$225/person",
      destinations: [
        "Coral Gardens",
        "Shipwreck Site",
        "Underwater Caves"
      ],
      includes: [
        "PADI Certified Instructor",
        "Complete Diving Equipment",
        "Underwater Photography",
        "Marine Life Guide",
        "Light Refreshments",
        "Dive Certification (optional extra)"
      ],
      description: "Discover the underwater world with our guided scuba diving tours. Explore vibrant coral reefs, mysterious shipwrecks, and encounter fascinating marine creatures in their natural habitat.",
      images: ["https://adventure.com/wp-content/uploads/2017/11/Hero-Snorkeling-in-Iceland-Silfra-snorkeling-Photo-courtesy-of-Dive.is-2-1920x1080.jpg", "https://i.pinimg.com/originals/97/e8/e1/97e8e1eb8ec4e882b4329639f5327a14.jpg"],
      highlights: "Exploring diverse underwater ecosystems, professional guidance, suitable for beginners and experts",
      difficulty: "Moderate to Advanced",
      maxParticipants: 8
    },
    {
      id: "eco-tour",
      name: "Eco Marine Safari",
      duration: "4 hours",
      price: "$195/person",
      destinations: [
        "Mangrove Channels",
        "Dolphin Spotting Areas",
        "Bird Sanctuary",
        "Conservation Zone"
      ],
      includes: [
        "Marine Biologist Guide",
        "Educational Materials",
        "Binoculars & Viewing Equipment",
        "Eco-friendly Refreshments",
        "Conservation Contribution",
        "Children's Activity Pack"
      ],
      description: "This educational eco-tour focuses on marine conservation and wildlife observation. Learn about local ecosystems while spotting dolphins, sea birds, and other wildlife in their natural habitats.",
      images: ["https://cdn.getyourguide.com/img/tour/5c2c3f707d465.jpeg/98.jpg", "https://img.rezdy.com/PRODUCT_IMAGE/5319/IMG_9527_LJ_lg.jpg"],
      highlights: "Dolphin watching, educational experience, contribution to marine conservation efforts",
      difficulty: "Easy",
      maxParticipants: 15
    }
  ];
