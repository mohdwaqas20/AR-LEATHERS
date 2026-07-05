import sample from "../assets/sample-product.jpg";
import product1Image1 from "../assets/Product1/Image1.jpeg";
import product1Image2 from "../assets/Product1/Image2.jpeg";
import product1Image3 from "../assets/Product1/Image3.jpeg";
import product1Image4 from "../assets/Product1/Image4.jpeg";
import product1Image5 from "../assets/Product1/Image5.jpeg";
import product1Image6 from "../assets/Product1/Image6.jpeg";
import product1Image7 from "../assets/Product1/Image7.jpeg";
import product1Image8 from "../assets/Product1/Image8.jpeg";

// NOTE: All products currently use the same sample image (x3) as placeholders.
// Replace the `images` array for each product with real photography when available.
const gallery = [sample, sample, sample];

const cowCalfHidesGallery = [
  product1Image1,
  product1Image2,
  product1Image3,
  product1Image4,
  product1Image5,
  product1Image6,
  product1Image7,
  product1Image8,
];

export const products = [
  {
    slug: "cow-calf-raw-salted-hides",
    name: "Cow Calf Raw Salted Hides",
    category: "Raw Hides",
    tagline: "Trimmed calf hides suited for fur and double-face leather",
    images: cowCalfHidesGallery,
    overview:
      "Our Cow Calf Raw Salted Hides are sourced from calves 5–10 days old and properly trimmed to suit fur and double-face leather production. Each hide is checked for a clean, marked-free grain before being salted and preserved for long shelf life, making it a reliable raw material for tanneries and processors worldwide.",
    specs: [
      { label: "Type", value: "Cow Calf Raw Salted Hide" },
      { label: "Average Weight", value: "3 – 5 kgs" },
      { label: "Average Size", value: "4 – 10 sq ft" },
      { label: "Hide Age", value: "5 – 10 days old" },
      { label: "Curing", value: "Wet Salted, treated with bactericide & boric acid" },
      { label: "Mode of Shipment", value: "Reefer container, temperature-controlled" },
    ],
    features: [
      "Trimmed properly — best suited for fur and double-face leather",
      "No hair slip, no holes, no marks or grain-off",
      "Treated with bactericide and boric acid for long shelf life",
      "Shipped in reefer containers with proper temperature control",
    ],
    applications: ["Fur Leather", "Double-Face Leather", "Premium Leather Goods", "Garment Leather"],
    exportInfo: "Shipped via refrigerated (reefer) containers with controlled temperature to preserve hide quality in transit, along with full export documentation and grading certificates.",
  },
  {
    slug: "finished-leather",
    name: "Finished Leather",
    category: "Finished Leather",
    tagline: "Ready-to-cut leather with a refined, uniform finish",
    images: gallery,
    overview:
      "Our Finished Leather is fully processed and finished to international standards, offering a consistent grain, refined surface, and colour uniformity suited to premium footwear, leather goods, and upholstery applications. Every hide passes through controlled tanning, dyeing, and finishing stages before final grading.",
    specs: [
      { label: "Material", value: "Cow & Buffalo hide" },
      { label: "Tannage", value: "Chrome / Vegetable / Combination" },
      { label: "Thickness", value: "0.8 mm – 2.5 mm (customisable)" },
      { label: "Finish", value: "Matte, Semi-Gloss, Aniline, Pigmented" },
      { label: "Grain", value: "Full Grain / Corrected Grain" },
      { label: "Packing", value: "Rolled / Folded, export cartons" },
    ],
    features: [
      "Uniform colour consistency across batches",
      "Strict thickness and grading tolerance",
      "Wide range of finishes and textures",
      "Available in bulk quantities for export",
    ],
    applications: ["Premium Footwear", "Leather Goods & Accessories", "Upholstery", "Automotive Interiors"],
    exportInfo: "Available for FOB / CIF shipment from Indian ports with complete export documentation, quality certificates, and flexible container-load or LCL quantities.",
  },
  {
    slug: "wet-blue-leather",
    name: "Wet Blue Leather",
    category: "Wet Blue Leather",
    tagline: "Chrome-tanned hides for further tannery processing",
    images: gallery,
    overview:
      "Wet Blue Leather from AR LEATHERS is chrome-tanned to a stable, blue-toned state ready for crusting and finishing by tanneries worldwide. We maintain consistent tannage quality, moisture control, and grading across every shipment to support smooth downstream processing.",
    specs: [
      { label: "Material", value: "Cow, Buffalo & Calf hide" },
      { label: "Tannage", value: "Chrome Tanned (Wet Blue)" },
      { label: "Moisture", value: "Controlled, export-standard" },
      { label: "Selection", value: "A / B / C grade available" },
      { label: "Area Range", value: "As per buyer specification" },
      { label: "Packing", value: "Palletised, salt-free, export wrapped" },
    ],
    features: [
      "Consistent chrome tanning process",
      "Multiple grade options for varied budgets",
      "Suitable for further crusting & finishing",
      "Reliable bulk supply capacity",
    ],
    applications: ["Tannery Processing", "Crust Leather Manufacturing", "Footwear Components", "Leather Goods Manufacturing"],
    exportInfo: "Shipped in bulk container loads with tannery-standard packing, moisture documentation, and phytosanitary/export compliance certificates.",
  },
  {
    slug: "crust-leather",
    name: "Crust Leather",
    category: "Crust Leather",
    tagline: "Semi-finished leather ready for final finishing",
    images: gallery,
    overview:
      "Crust Leather is the semi-processed stage between wet blue and finished leather — dried, retanned, and ready for the final finishing operations of dyeing, buffing, and coating. Our crust leather is graded carefully to give tanneries and finishers a dependable base material.",
    specs: [
      { label: "Material", value: "Cow & Buffalo hide" },
      { label: "Stage", value: "Retanned, Dried Crust" },
      { label: "Colour", value: "Natural / Semi-dyed on request" },
      { label: "Thickness", value: "0.8 mm – 2.2 mm" },
      { label: "Grading", value: "A / B / C grade" },
      { label: "Packing", value: "Bundled, export-grade wrapping" },
    ],
    features: [
      "Ready for final dyeing & finishing",
      "Consistent retanning quality",
      "Available in natural or semi-dyed base",
      "Custom thickness on request",
    ],
    applications: ["Finished Leather Production", "Leather Goods", "Footwear Uppers", "Garment Leather"],
    exportInfo: "Export-ready crust leather supplied in bulk with quality grading sheets and shipment documentation for global buyers.",
  },
  {
    slug: "raw-salted-buffalo-hides",
    name: "Raw Salted Buffalo Hides",
    category: "Raw Hides",
    tagline: "Premium salted buffalo hides sourced across India",
    images: gallery,
    overview:
      "Sourced through our trusted supplier network across India, our Raw Salted Buffalo Hides are carefully selected, graded, and salt-cured to preserve quality during storage and international transit — a reliable raw material base for tanneries worldwide.",
    specs: [
      { label: "Type", value: "Raw Salted Buffalo Hide" },
      { label: "Curing", value: "Wet Salted" },
      { label: "Weight Range", value: "As per buyer requirement" },
      { label: "Selection", value: "Graded A / B / C" },
      { label: "Origin", value: "Sourced across India" },
      { label: "Packing", value: "Bundled, palletised for export" },
    ],
    features: [
      "Careful grading before shipment",
      "Consistent salting for preservation",
      "Custom sizing & grade sourcing available",
      "Reliable, established supplier network",
    ],
    applications: ["Tanneries", "Wet Blue Manufacturing", "Leather Processing Units"],
    exportInfo: "Supplied on FOB / CIF basis with export documentation, phytosanitary certification, and container-load capability.",
  },
  {
    slug: "raw-salted-cow-hides",
    name: "Raw Salted Cow Hides",
    category: "Raw Hides",
    tagline: "Quality-graded cow hides for tannery input",
    images: gallery,
    overview:
      "Our Raw Salted Cow Hides are sourced from trusted regional suppliers and inspected for grain quality, size, and curing standard before export. Each shipment is prepared to meet the specifications of international tanneries and leather processors.",
    specs: [
      { label: "Type", value: "Raw Salted Cow Hide" },
      { label: "Curing", value: "Wet Salted" },
      { label: "Weight Range", value: "As per buyer requirement" },
      { label: "Selection", value: "Graded A / B / C" },
      { label: "Origin", value: "Sourced across India" },
      { label: "Packing", value: "Bundled, palletised for export" },
    ],
    features: [
      "Grain and size inspection before dispatch",
      "Flexible sourcing by grade & weight",
      "Consistent quality across shipments",
      "Long-term supply capability",
    ],
    applications: ["Tanneries", "Wet Blue Manufacturing", "Leather Processing Units"],
    exportInfo: "Available for bulk export with full documentation, grading certificates, and flexible shipment scheduling.",
  },
  {
    slug: "raw-salted-calf-skins",
    name: "Raw Salted Calf Skins",
    category: "Raw Hides",
    tagline: "Fine-grain calf skins for premium leather goods",
    images: gallery,
    overview:
      "Prized for their fine grain and softness, our Raw Salted Calf Skins are sourced and graded specifically for buyers producing premium leather goods, garments, and accessories. Careful curing preserves the natural grain structure through export.",
    specs: [
      { label: "Type", value: "Raw Salted Calf Skin" },
      { label: "Curing", value: "Wet Salted" },
      { label: "Grain", value: "Fine, tight grain structure" },
      { label: "Selection", value: "Graded A / B / C" },
      { label: "Origin", value: "Sourced across India" },
      { label: "Packing", value: "Bundled, export wrapped" },
    ],
    features: [
      "Fine grain suited to premium goods",
      "Selective grading process",
      "Consistent curing standard",
      "Small and bulk order flexibility",
    ],
    applications: ["Premium Leather Goods", "Garment Leather", "Accessories & Small Goods"],
    exportInfo: "Export-ready with grading documentation, available in both trial and full container-load quantities.",
  },
  {
    slug: "raw-goat-skins",
    name: "Raw Goat Skins",
    category: "Raw Hides",
    tagline: "Durable, fine-textured goat skins for global buyers",
    images: gallery,
    overview:
      "Our Raw Goat Skins are sourced from established regional networks and salt-cured to preserve quality for international shipment. Known for their durability and distinctive texture, they serve a wide range of leather goods and glove-leather applications.",
    specs: [
      { label: "Type", value: "Raw Goat Skin" },
      { label: "Curing", value: "Wet Salted" },
      { label: "Texture", value: "Fine, natural pebble grain" },
      { label: "Selection", value: "Graded A / B / C" },
      { label: "Origin", value: "Sourced across India" },
      { label: "Packing", value: "Bundled, export wrapped" },
    ],
    features: [
      "Distinctive natural grain texture",
      "Durable, lightweight material",
      "Careful grading & selection",
      "Reliable supply availability",
    ],
    applications: ["Glove Leather", "Leather Goods", "Garment Leather", "Accessories"],
    exportInfo: "Shipped in bulk with export documentation and phytosanitary certification for international buyers.",
  },
  {
    slug: "sheep-skins",
    name: "Sheep Skins",
    category: "Raw Hides",
    tagline: "Soft, lightweight skins subject to seasonal availability",
    images: gallery,
    overview:
      "Sheep Skins are sourced on a seasonal basis through our regional supplier network. Valued for their soft handle and lightweight structure, they are carefully graded and cured to meet buyer specifications for garment and lining leather applications.",
    specs: [
      { label: "Type", value: "Raw Sheep Skin" },
      { label: "Curing", value: "Wet Salted" },
      { label: "Availability", value: "Subject to seasonal supply" },
      { label: "Selection", value: "Graded on request" },
      { label: "Origin", value: "Sourced across India" },
      { label: "Packing", value: "Bundled, export wrapped" },
    ],
    features: [
      "Soft, lightweight handle",
      "Seasonal sourcing with advance planning",
      "Grading available on request",
      "Suited to garment & lining leather",
    ],
    applications: ["Garment Leather", "Lining Leather", "Leather Goods"],
    exportInfo: "Available on enquiry; please contact our export team for current seasonal availability and lead times.",
  },
  {
    slug: "wet-blue-hides-skins",
    name: "Wet Blue Hides & Skins",
    category: "Wet Blue Leather",
    tagline: "Chrome-tanned hides & skins, available on enquiry",
    images: gallery,
    overview:
      "In addition to our standard Wet Blue Leather line, AR LEATHERS supplies Wet Blue Hides & Skins across multiple species on enquiry — allowing buyers to source specific types and grades aligned with their production requirements.",
    specs: [
      { label: "Material", value: "Multiple species available" },
      { label: "Tannage", value: "Chrome Tanned (Wet Blue)" },
      { label: "Selection", value: "Grade & size on request" },
      { label: "Availability", value: "On enquiry" },
      { label: "Origin", value: "Sourced & processed in India" },
      { label: "Packing", value: "Palletised, export wrapped" },
    ],
    features: [
      "Flexible species & grade sourcing",
      "Custom order fulfilment",
      "Consistent chrome tanning quality",
      "Dedicated export support",
    ],
    applications: ["Tannery Processing", "Crusting & Finishing", "Leather Goods Manufacturing"],
    exportInfo: "Please share your specification sheet with our export team for a tailored quote and lead time.",
  },
  {
    slug: "custom-leather-products",
    name: "Custom Leather Products",
    category: "Custom Development",
    tagline: "Leather manufactured and sourced to your exact specification",
    images: gallery,
    overview:
      "Beyond our standard catalogue, AR LEATHERS partners with buyers to develop custom leather products — matching specific thickness, finish, colour, grain, and grading requirements. Our team works closely with clients from specification through to final shipment.",
    specs: [
      { label: "Scope", value: "Finished, Wet Blue & Crust Leather" },
      { label: "Customisation", value: "Colour, finish, thickness, grade" },
      { label: "MOQ", value: "Discussed per project" },
      { label: "Sampling", value: "Available before bulk order" },
      { label: "Origin", value: "Manufactured & sourced in India" },
      { label: "Packing", value: "As per buyer requirement" },
    ],
    features: [
      "Tailored product development",
      "Pre-production sampling",
      "Dedicated account management",
      "Long-term contract manufacturing",
    ],
    applications: ["Private Label Manufacturing", "Brand-Specific Leather Programs", "Bulk Contract Supply"],
    exportInfo: "Contact our team with your specification sheet to begin a custom development and export quote.",
  },
];

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);