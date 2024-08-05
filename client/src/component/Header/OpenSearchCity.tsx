import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
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
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        classes={{ paper: "bg-opacity-75 backdrop-filter backdrop-blur-lg" }}
      >
        <DialogContent>
          <SearchYourCity />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OpenSearchCity;
