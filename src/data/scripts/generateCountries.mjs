import { allCountries } from "country-telephone-data";
import fs from "fs";

const countries = allCountries.map(c => ({
  name: c.name,
  iso2: c.iso2.toUpperCase(),
  dialCode: `+${c.dialCode}`,
  flag: c.iso2
    .toUpperCase()
    .replace(/./g, char =>
      String.fromCodePoint(127397 + char.charCodeAt())
    )
}));

fs.writeFileSync(
  "./countries.json",
  JSON.stringify(countries, null, 2)
);

console.log("✅ countries.json generated:", countries.length);
