import DialogContent from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import SearchYourCity from "./SearchYourCity";

interface OpenSearchCityProps {
  open: boolean;
  handleClose: () => void;
}

const OpenSearchCity: React.FC<OpenSearchCityProps> = ({
  open,
  handleClose,
}) => {
  return (
    <div className="w-full">
      <Dialog
        open={open}
        onClose={handleClose}
        className="bg-opacity-75 backdrop-filter backdrop-contrast-50"
      >
        <DialogContent>
          <SearchYourCity />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OpenSearchCity;
