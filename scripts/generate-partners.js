const fs = require('fs');
const path = require('path');

// Read the CSV file
const csvPath = path.join(__dirname, '../../cp-afid-mapping.csv');
const csvContent = fs.readFileSync(csvPath, 'utf-8');

// Parse CSV
const lines = csvContent.trim().split('\n');
const header = lines[0];
const dataLines = lines.slice(1);

// Color palettes for generating unique brand colors
const colorPalettes = [
  { primary: '#22baed', secondary: '#eb5a41' }, // CP default
  { primary: '#3B82F6', secondary: '#EF4444' }, // Blue/Red
  { primary: '#10B981', secondary: '#F59E0B' }, // Green/Amber
  { primary: '#8B5CF6', secondary: '#EC4899' }, // Purple/Pink
  { primary: '#F97316', secondary: '#06B6D4' }, // Orange/Cyan
  { primary: '#84CC16', secondary: '#DC2626' }, // Lime/Red
  { primary: '#6366F1', secondary: '#F59E0B' }, // Indigo/Amber
  { primary: '#14B8A6', secondary: '#EF4444' }, // Teal/Red
  { primary: '#A855F7', secondary: '#F97316' }, // Violet/Orange
  { primary: '#059669', secondary: '#DC2626' }, // Emerald/Red
  { primary: '#2563EB', secondary: '#F59E0B' }, // Blue/Amber
  { primary: '#7C3AED', secondary: '#EF4444' }, // Purple/Red
];

// Function to generate a unique color for each partner
function generateBrandColors(index) {
  const paletteIndex = index % colorPalettes.length;
  return colorPalettes[paletteIndex];
}

// Function to generate logo URL based on partner code
function generateLogoUrl(partnerCode) {
  return `/logos/${partnerCode}.png`;
}

// Function to generate alt text
function generateAltText(partnerName) {
  return `${partnerName} - Powered by Compare Power`;
}

// Parse partners from CSV
const partners = {};
dataLines.forEach((line, index) => {
  const [cp_afid, affiliate_name] = line.split(',');

  if (cp_afid && affiliate_name) {
    // Clean up any carriage returns or extra whitespace
    const cleanAffiliateName = affiliate_name.replace(/\r/g, '').trim();
    const cleanCpAfid = cp_afid.trim();

    const brandColors = generateBrandColors(index);

    partners[cleanCpAfid] = {
      partner_code: cleanCpAfid,
      partner_name: cleanAffiliateName,
      partner_logo_url: generateLogoUrl(cleanCpAfid),
      partner_logo_alt_text: generateAltText(cleanAffiliateName),
      active_status: true,
      brand_colors: brandColors
    };
  }
});

// Create the final configuration object
const partnersConfig = {
  partners: partners
};

// Write to partners.json
const outputPath = path.join(__dirname, '../src/data/partners.json');
fs.writeFileSync(outputPath, JSON.stringify(partnersConfig, null, 2));

console.log(`Generated configuration for ${Object.keys(partners).length} partners`);
console.log('Partners configuration written to src/data/partners.json');

// Log a few examples
console.log('\nExample configurations:');
const exampleKeys = Object.keys(partners).slice(0, 3);
exampleKeys.forEach(key => {
  console.log(`${key}:`, JSON.stringify(partners[key], null, 2));
});