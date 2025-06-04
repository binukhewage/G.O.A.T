import logo from "../assets/goat.png";
import hero from "../assets/hero.jpg";
import tupac1 from "../assets/tupac1.jpg";
import tupac2 from "../assets/tupac2.jpg";
import tupac3 from "../assets/tupac3.jpg";
import tyson2 from "../assets/tyson2.jpg";
import tyson3 from "../assets/tyson3.jpg";
import arnold1 from "../assets/arnold1.jpg";
import col1 from "../assets/col1.jpg"
import fein from "../assets/FEIN.png"




export const assets = {
    hero,
    tupac1,
    tupac2,
    tupac3,
    tyson2,
    arnold1,
    logo,
    col1,
    fein
    
}

export const products = [
    {
        _id: "aa",
        name: "Tupac Tee",
        description: "Speak truth. Live real. The Tupac-Inspired Tee celebrates the voice of a generation. With iconic artwork and soft, breathable fabric, it blends culture, attitude, and authenticity. Whether you’re vibing to classic beats or making your own moves, this tee has your back.",
        image: [tupac1, tupac2, tupac3],
        category: "Men",
        price: 3000,
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        fit: "Oversized",
        fabric: "100% Cotton",
        date: 1716729600000,
        bestSeller: false,
        vol: 1,
    },
    {
        _id: "aab",
        name: "Mike Tyson Tee",
        description: "Step into the ring with the spirit of Iron Mike. The Mike Tyson-Inspired Tee delivers knockout style with gritty, powerful visuals that honor the baddest man on the planet. Crafted for comfort and presence, this tee brings raw energy to your streetwear rotation.",
        image: [hero, tyson2, tyson3],
        category: "Men",
        price: 3000,
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        fit: "Oversized",
        fabric: "100% Cotton",
        date: 1716729600000,
        bestSeller: true,
        vol: 1,
    },
    {
        _id: "aac",
        name: "Arnold Tee",
        description: "Unleash beast mode with the Arnold-Inspired Tee Designed for those who live and breathe the grind, this tee embodies old-school strength and modern edge. Featuring bold graphics and a premium cotton blend, it’s a tribute to the legacy of a true icon. Perfect for gym days or casual streetwear flex.",
        image: [arnold1],
        category: "Men",
        price: 3000,
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        fit: "Oversized",
        fabric: "100% Cotton",
        date: 1716729600000,
        bestSeller: false,
        vol: 1,
    },
    
]