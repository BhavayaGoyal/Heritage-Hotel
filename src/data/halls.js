const hallsData = {
  boardrooms: [
    {
      id: 1,
      slug: "boardroom-1",
      name: "Executive Boardroom",
      capacity: 12,
      size: "25 sq m",
      description: "The Executive Boardroom is designed for high-level meetings that demand both sophistication and functionality. With luxurious leather chairs, a polished table, and advanced conferencing technology, it creates an environment where decision-makers can collaborate effectively. Natural light enhances the ambiance, while blackout blinds ensure distraction-free presentations. Catering and concierge services are available to provide an effortless and professional experience.",
       overview: [
       { icon: "Weekend", text: "Premium leather seating for executive comfort" }, 
       { icon: "Tv", text: "Integrated 4K conferencing and presentation system" },
       { icon: "Restaurant", text: "Personalized catering and refreshment service" },
       { icon: "WbSunny", text: "Ample natural light with blackout blinds" },
       { icon: "Wifi", text: "High-speed dedicated WiFi access" },
       { icon: "PresentToAll", text: "Built-in projector and smart whiteboard" }
      ],
       features: [
        "Mineral Water Bottles",
        "4K Video Conferencing",
        "Premium Sound System",
        "Built-in Projector",
        "Dedicated WiFi",
        "Catering Service",
        "Climate Control",
        "Executive Desk Seating",
        "Private Restroom Access",
        "On-Site IT Support",
        "High-Definition Recording",
        "Stationery & Writing Pads",
        "Complimentary Parking",
        "Wheelchair Accessibility"
      ],
      images: [
        "/boardroom1.jpeg",
        "/boardroom1-2.jpg",
        "/boardroom1-3.jpg"
      ]

    },
    {
      id: 2,
      slug: "boardroom-2",
      name: "Directors Boardroom",
      capacity: 10,
      size: "22 sq m",
      description: "The Directors Boardroom offers an intimate, soundproof setting ideal for confidential discussions and strategic meetings. Smart boards and conferencing phones ensure smooth collaboration, while natural light keeps the space vibrant. A dedicated refreshment station keeps the team energized throughout long sessions.",
      overview:[
       { icon: "Weekend", text: "Premium leather seating for executive comfort" }, 
       { icon: "Tv", text: "Integrated 4K conferencing and presentation system" },
       { icon: "Restaurant", text: "Personalized catering and refreshment service" },
       { icon: "WbSunny", text: "Ample natural light with blackout blinds" },
       { icon: "Wifi", text: "High-speed dedicated WiFi access" },
       { icon: "PresentToAll", text: "Built-in projector and smart whiteboard" }
      ],
      features: [
        "Mineral Water Bottles",
        "4K Video Conferencing",
        "Premium Sound System",
        "Built-in Projector",
        "Dedicated WiFi",
        "Catering Service",
        "Climate Control",
        "Executive Desk Seating",
        "Private Restroom Access",
        "On-Site IT Support",
        "High-Definition Recording",
        "Stationery & Writing Pads",
        "Complimentary Parking",
        "Wheelchair Accessibility"
      ],
      images:[ 
        "/boardroom2-1.jpg",
        "/boardroom2-2.jpg",
        "/boardroom2-3.jpg"
        ]
    },
    {
      id: 3,
      slug: "boardroom-3",
      name: "Conference Boardroom",
      capacity: 15,
      size: "28 sq m",
      description: "A versatile meeting room thoughtfully designed to adapt seamlessly for a variety of occasions. Whether you are hosting formal business presentations, executive strategy meetings, or collaborative brainstorming sessions, this space provides the ideal environment. Perfect for organizations seeking a professional yet comfortable venue that inspires productivity and creativity.",

     overview:[
       { icon: "Weekend", text: "Premium leather seating for executive comfort" }, 
       { icon: "Tv", text: "Integrated 4K conferencing and presentation system" },
       { icon: "Restaurant", text: "Personalized catering and refreshment service" },
       { icon: "WbSunny", text: "Ample natural light with blackout blinds" },
       { icon: "Wifi", text: "High-speed dedicated WiFi access" },
       { icon: "PresentToAll", text: "Built-in projector and smart whiteboard" }
      ],
      features: [
        "Mineral Water Bottles",
        "4K Video Conferencing",
        "Premium Sound System",
        "Built-in Projector",
        "Dedicated WiFi",
        "Catering Service",
        "Climate Control",
        "Executive Desk Seating",
        "Private Restroom Access",
        "On-Site IT Support",
        "High-Definition Recording",
        "Stationery & Writing Pads",
        "Complimentary Parking",
        "Wheelchair Accessibility"
      ],
      images: [
        "/boardroom3-1.jpg",
        "/boardroom3-2.jpg",
        "/boardroom3-3.jpg"
      ]
    },
  ],
  ballrooms: [
  {
    id: 1,
    slug: "grand-ballroom",
    name: "Grand Ballroom",
    capacity: 500,
    size: "500 sq m",
    description:
      "The Grand Ballroom is a majestic venue featuring soaring ceilings, crystal chandeliers, and elegant décor. Designed for large-scale galas, weddings, and corporate events, it offers a perfect blend of luxury and functionality. With a spacious dance floor, advanced AV technology, and professional staging facilities, this ballroom ensures that every event becomes truly unforgettable.",
    overview: [
      { icon: "Wifi", text: "High-speed Dedicated WiFi" },
      { icon: "Restaurant", text: "Full Catering & Banquet Services" },
      { icon: "PresentToAll", text: "Built-in Projector & LED Display" },
      { icon: "WbSunny", text: "Natural Lighting with Dimming Options" },
      { icon: "Weekend", text: "Luxurious Lounge Seating" },
      { icon: "Tv", text: "Integrated Audio-Visual System" }
    ],
    features: [
      "Crystal Chandeliers",
      "Professional Stage",
      "Dance Floor",
      "Full Catering Kitchen",
      "Multiple Entrances",
      "Premium Sound System",
      "Climate Control",
      "Complimentary Parking",
      "Wheelchair Accessibility",
      "On-Site IT Support",
      "Private Restroom Access",
      "VIP Lounge Access"
    ],
    images: ["/ballroom (4).png", "/ballroom (5).png", "/ballroom (6).png", "/ballroom (7).png", "/ballroom (8).png"]
  }
],

  banquetHalls: [
  {
    id: 1,
    slug: "mid-banquet-1",
    name: "Sapphire Banquet Hall",
    capacity: 120,
    size: "200 sq m",
    description:
      "The Sapphire Banquet Hall offers an elegant mid-size setting ideal for weddings, receptions, and corporate events. With its sophisticated ambiance, adjustable lighting, and flexible layout options, this venue adapts seamlessly to both intimate and lively gatherings. The hall’s modern design is complemented by excellent acoustics, ensuring a memorable experience for all guests.",
    overview: [
      { icon: "Wifi", text: "High-speed Dedicated WiFi" },
      { icon: "Restaurant", text: "Full Catering & Banquet Services" },
      { icon: "PresentToAll", text: "Built-in Projector & LED Display" },
      { icon: "WbSunny", text: "Natural Lighting with Dimming Options" },
      { icon: "Weekend", text: "Luxurious Lounge Seating" },
      { icon: "Tv", text: "Integrated Audio-Visual System" }

    ],
    features: [
      "Crystal Chandeliers",
      "Professional Stage",
      "Dance Floor",
      "Full Catering Kitchen",
      "Multiple Entrances",
      "Premium Sound System",
      "Climate Control",
      "Complimentary Parking",
      "Wheelchair Accessibility",
      "On-Site IT Support",
      "Private Restroom Access",
      "VIP Lounge Access"
    ],
    images: [
      "/mid-banquet1.jpg",
      "/mid-banquet2.jpg",
      "/mid-banquet3.jpg"
    ]
  },
  {
    id: 2,
    slug: "mid-banquet-2",
    name: "Emerald Banquet Hall",
    capacity: 100,
    size: "180 sq m",
    description:
      "The Emerald Banquet Hall is a charming venue designed for intimate gatherings and celebrations. With warm lighting, natural stone accents, and refined decor, it provides a cozy yet classy atmosphere. Its built-in bar and personalized event coordination services make it a popular choice for birthdays, anniversaries, and social functions.",
    overview: [
      { icon: "Wifi", text: "High-speed Dedicated WiFi" },
      { icon: "Restaurant", text: "Full Catering & Banquet Services" },
      { icon: "PresentToAll", text: "Built-in Projector & LED Display" },
      { icon: "WbSunny", text: "Natural Lighting with Dimming Options" },
      { icon: "Weekend", text: "Luxurious Lounge Seating" },
      { icon: "Tv", text: "Integrated Audio-Visual System" }

    ],
    features: [
      "Crystal Chandeliers",
      "Professional Stage",
      "Dance Floor",
      "Full Catering Kitchen",
      "Multiple Entrances",
      "Premium Sound System",
      "Climate Control",
      "Complimentary Parking",
      "Wheelchair Accessibility",
      "On-Site IT Support",
      "Private Restroom Access",
      "VIP Lounge Access"
    ],
    images: [
      "/banquetHall2.jpeg",
      "/banquetHall2 (1).png",
      "/banquetHall2 (2).png",
      "/banquetHall2 (3).png"
    ]
  },
  {
    id: 3,
    slug: "mid-banquet-3",
    name: "Ruby Banquet Hall",
    capacity: 140,
    size: "220 sq m",
    description:
      "The Ruby Banquet Hall blends modern design with high-end amenities, offering a contemporary space for memorable events. Its state-of-the-art LED lighting system, immersive video walls, and stylish interiors create a dynamic atmosphere perfect for conferences, product launches, and upscale celebrations.",
    overview: [
      { icon: "Wifi", text: "High-speed Dedicated WiFi" },
      { icon: "Restaurant", text: "Full Catering & Banquet Services" },
      { icon: "PresentToAll", text: "Built-in Projector & LED Display" },
      { icon: "WbSunny", text: "Natural Lighting with Dimming Options" },
      { icon: "Weekend", text: "Luxurious Lounge Seating" },
      { icon: "Tv", text: "Integrated Audio-Visual System" }

    ],
    features: [
      "Crystal Chandeliers",
      "Professional Stage",
      "Dance Floor",
      "Full Catering Kitchen",
      "Multiple Entrances",
      "Premium Sound System",
      "Climate Control",
      "Complimentary Parking",
      "Wheelchair Accessibility",
      "On-Site IT Support",
      "Private Restroom Access",
      "VIP Lounge Access"
    ],
    images: [
      "/banquetHall3 (1).png",
      "/banquetHall3 (2).png",
      "/banquetHall3 (3).png"
    ]
  }
],

largeHalls: [
  {
    id: 1,
    slug: "large-hall-1",
    name: "Majestic Hall",
    capacity: 250,
    size: "400 sq m",
    description:
      "Majestic Hall is a grand and spacious venue designed for large-scale events, exhibitions, and conferences. With its vaulted ceilings, cutting-edge projection systems, and access to a fully equipped commercial kitchen, it is perfectly suited for both corporate and social occasions. The hall also features seamless logistics support including loading dock access and dedicated security services.",
    overview: [
      { icon: "Wifi", text: "High-speed Dedicated WiFi" },
      { icon: "Restaurant", text: "Full Catering & Banquet Services" },
      { icon: "PresentToAll", text: "Built-in Projector & LED Display" },
      { icon: "WbSunny", text: "Natural Lighting with Dimming Options" },
      { icon: "Weekend", text: "Luxurious Lounge Seating" },
      { icon: "Tv", text: "Integrated Audio-Visual System" }

    ],
    features: [
      "Crystal Chandeliers",
      "Professional Stage",
      "Dance Floor",
      "Full Catering Kitchen",
      "Multiple Entrances",
      "Premium Sound System",
      "Climate Control",
      "Complimentary Parking",
      "Wheelchair Accessibility",
      "On-Site IT Support",
      "Private Restroom Access",
      "VIP Lounge Access"
    ],
    images: [
      "/largeHall1.jpg",
      "/largeHall2.jpg",
      "/largeHall3.jpg",
      "/largeHall4.jpg",
      "/largeHall5.jpg"
    ]
  },
  {
    id: 2,
    slug: "large-hall-2",
    name: "Imperial Hall",
    capacity: 280,
    size: "450 sq m",
    description:
      "Imperial Hall offers a stunning fusion of classical architecture and modern technology, making it an ideal space for prestigious events. With its marble flooring, built-in stage, and private VIP lounge, this hall provides an exclusive experience for weddings, cultural programs, and executive functions. Technical control facilities further enhance event management and delivery.",
    overview: [
      { icon: "Wifi", text: "High-speed Dedicated WiFi" },
      { icon: "Restaurant", text: "Full Catering & Banquet Services" },
      { icon: "PresentToAll", text: "Built-in Projector & LED Display" },
      { icon: "WbSunny", text: "Natural Lighting with Dimming Options" },
      { icon: "Weekend", text: "Luxurious Lounge Seating" },
      { icon: "Tv", text: "Integrated Audio-Visual System" }

    ],
    features: [
      "Crystal Chandeliers",
      "Professional Stage",
      "Dance Floor",
      "Full Catering Kitchen",
      "Multiple Entrances",
      "Premium Sound System",
      "Climate Control",
      "Complimentary Parking",
      "Wheelchair Accessibility",
      "On-Site IT Support",
      "Private Restroom Access",
      "VIP Lounge Access"
    ],
    images: [
      "/largeHall2 (1).png",
      "/largeHall2 (2).png",
      "/largeHall2 (3).png"
    ]
  }
]

};
export default hallsData;