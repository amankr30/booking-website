import FilterCapsule from "../Events/FilterCapsule";
import Dropdown from "../Filters/Dropdown";
import Card from "../Events/Card";

function Body() {
  return (
    <div className="container w-full px-20 flex justify-start ">
      <div className="filters w-[40%] flex flex-col justify-start">
        <div className="heading font-semibold lg:text-3xl md:text-2xl mb-5 text-left">
          <h1>Filters</h1>
        </div>
        <div className="options flex flex-col gap-y-3">
          {/* <div className="pick-date w-full">
            <DatePicker />
          </div> */}
          <div>
            <Dropdown />
          </div>
        </div>
      </div>
      <div className="events w-full flex flex-col text-left justify-start flex-wrap gap-5">
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
