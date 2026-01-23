import { readFile, writeFile } from "fs/promises";
import { parse } from "jsonc-parser";
import { join } from "path";

export function getWranglerPath(name, environment = "production") {
  const fileName =
    environment === "production"
      ? "wrangler.jsonc"
      : `wrangler.${environment}.jsonc`;
  return join("apps", name, fileName);
}

export async function updateWranglerFile(filePath, name, routes) {
  console.log()
  const content = await readFile(filePath, "utf8");
  const json = parse(content);

  json.name = name;
  json.routes = routes;

  await writeFile(filePath, JSON.stringify(json, null, 2), "utf8");
}
