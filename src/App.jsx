import React from "react";
import { Button } from "@material-ui/core";
import ModalForm from "./ModalForm";

function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="App">
      <ModalForm open={open} setOpen={setOpen} />
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Открыть модалку
      </Button>
    </div>
  );
}

export default App;
