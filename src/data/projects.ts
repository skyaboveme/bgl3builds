import type { ImageMetadata } from "astro";
import waterfront from "../assets/projects/waterfront-deck.jpg";
import coastal from "../assets/projects/coastal-home.jpg";
import ramp from "../assets/projects/deck-ramp.jpg";
import wineWall from "../assets/projects/wine-wall.jpg";
import pergolaDeck from "../assets/projects/pergola-deck.jpg";
import deckStairs from "../assets/projects/deck-stairs.jpg";

export interface Project {
  slug: string;
  title: string;
  location: string;
  services: string[];
  summary: string;
  image: ImageMetadata;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "waterfront-deck",
    title: "Waterfront deck & dock living",
    location: "Canal residence",
    services: ["Decks", "Docks", "Add-ons"],
    summary:
      "An expansive deck with modern railings, looking out over canal docks and multi-level waterfront structure. Built for gatherings, boats, and weather.",
    image: waterfront,
    featured: true,
  },
  {
    slug: "coastal-exterior",
    title: "Coastal exterior & trim",
    location: "Two-story residence",
    services: ["Remodels", "Trim work", "Doors & windows"],
    summary:
      "Board-and-batten siding, custom garage doors, and a sharp teal fascia line — exterior finish work that gives a house its character.",
    image: coastal,
    featured: true,
  },
  {
    slug: "deck-and-ramp",
    title: "Covered deck & accessibility ramp",
    location: "Residential add-on",
    services: ["Decks", "Add-ons", "Custom builds"],
    summary:
      "A covered outdoor room paired with a switchback accessibility ramp and full wood railings — structure that is useful, sturdy, and finished.",
    image: ramp,
    featured: true,
  },
  {
    slug: "wine-wall",
    title: "Custom wine wall & staircase feature",
    location: "Interior custom build",
    services: ["Custom builds", "Finish work", "Cabinets"],
    summary:
      "A floor-to-ceiling wine display wall with suspended wood slats and glass framing alongside hardwood stair treads — precision detail work that becomes the centerpiece of the home.",
    image: wineWall,
    featured: true,
  },
  {
    slug: "pergola-deck",
    title: "Pergola deck with built-in seating",
    location: "Hilltop residence",
    services: ["Decks", "Custom builds", "Add-ons"],
    summary:
      "An elevated cedar pergola deck with a custom built-in bench, wire panel railings, and views through the tree canopy — outdoor living that is both structural and inviting.",
    image: pergolaDeck,
    featured: true,
  },
  {
    slug: "deck-stairs-privacy",
    title: "Deck stairs & privacy screen",
    location: "Residential exterior",
    services: ["Decks", "Fences", "Custom builds"],
    summary:
      "A multi-level deck staircase with a tall cedar privacy screen and wire mesh railing — clean functional access to an elevated outdoor space, built to last.",
    image: deckStairs,
    featured: true,
  },
];
