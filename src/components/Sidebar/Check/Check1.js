<<<<<<< HEAD
import React from 'react';

const Check1 = () => {
    return (
        <div>
            <h1>Check1 Page</h1>
            <p>We are in the Check1 page.</p>
        </div>
    );
};

export default Check1;
=======
import { React, useState } from "react";
import { Table, Card } from "antd";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Check1 = () => {
  const [select1, setSelect1] = useState("");
  const [select2, setSelect2] = useState("");
  const [select3, setSelect3] = useState("");
  const [select4, setSelect4] = useState("");

  const handleChange1 = (event) => {
    setSelect1(event.target.value);
  };

  const handleChange2 = (event) => {
    setSelect2(event.target.value);
  };

  const handleChange3 = (event) => {
    setSelect3(event.target.value);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Category 1",
          value: "Category 1",
        },
        {
          text: "Category 2",
          value: "Category 2",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value),
      width: "30%",
    },
    {
      title: "Age",
      dataIndex: "typeofdashboard",
      sorter: (a, b) => a.typeofdashboard - b.typeofdashboard,
    },
    {
      title: "Address",
      dataIndex: "address",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: "40%",
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      typeofdashboard: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      typeofdashboard: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      typeofdashboard: 32,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Jim Red",
      typeofdashboard: 32,
      address: "London No. 2 Lake Park",
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    //console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <div>
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
              <FormControl sx={{ m: 1, minWidth: 120 }} required>
                <InputLabel id="select3-label">Select3</InputLabel>
                <Select
                  labelId="select3-label"
                  id="select3"
                  value={select3}
                  label="Select3 *"
                  onChange={handleChange3}
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
                <InputLabel id="select4-label">Select4</InputLabel>
                <Select
                  labelId="select4-label"
                  id="select4"
                  value={select4}
                  label="Select4 *"
                  onChange={(event) => setSelect4(event.target.value)}
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
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 120,
                }}
              >
                <Button variant="contained" color="primary">
                  Click!
                </Button>
              </FormControl>
            </div>
            <Table columns={columns} dataSource={data} onChange={onChange} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Check1;
>>>>>>> dev
