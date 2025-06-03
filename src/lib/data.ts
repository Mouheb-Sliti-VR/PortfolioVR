import type { PortfolioProject } from "@/lib/types";

export const mockProjects: PortfolioProject[] = [
  {
    id: "1",
    title: "Orange's Partners Marketplace",
    description:
      "VR platform connecting brand owners and users in a dynamic VR product showcase",
    longDescription:
      "Developed a comprehensive XR platform in partnership with Orange, combining a web-based portal for partner onboarding, an immersive VR metaverse for users to discover and interact with partner products, and a robust real-time backend orchestrating sessions, content updates, and product management. Fully integrated within Orange’s infrastructure, the platform ensures seamless interoperability, scalability, and security — delivering an engaging, next-gen product showcase experience for both partners and end users",
    imageUrl: "/images/thumbnail.png",
    videoUrl:
      "https://drive.google.com/file/d/1NQTg-8tDYBBCyC85xCtkOb8FR60P7BZi/preview",
    dataAiHint: "VR showcase for Orange partners",
    tags: ["VR", "Unity", "E-commerce", "NodeJS", "Meta SDK","DevOps"],
    projectUrl: "#",
    client: "Orange France",
    date: "2025-03-15",
  },

  {
    id: "2",
    title: "SofreVerse: Digital Twin Office for Remote Work",
    description:
      "Immersive VR workspace transforming remote work by placing employees inside a highly detailed digital twin of Sofrecom’s office",
    longDescription:
      "SofreVerse is a fully immersive VR digital twin of Sofrecom’s headquarters, designed to provide employees with a seamless virtual workspace experience. Users create and customize avatars before entering the Sofrecom Virtual World, where they explore a meticulously recreated corporate campus. Within this environment, teams collaborate in realistic meeting rooms equipped with spatial audio, live screen sharing, and interactive whiteboards—perfectly replicating in-office interactions. Developed in Unity for scalable, cross-platform performance, SofreVerse enhances team cohesion and optimizes remote collaboration by combining high-fidelity visuals with intuitive, real-time communication tools is an immersive VR digital twin of the Sofrecom headquarters, crafted to offer employees a seamless virtual workspace. Users can register and customize their avatars before entering the Sofrecom Virtual World, where they navigate a highly detailed replication of the corporate campus. Within this environment, teams convene in realistic virtual meeting rooms featuring spatial audio, live screen sharing, and interactive whiteboards—mirroring the collaborative dynamics of an in-office setting. Built in Unity for scalable cross-platform performance, Sofreverse fosters team cohesion and streamlines remote collaboration by blending high-fidelity visuals with intuitive, real-time communication tools.",
    imageUrl: "/images/sofreverse.png",
    videoUrl: `https://drive.google.com/file/d/1mR7PzRSKqay2xEi7XiuBx0cxbuKtCu47/preview`,
    dataAiHint: "augmented reality furniture",
    tags: ["3D Modeling", "SteamVR", "NodeJS", "Unity", "RPCs"],
    projectUrl: "#",
    client: "Sofrecom Tunisia.",
    date: "2023-03-20",
  },
  {
    id: "3",
    title: "VR Fire Drill: Interactive Safety Training",
    description:
      "Immersive VR fire extinguisher training experience designed for Sofrecom’s office staff, enhancing workplace safety through interactive simulation",
    longDescription:
      "An interactive virtual reality training application designed for Sofrecom employees, offering a realistic and engaging environment to practice fire extinguisher use and emergency response procedures. The experience simulates fire incidents within a virtual replica of Sofrecom’s office, providing users with step-by-step guidance throughout the training. To reinforce learning, XR4RSE integrates interactive quizzes that assess users’ knowledge of fire safety protocols and best practices. By combining hands-on VR simulation, in-app guidance, and knowledge validation, the application enhances safety awareness, procedural confidence, and overall emergency preparedness in the workplace.",
    imageUrl: "/images/fire.png",
    videoUrl: `https://drive.google.com/file/d/1-z5Jt-9Gx2mxWf7PEhUoQmbv52GizfQb/preview`,
    dataAiHint: "vr training fire fight",
    tags: ["VR", "Simulation", "Training", "leaderboard", "Unity"],
    projectUrl: "#",
    client: "Sofrecom Tunisie",
    date: "2023-09-01",
  },
  {
    id: "4",
    title: "Just Beat It",
    description:
      "Collaborative VR maze game promoting teamwork and communication through immersive turn-based challenges.",
    longDescription:
      "Just Beat It is a virtual reality team-building experience designed for corporate environments. In this turn-based maze game, four players share a single headset, each taking 2-minute turns to explore a shared labyrinth, shoot targets, and gather points. The game emphasizes communication, cooperation, and strategy, with each player uncovering parts of the maze visible on a shared mini-map. Fully offline, portable, and eco-conscious, Just Beat It offers an engaging way to strengthen team dynamics while minimizing environmental impact. Ideal for on-site workshops or internal company events.",
    imageUrl: "/images/justbeatit.png",
    videoUrl: `https://drive.google.com/file/d/1ZfM7NyB5ZsFKscL31AonWwaubwbszLL2/preview`,
    dataAiHint: "VR team building maze game",
    tags: ["VR", "Team Building", "Game", "Eco-Friendly", "Offline"],
    projectUrl: "#",
    client: "Orange Innovation Cup",
    date: "2024-06-15",
  },
  {
    id: "5",
    title: "Orange Extended Store",
    description:
      "A VR-powered immersive shopping experience connecting Orange's offers to the metaverse.",
    longDescription:
      "The Orange Extended Store is a Unity-based VR application designed to act as a new digital channel for Orange customers. Users can explore Orange's catalog of offers and services inside a fully immersive virtual store, interact with partner zones, personalize their avatars, and access premium content using digital tokens. Connected to Orange's backend systems via a Node.js gateway, the app ensures real-time interaction and a seamless customer experience. This eco-friendly solution reflects Orange's innovation and sustainability goals.",
    imageUrl: "/images/extended store.png",
    videoUrl:
      "https://drive.google.com/file/d/18XTI9v9pkl09nL9Z_kKjIfflBh0IOeTK/preview",
    dataAiHint: "VR orange immersive shopping",
    tags: ["VR", "Unity", "Node.js", "RetailTech", "Docker", "DevOps"],
    projectUrl: "#",
    client: "Orange Innovation France",
    date: "2024-11-30",
  },
  {
    id: "6",
    title: "BrunoBot: Orange's Virtual Assistant",
    description:
      "Meet Bruno: a lifelike 3D avatar of Orange’s CTO & Innovation Officer that lets you ask questions about Orange innovation and IT trends by voice—and hear Bruno’s authentic voice respond in real time",
    longDescription:
      "Step into a unique experience where Bruno Zerbib, Orange’s CTO & Innovation Officer, comes to life as a friendly 3D avatar. Bruno welcomes you into a vibrant virtual space where you can simply speak your questions about Orange’s latest innovations or current IT trends. In response, Bruno’s own voice explains everything in a clear, conversational style—as if you were chatting with him in person. Whether you’re curious about new projects at Orange or want quick insights into the tech world, , Bruno is always available to guide, inform, and inspire you within a beautifully crafted digital environment.",
    imageUrl: "/images/bzbot.png",
    videoUrl: `https://drive.google.com/file/d/1-e6eenJH1TmiLbaGNN8V_OoSpHiKWyUI/preview`,
    dataAiHint: "vr game story",
    tags: ["Unity", "AI Llama3.2", "TTS & STT", "Voice Conversion", "3D ChatBot"],
    projectUrl: "#",
    client: "Orange Innovation France",
    date: "2025-01-12",
  },
  {
    id: "6",
    title: "HomeSensor VR",
    description:
      "Step into a virtual smart environment where you can monitor live IoT data—temperature, humidity, occupancy, and light levels—through an immersive dashboard",
    longDescription:
      "HomeSensor VR transports you into a beautifully rendered virtual replica of your own living space, powered by Unreal Engine. Real-time feeds from IoT sensors (temperature, humidity, room occupancy, and luminosity) update an interactive dashboard right before your eyes. As the physical room’s conditions change, HomeSensor VR mirrors them instantly—letting you adjust settings, explore data visualizations, and truly feel in control of your environment. Whether you’re investigating smart-home scenarios, testing new automation ideas, or simply marveling at the fusion of real-world data and VR, HomeSensor VR delivers a seamless, captivating experience that brings IoT monitoring to life",
    imageUrl: "/images/home.png",
    videoUrl: `https://drive.google.com/file/d/1F7GYyAz7LD0zdwnmN6OXBpzbxDaLIQMg/preview`,
    dataAiHint: "vr game story",
    tags: ["VR", "Unreal Engine", "IoT", "Real-Time Data", "Interactive Dashboard"],
    projectUrl: "#",
    client: "Sofrecom Tunisia",
    date: "2023-06-30",
  },
];
