// import { useState } from "react";
import FilterCapsule from "../Events/FilterCapsule";
import Card from "./Card";
import DateDropdown from "../Filters/DateDropdown";
import ShowDropdown from "../Filters/ShowDropdown";
import LanguageDropdown from "../Filters/LanguageDropdown";

function Body() {
  return (
    <div className="container w-full px-20 flex">
      <div className="filters w-[40%] flex flex-col justify-start">
        <div className="heading font-semibold lg:text-3xl md:text-2xl mb-5 text-left">
          <h1>Filters</h1>
        </div>
        <div className="options flex flex-col gap-y-1">
          <div>
            <DateDropdown />
            <LanguageDropdown />
            <ShowDropdown />
          </div>
        </div>
      </div>
      <div className="events flex flex-col text-left justify-start flex-wrap gap-5">
        <div className="heading font-semibold lg:text-3xl md:text-2xl">
          Events in Kolkata
        </div>
        <div className="capsule flex items-start">
          <FilterCapsule />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Body;
