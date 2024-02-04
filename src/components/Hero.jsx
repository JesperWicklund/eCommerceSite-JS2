import React from "react";

export const Hero = () => {
  return (
    <div className="flex justify-center items-center min-h-[350px] ">
      <div className="border rounded-md p-8 w-3/4 flex flex-col gap-6 items-center">
        <h1 className="tracking-wider text-2xl font-">
          Välkommen till GadgetGalleriet
        </h1>
        <div className="w-3/4">
          <p>
            Välkommen till GadgetGalleriet - din ultimata destination för
            innovativa elektroniska produkter! Hos oss öppnar du dörren till en
            värld av teknologiska underverk och smarta lösningar.
            GadgetGalleriet är mer än bara en elektronikbutik; det är en plats
            där nysgieriga själar och teknikentusiaster samlas för att utforska
            och upptäcka det senaste inom elektronikvärlden.
          </p>
        </div>
      </div>
    </div>
  );
};
