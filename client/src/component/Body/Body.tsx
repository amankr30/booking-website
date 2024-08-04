
import FilterCapsule from "../Events/FilterCapsule";
import { DatePicker } from "../Filters/DatePicker";
import Card from "./Card";

function Body() {
  return (
    <div className="container w-full px-20 flex justify-between ">
      <div className="filters w-[30%] flex flex-col justify-start mr-5">
        <div className="heading flex font-semibold lg:text-3xl mb-5">
          <h1>Filters</h1>
        </div>
        <div className="options flex flex-col gap-y-3">
          <div className="pick-date w-full">
            <DatePicker />
          </div>
        </div>
      </div>
      <div className="events w-full flex flex-col text-left justify-start flex-wrap gap-5">
        <div className="heading font-semibold lg:text-3xl md:text-2xl">Events in Kolkata</div>
        <div className="capsule flex items-start">
          <FilterCapsule />
        </div>
        <div><Card /></div> 
        </div>
    </div>
  );
}

export default Body;
