const products = [
  {
    id: 1,
    title: "ASUS ROG Zephyrus G14",
    price: "1799.99",
    category: "Laptops",
    description:
      "A high-performance gaming laptop with AMD Ryzen 9, RTX 4060, and a 120Hz QHD display. Compact, powerful, and stylish.",
    image: "/assets/imgs/laptops/asus-rog-zephyrus-g14.jpg",
  },
  {
    id: 2,
    title: "MSI GeForce RTX 4060 Ti VENTUS 2X BLACK",
    price: "2299.99",
    category: "Graphic Cards",
    description:
      "VENTUS brings a fundamentally solid experience to users looking for a performance graphics card. A sharp-looking updated design with TORX FAN 4.0 lets VENTUS breeze through any task.",
    image: "/assets/imgs/msi-geforce-rtx-4060-ti-ventus-2x-black.jpg",
  },
  {
    id: 3,
    title: "ASUS TUF Gaming VG27AQ",
    price: "429.99",
    category: "Monitors",
    description:
      "1440p 165Hz IPS gaming monitor with ELMB Sync and G-Sync compatibility. Built for competitive gaming performance.",
    image: "/assets/imgs/monitors/asus-tuf-vg27aq.jpg",
  },
  {
    id: 4,
    title: "ZOTAC GAMING GeForce RTX 4070 Twin Edge",
    price: "949.99",
    category: "Graphic Cards",
    description:
      "Compact dual-fan GPU optimized for tight spaces, featuring IceStorm 2.0 cooling and support for real-time ray tracing.",
    image: "/assets/imgs/zotac-geforce-rtx-4070-twin-edge.jpg",
  },
  {
    id: 5,
    title: "ASUS TUF Gaming Radeon RX 7900 XT OC",
    price: "899.99",
    category: "Graphic Cards",
    description:
      "The TUF Gaming RX 7900 XT brings high-end AMD performance with a strong thermal design for 4K gaming enthusiasts.",
    image: "/assets/imgs/asus-tuf-rx-7900-xt.jpg",
  },
  {
    id: 6,
    title: "XFX Speedster MERC319 RX 6800 XT",
    price: "799.99",
    category: "Graphic Cards",
    description:
      "With a triple-fan layout and sleek design, the RX 6800 XT MERC319 offers powerful performance and low temperatures under load.",
    image: "/assets/imgs/xfx-rx-6800-xt-merc319.jpg",
  },
  {
    id: 7,
    title: "MSI Radeon RX 6700 XT MECH 2X",
    price: "549.99",
    category: "Graphic Cards",
    description:
      "Efficient and stylish, the RX 6700 XT MECH 2X delivers solid 1440p gaming performance with TORX FAN 3.0 cooling.",
    image: "/assets/imgs/msi-rx-6700-xt-mech-2x.jpg",
  },
  {
    id: 8,
    title: "EVGA GeForce RTX 3090 FTW3 ULTRA",
    price: "1799.99",
    category: "Graphic Cards",
    description:
      "A powerhouse GPU with massive 24GB GDDR6X VRAM for 8K gaming, AI workloads, and professional 3D rendering tasks.",
    image: "/assets/imgs/evga-geforce-rtx-3090-ftw3.jpg",
  },
  {
    id: 9,
    title: "PowerColor Hellhound RX 7800 XT",
    price: "699.99",
    category: "Graphic Cards",
    description:
      "Hellhound's dual 100mm fans and blue LED design deliver excellent thermal performance for intense gaming sessions.",
    image: "/assets/imgs/powercolor-rx-7800-xt-hellhound.jpg",
  },
  {
    id: 10,
    title: "ASRock Phantom Gaming Arc A770",
    price: "399.99",
    category: "Graphic Cards",
    description:
      "Intel’s Arc A770 is a budget-friendly option for 1080p and light 1440p gaming, offering AV1 hardware encoding and XeSS support.",
    image: "/assets/imgs/asrock-arc-a770-phantom.jpg",
  },
  // 💻 Laptops
  {
    id: 11,
    title: "Asus ProArt GeForce RTX 4070",
    price: "999.99",
    category: "Graphic Cards",
    description:
      "The SFF-ready ProArt GeForce RTX™ 4070 SUPER OC Edition 12GB GDDR6X brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX™ 40 SUPER Series performance.",
    image: "/assets/imgs/asus-proart-geforce-rtx-4070.jpg",
  },
  {
    id: 12,
    title: "Dell XPS 13 Plus",
    price: "1499.99",
    category: "Laptops",
    description:
      "A premium ultrabook featuring Intel i7 13th Gen, edge-to-edge display, and minimalist design for professionals.",
    image: "/assets/imgs/laptops/dell-xps-13-plus.jpg",
  },

  {
    id: 13,
    title: "HP Omen 16",
    price: "1599.99",
    category: "Laptops",
    description:
      "Gaming powerhouse with Intel i7 13th Gen, RTX 4070, and a 16.1-inch 165Hz display. Built for performance and thermal control.",
    image: "/assets/imgs/laptops/hp-omen-16.jpg",
  },
  {
    id: 14,
    title: "Lenovo Legion 5 Pro",
    price: "1399.99",
    category: "Laptops",
    description:
      "Ryzen 7 powered laptop with RTX 3060 and a 16-inch WQXGA screen for competitive gaming and creative work.",
    image: "/assets/imgs/laptops/lenovo-legion-5-pro.jpg",
  },
  {
    id: 15,
    title: "Apple MacBook Air M2",
    price: "1199.99",
    category: "Laptops",
    description:
      "The MacBook Air with Apple Silicon M2 chip, ultra-lightweight, fanless design, and long battery life for everyday work.",
    image: "/assets/imgs/laptops/macbook-air-m2.jpg",
  },
  {
    id: 16,
    title: "Acer Aspire 7",
    price: "749.99",
    category: "Laptops",
    description:
      "Budget-friendly laptop with Ryzen 5 and GTX 1650 graphics. Great for students, light gaming, and productivity.",
    image: "/assets/imgs/laptops/acer-aspire-7.jpg",
  },

  // 🖥️ Monitors
  {
    id: 17,
    title: "GIGABYTE RTX 4080 GAMING OC",
    price: "1199.99",
    category: "Graphic Cards",
    description:
      "Powered by NVIDIA DLSS 3, ultra-efficient Ada Lovelace architecture, and full ray tracing, this GPU is ideal for gamers and creators alike.",
    image: "/assets/imgs/gigabyte-geforce-rtx-4080-gaming-oc.jpg",
  },
  {
    id: 18,
    title: "BenQ PD2700U Designer Monitor",
    price: "499.99",
    category: "Monitors",
    description:
      "27-inch 4K UHD IPS monitor built for professionals, with 100% sRGB color accuracy and CAD/CAM mode.",
    image: "/assets/imgs/monitors/benq-pd2700u.jpg",
  },
  {
    id: 19,
    title: "AOC 24G2 24-Inch",
    price: "219.99",
    category: "Monitors",
    description:
      "Affordable 144Hz gaming monitor with IPS panel and 1ms response time. Great value for smooth gameplay.",
    image: "/assets/imgs/monitors/aoc-24g2.jpg",
  },
  {
    id: 20,
    title: "Dell UltraSharp U2723QE",
    price: "649.99",
    category: "Monitors",
    description:
      "Professional 27-inch 4K monitor with PremierColor and USB-C hub, ideal for multitasking and accurate design work.",
    image: "/assets/imgs/monitors/dell-u2723qe.jpg",
  },

  {
    id: 21,
    title: "LG UltraGear 27GN950-B",
    price: "799.99",
    category: "Monitors",
    description:
      "A 27-inch 4K Nano IPS gaming monitor with 1ms response time and G-Sync compatibility for elite-level performance.",
    image: "/assets/imgs/monitors/lg-ultragear-27gn950-b.jpg",
  },
  {
    id: 22,
    title: "Samsung Smart Monitor M8",
    price: "649.99",
    category: "Monitors",
    description:
      "A 32-inch 4K UHD monitor with smart TV apps, wireless connectivity, and workspace mode — ideal for hybrid use.",
    image: "/assets/imgs/monitors/samsung-smart-monitor-m8.jpg",
  },
  // ⚡ Power Supplies
  {
    id: 23,
    title: "Cooler Master V850 SFX Gold",
    price: "169.99",
    category: "Power Supply",
    description:
      "SFX-sized PSU with 850W output, fully modular design, and ultra-quiet fan for compact, high-end builds.",
    image: "/assets/imgs/powersupply/coolermaster-v850-sfx.jpg",
  },
  {
    id: 24,
    title: "Thermaltake Toughpower GF1 750W",
    price: "109.99",
    category: "Power Supply",
    description:
      "Fully modular 80+ Gold certified PSU with silent hydraulic bearing fan and excellent voltage regulation.",
    image: "/assets/imgs/powersupply/thermaltake-gf1-750w.jpg",
  },
  {
    id: 25,
    title: "Be Quiet! Straight Power 11 850W",
    price: "159.99",
    category: "Power Supply",
    description:
      "Exceptionally quiet 850W PSU with 80 PLUS Gold certification and top-tier build quality for noise-sensitive builds.",
    image: "/assets/imgs/powersupply/bequiet-straight-power-11.jpg",
  },
  {
    id: 26,
    title: "Gigabyte P850GM 80+ Gold",
    price: "99.99",
    category: "Power Supply",
    description:
      "Affordable 850W power supply with 80+ Gold efficiency and fully modular cable system for easy cable management.",
    image: "/assets/imgs/powersupply/gigabyte-p850gm.jpg",
  },
  {
    id: 27,
    title: "Corsair RM850x 80+ Gold",
    price: "149.99",
    category: "Power Supply",
    description:
      "Fully modular 850W power supply with 80 PLUS Gold efficiency, low-noise operation, and reliable Japanese capacitors.",
    image: "/assets/imgs/powersupply/corsair-rm850x.jpg",
  },
  {
    id: 28,
    title: "Seasonic FOCUS GX-750",
    price: "129.99",
    category: "Power Supply",
    description:
      "Compact and quiet 750W fully modular PSU with premium build quality and stable power delivery for gaming rigs.",
    image: "/assets/imgs/powersupply/seasonic-focus-gx-750.jpg",
  },
];

export default products;
