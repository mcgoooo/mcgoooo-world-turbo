import { getWranglerPath, updateWranglerFile } from "./updateWranglerFile.mjs";

export async function updatePrefix({rootDomain, zoneId, name, prefix, environment}) {
  const filePath = getWranglerPath(name, environment);
  await updateWranglerFile(filePath, name, [
    { pattern: `${rootDomain}/${prefix}/*`, zone_id: zoneId }
  ]);
}
