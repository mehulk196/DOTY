import fs from "node:fs";
import path from "node:path";

export function hasPartnerLogo(logo: string) {
  return fs.existsSync(path.join(process.cwd(), "public", "partners", logo));
}
