import { readFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const projectRoot = process.cwd();
const portraitPath = join(projectRoot, "public/images/maksym-new/maksym-therapeutic-massage-therapist-sydney.jpg");
const logoPath = join(projectRoot, "public/images/balance-with-maksym-logo-transparent.png");
const outputPath = join(projectRoot, "public/images/og-balance-with-maksym.png");

const portrait = await sharp(portraitPath)
  .extract({ left: 0, top: 80, width: 1024, height: 1300 })
  .resize(475, 630, { fit: "cover", position: "centre" })
  .jpeg({ quality: 90 })
  .toBuffer();
const logo = await readFile(logoPath);

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#fcfaf7"/>
  <image x="725" y="0" width="475" height="630" href="data:image/jpeg;base64,${portrait.toString("base64")}"/>
  <rect x="0" y="0" width="8" height="630" fill="#a88b72"/>
  <image x="67" y="48" width="64" height="64" href="data:image/png;base64,${logo.toString("base64")}"/>
  <text x="147" y="80" fill="#292623" font-family="Georgia, serif" font-size="28">Balance With Maksym</text>
  <text x="148" y="104" fill="#8a6f5c" font-family="Arial, sans-serif" font-size="11" font-weight="bold" letter-spacing="2">THERAPEUTIC MASSAGE · SYDNEY</text>
  <text x="69" y="202" fill="#8a6f5c" font-family="Arial, sans-serif" font-size="14" font-weight="bold" letter-spacing="3">PERSONALISED CARE</text>
  <text x="64" y="293" fill="#292623" font-family="Georgia, serif" font-size="79" letter-spacing="-3">Less pain.</text>
  <text x="64" y="376" fill="#292623" font-family="Georgia, serif" font-size="79" letter-spacing="-3">More freedom</text>
  <text x="64" y="459" fill="#8a6f5c" font-family="Georgia, serif" font-size="79" font-style="italic" letter-spacing="-3">to move.</text>
  <text x="69" y="516" fill="#625d58" font-family="Arial, sans-serif" font-size="22">Therapeutic massage in clinic or at home.</text>
  <line x1="69" y1="574" x2="109" y2="574" stroke="#a88b72"/>
  <text x="125" y="579" fill="#625d58" font-family="Arial, sans-serif" font-size="15">9+ years of experience</text>
  <circle cx="322" cy="574" r="2" fill="#b6a89a"/>
  <text x="339" y="579" fill="#625d58" font-family="Arial, sans-serif" font-size="15">Personalised treatment</text>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(outputPath);
console.log(outputPath);
