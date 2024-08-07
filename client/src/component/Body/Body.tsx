import FilterCapsule from "../Events/FilterCapsule";
import Dropdown from "../Filters/Dropdown";
import Card from "./Card";

function Body() {
  return (
    <div className="container w-full px-20 flex">
      <div className="filters w-[40%] flex flex-col justify-start">
        <div className="heading font-semibold lg:text-3xl md:text-2xl mb-5 text-left">
          <h1>Filters</h1>
        </div>
        <div className="options flex flex-col gap-y-3">
          {/* <DatePicker /> */}
          <Dropdown />
        </div>
      </div>
      <div className="events w-[60%] flex flex-col text-left justify-start flex-wrap gap-5">
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
