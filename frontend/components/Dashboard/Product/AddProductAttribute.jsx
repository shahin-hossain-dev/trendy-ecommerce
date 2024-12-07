"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const AddProductAttribute = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [rows, setRows] = useState([
    { attribute: "", name: [""], value: [""] },
  ]);

  const handleAddRow = () => {
    setRows([...rows, { attribute: "", name: [""], value: [""] }]);
  };

  const handleChangeValue = (e, rowIdx, subRowIdx) => {
    const { name, value } = e.target;
    const newRow = [...rows];

    if (name === "attribute") {
      newRow[rowIdx][name] = value;
    } else if (name === "name") {
      newRow[rowIdx].name[subRowIdx] = value;
    } else {
      newRow[rowIdx].value[subRowIdx] = value;
    }
    setRows([...newRow]);

    const attributes = rows.reduce((pre, cur) => {
      const attribute = cur.attribute;
      const names = cur.name;
      const values = cur.value;
      const obj = {};
      names.forEach((name, idx) => {
        obj[name] = values[idx];
      });
      pre[attribute] = obj;

      return pre;
    }, {});
  };

  const handleAddMoreField = (rowIdx) => {
    const newRow = [...rows];
    newRow[rowIdx]?.name.push("");
    newRow[rowIdx]?.value.push("");
    setRows([...newRow]);
  };

  return (
    <div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="space-y-4 max-h-screen overflow-auto">
            <h3 className="font-oswald font-bold text-dash-primary text-xl">
              Product Attribute
            </h3>
            {rows.map((row, rowIdx) => (
              <div key={rowIdx}>
                <div className="flex gap-3">
                  <TextField
                    onChange={(e) => handleChangeValue(e, rowIdx)}
                    name="attribute"
                    size="small"
                  />
                  <div className="flex gap-1">
                    <div className="space-y-2">
                      {row.name.map((subRow, subRowIdx) => (
                        <div key={subRowIdx} className="flex gap-1 relative">
                          <TextField
                            onChange={(e) =>
                              handleChangeValue(e, rowIdx, subRowIdx)
                            }
                            name="name"
                            size="small"
                          />
                          <TextField
                            onChange={(e) =>
                              handleChangeValue(e, rowIdx, subRowIdx)
                            }
                            name="value"
                            size="small"
                          />
                          {row.name.length - 1 === subRowIdx && (
                            <button
                              onClick={() => handleAddMoreField(rowIdx)}
                              className="absolute -right-4 top-1/2 -translate-y-1/2"
                            >
                              +
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Button
              onClick={handleAddRow}
              variant="contained"
              style={{ backgroundColor: "#2FB261", marginTop: "8px" }}
              type="submit"
              className=" text-white"
            >
              New Attribute
            </Button>
          </Box>
        </Modal>
      </div>
      <Button
        onClick={handleOpen}
        variant="contained"
        style={{ backgroundColor: "#2FB261" }}
        type="submit"
        className=" text-white"
      >
        Add Product Attribute
      </Button>
    </div>
  );
};

export default AddProductAttribute;
