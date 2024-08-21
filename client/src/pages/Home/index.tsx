import FilterCapsule from './FilterCapsule';
import Cards from './Cards';
import Sidebar from '../../components/sidebar/Sidebar';

function Home() {
  return (
    <div className="container w-full px-20 flex mt-10">
      <div className="filters w-[40%] flex flex-col justify-start">
        <div className="heading font-semibold lg:text-3xl md:text-2xl mb-5 text-left">
          <h1>Filters</h1>
        </div>
        <div className="options flex flex-col gap-y-1">
          <div>
            <Sidebar />
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
        <div className="event-card">
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default Home;
