import React from "react";
import RegionCard from "./RegionCard";

type Country = {
  name: string;
  population: number;
  region: string;
  capital: string;
  flags: { png: string };
};

type Props = {
  countries: Country[];
};

const RegionList = (props: Props) => {
  const { countries } = props;

  return (
    <div className="mx-auto grid w-9/12 sm:w-full sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-12 lg:grid-cols-4 lg:gap-16">
      {countries.map(({ name, region, capital, population, flags }) => (
        <RegionCard
          key={name}
          name={name}
          region={region}
          capital={capital}
          population={population}
          flag={flags.png}
        />
      ))}
    </div>
  );
};

export default RegionList;
