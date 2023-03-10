import React from "react";

import { Link } from "react-router-dom";

type Props = {
  region: string;
  capital: string;
  population: number;
  name: string;
  flag: string;
};

const RegionCard = (props: Props) => {
  const { region, capital, name, population, flag } = props;

  return (
    <Link to={`/${name}`}>
      <div className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-inner dark:bg-dark-element">
        <img src={flag} className="h-44 w-full" alt={name} />

        <div className="px-4 pt-6 pb-12">
          <h3 className="mb-4 font-bold">{name}</h3>

          <p className="text-sm">
            <span className="font-semibold">Population: </span> {population}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Region: </span> {region}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Capital: </span> {capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RegionCard;
