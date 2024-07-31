import { DatePicker } from "../Filters/DatePicker";
import Dropdown_test from "../Filters/Dropdown_test";

function Body() {
  return (
    <div className="container w-full px-20 flex justify-between ">
      <div className="filters w-[30%] flex flex-col justify-start">
        <div className="heading flex">
          <h1>Filters</h1>
        </div>
        <div className="options flex flex-col gap-y-3">
          <div className="pick-date w-full">
            <DatePicker />
          </div>
          <div className="select-lang w-full">
          <Dropdown_test />
          </div>
          <div className="category">
          <Dropdown_test />
          </div>
        </div>
      </div>
      <div className="events w-full">Events</div>
    </div>
  );
}

export default Body;
