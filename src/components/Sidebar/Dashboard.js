import React from "react";
import { Card, Row, Col } from "antd";
import { MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Dashboard = () => {
  const [typeofdashboard, settypeofdashboard] = React.useState("");

  const handleChangeOfType = (value) => {
    settypeofdashboard(value);
  };
  return (
    <div>
      <div style={{ display: "flex", marginBottom: 16, marginLeft: 16 }}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={typeofdashboard}
              label="Type"
              onChange={(e) => handleChangeOfType(e.target.value)}
            >
              <MenuItem value={10}>Type1</MenuItem>
              <MenuItem value={20}>Type2</MenuItem>
              <MenuItem value={30}>Type3</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <Card style={{ width: 600, margin: "0 auto" }}>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"
              alt="example"
              style={{ width: "100%" }}
            />
          </Col>
          <Col span={16}>
            <p>
              <strong>Category:</strong> Example Category
            </p>
            <p>
              <strong>Check:</strong> Example Check
            </p>
            <p>
              <strong>Name:</strong> Example Name
            </p>
            <p>
              <strong>Version:</strong> 1.0.0
            </p>
            <p>
              <strong>Status:</strong> Active
            </p>
            <p>
              <strong>Check1:</strong> Passed
            </p>
            <p>
              <strong>Check2:</strong> Passed
            </p>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
// const columns = [
//   {
//     title: "Name",
//     dataIndex: "name",
//     filters: [
//       {
//         text: "Joe",
//         value: "Joe",
//       },
//       {
//         text: "Category 1",
//         value: "Category 1",
//       },
//       {
//         text: "Category 2",
//         value: "Category 2",
//       },
//     ],
//     filterMode: "tree",
//     filterSearch: true,
//     onFilter: (value, record) => record.name.startsWith(value),
//     width: "30%",
//   },
//   {
//     title: "Age",
//     dataIndex: "typeofdashboard",
//     sorter: (a, b) => a.typeofdashboard - b.typeofdashboard,
//   },
//   {
//     title: "Address",
//     dataIndex: "address",
//     filters: [
//       {
//         text: "London",
//         value: "London",
//       },
//       {
//         text: "New York",
//         value: "New York",
//       },
//     ],
//     onFilter: (value, record) => record.address.startsWith(value),
//     filterSearch: true,
//     width: "40%",
//   },
// ];
// const data = [
//   {
//     key: "1",
//     name: "John Brown",
//     typeofdashboard: 32,
//     address: "New York No. 1 Lake Park",
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     typeofdashboard: 42,
//     address: "London No. 1 Lake Park",
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     typeofdashboard: 32,
//     address: "Sydney No. 1 Lake Park",
//   },
//   {
//     key: "4",
//     name: "Jim Red",
//     typeofdashboard: 32,
//     address: "London No. 2 Lake Park",
//   },
// ];
// const onChange = (pagination, filters, sorter, extra) => {
//   console.log("params", pagination, filters, sorter, extra);
// };
// const Dashboard = () => (
//   <Table columns={columns} dataSource={data} onChange={onChange} />
// );
export default Dashboard;
