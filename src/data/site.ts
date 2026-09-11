export const site = {
  name: "BGL3 Builds",
  shortName: "BGL3",
  tagline: "Forty-five years of building it right.",
  description:
    "Custom homes, remodels, decks, docks, cabinets, and finish work — 45 years of blueprint-true construction and customer service you can call back.",
  email: "hello@bgl3builds.com",
};

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    slug: "custom-homes",
    title: "Custom homes",
    short: "New builds planned from the drawings and finished for daily life.",
    long: "From the first footing to the last piece of trim, we build custom homes the way the prints specify — then stay close enough to get the living details right.",
  },
  {
    slug: "remodels",
    title: "Remodels",
    short: "Whole-house and room-by-room work that respects what is already there.",
    long: "We open walls, move kitchens, update baths, and reshape living space without treating your house like a job trailer. Clean work, clear communication, a finished room you can use.",
  },
  {
    slug: "add-ons",
    title: "Add-ons",
    short: "Rooms, porches, and expansions that look like they have always belonged.",
    long: "Additions only work when they match the house. We tie into existing structure, roof lines, and finish so the new square footage feels original — not bolted on.",
  },
  {
    slug: "decks",
    title: "Decks",
    short: "Outdoor rooms, covered living, and ramps built to take weather and use.",
    long: "Raised decks, covered patios, switchback ramps, and railings that stay true. We build outdoor structure that is square, drained, and ready for years of gatherings.",
  },
  {
    slug: "fences",
    title: "Fences",
    short: "Clean lines, solid posts, and gates that close the way they should.",
    long: "Privacy, picket, or property-line work — set plumb, spaced evenly, and finished so the fence is an asset, not a weekend project that shows.",
  },
  {
    slug: "docks",
    title: "Docks",
    short: "Waterfront structure built for boats, weather, and the long haul.",
    long: "Canal and waterfront docks need more than deck boards. We build framing, decking, and access that can live with water, sun, and regular use.",
  },
  {
    slug: "doors-windows",
    title: "Doors & windows",
    short: "Replacements that seal, operate, and sit square in the opening.",
    long: "Sliding doors, entries, and window packages installed the right way — flashed, shimmed, and trimmed so the house looks finished and stays weather-tight.",
  },
  {
    slug: "trim",
    title: "Trim work",
    short: "Casing, fascia, and finish carpentry that makes a house look complete.",
    long: "Interior and exterior trim is where a project either looks custom or looks rushed. We cut tight joints, run consistent reveals, and paint or stain for a clean close.",
  },
  {
    slug: "cabinets",
    title: "Custom cabinets",
    short: "Built-ins and casework fitted to the room, not pulled from a catalog.",
    long: "Kitchens, vanities, and storage built to the space. We measure twice, fit the boxes, and finish faces so the cabinetry looks like it grew with the house.",
  },
  {
    slug: "commercial",
    title: "Commercial construction",
    short: "Jobsite experience on commercial work, not only residential.",
    long: "Forty-five years includes commercial construction — coordinating trades, following the set of prints, and delivering work that can pass inspection and daily use.",
  },
  {
    slug: "blueprints",
    title: "Blueprint execution",
    short: "We read the drawings, ask the right questions, and build what they say.",
    long: "Plans are only as good as the crew that follows them. We take blueprints seriously: dimensions, notes, details, and the conversations that keep a build from drifting.",
  },
  {
    slug: "custom-builds",
    title: "Other custom builds",
    short: "If it is wood, structure, or finish — ask. We have likely built it.",
    long: "Specialty structures, outdoor living, and one-off carpentry sit alongside the core list. If you have drawings or a clear problem, we will tell you honestly whether we are the right crew.",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Listen",
    body: "Walk the property, hear what you need, and look at the drawings before anyone swings a hammer.",
  },
  {
    step: "02",
    title: "Plan",
    body: "Scope, sequence, and materials — agreed in plain language so there are no surprises on the job.",
  },
  {
    step: "03",
    title: "Build",
    body: "Square, plumb, and to the print. You will know who is on site and what is happening that week.",
  },
  {
    step: "04",
    title: "Stand behind it",
    body: "We do not disappear at punch list. Customer service is part of the build, not a slogan on a card.",
  },
] as const;
