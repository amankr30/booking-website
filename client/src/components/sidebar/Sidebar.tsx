import DateDropdown from './DateDropdown';
import LanguageDropdown from './LanguageDropdown';
import ShowDropdown from './ShowDropdown';

const Sidebar = () => {
  return (
    <aside>
      <DateDropdown />
      <LanguageDropdown />
      <ShowDropdown />
    </aside>
  );
};

export default Sidebar;
