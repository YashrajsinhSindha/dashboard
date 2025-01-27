import { React, useState } from "react";
import { Card, Table, Switch, Transfer } from "antd";
import "./check.css";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";

const Check2 = () => {
  const [select1, setSelect1] = useState("");
  const [select2, setSelect2] = useState("");
  const [dynamicDropdown, setDynamicDropdown] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSwitchChange = (checked) => {
    setShowDropdown(checked);
  };

  const handleChange1 = (event) => {
    setSelect1(event.target.value);
  };

  const handleChangedynamic = (event) => {
    setDynamicDropdown(event.target.value);
  };

  const handleChange2 = (event) => {
    setSelect2(event.target.value);
  };
  const columns = Array.from({ length: 10 }, (_, index) => ({
    title: `Column ${index + 1}`,
    dataIndex: `column${index + 1}`,
    key: `column${index + 1}`,
  }));

  const data = [];

  return (
    <div className="design_check">
      <div>
        <h3 style={{ display: "flex", justifyContent: "center" }}>
          Check2 Page
        </h3>
        <div style={{ padding: "15px" }}>
          <Card style={{ margin: "auto" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FormControl sx={{ m: 1, minWidth: 120 }} required>
                <InputLabel id="select1-label">Select1</InputLabel>
                <Select
                  labelId="select1-label"
                  id="select1"
                  value={select1}
                  label="Select1 *"
                  onChange={handleChange1}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }} required>
                <InputLabel id="select2-label">Select2</InputLabel>
                <Select
                  labelId="select2-label"
                  id="select2"
                  value={select2}
                  label="Select2 *"
                  onChange={handleChange2}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1 }} required>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </FormControl>
              <div style={{ flexGrow: 1 }}></div>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Button variant="contained" color="primary" disabled>
                  Click!
                </Button>
              </FormControl>
            </div>
            <Table columns={columns} dataSource={data} pagination={false} />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <label style={{ color: red[500] }}>*</label>
              <label style={{ marginRight: "10px" }}>Select:</label>
              <Switch onChange={handleSwitchChange} />
            </div>
            {showDropdown && (
              <div style={{ marginTop: "10px" }}>
                <FormControl sx={{ m: 1, minWidth: 120 }} required>
                  <InputLabel id="dynamic-select-label">Dynamic</InputLabel>
                  <Select
                    labelId="dynamic-select-label"
                    id="dynamic-select"
                    value={dynamicDropdown}
                    label="Dynamic *"
                    onChange={handleChangedynamic}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <Transfer />
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Check2;
