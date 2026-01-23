import { getWranglerPath, updateWranglerFile } from "./updateWranglerFile.mjs";

export async function updateRoot({rootDomain, name, environment}) {
  const filePath = getWranglerPath(name, environment);
  await updateWranglerFile(filePath, `${rootDomain.replace(/\./g, "-")}-${name}`, [
    { pattern: rootDomain, custom_domain: true }
  ]);
}
