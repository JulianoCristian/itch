
import {app} from "electron";
import {resolve} from "path";
import {sync as mkdirp} from "mkdirp";

const electronLocations = [
  "home",
  "appData",
  "userData",
  "temp",
  "desktop",
  "documents",
  "downloads",
  "music",
  "pictures",
  "videos",
];

// override paths for tests so we know what we're dealing with
export function setup () {
  const base = "./tmp/prefix";

  for (const name of electronLocations) {
    const location = resolve(base, name);
    try {
      mkdirp(location);
      app.setPath(name, location);
    } catch (e) {
      console.warn(`Could not set location ${name} to ${location}: ${e.stack}`);
    }
  }
}
