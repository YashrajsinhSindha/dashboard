import React from "react";
import { Card } from "antd";
import { Select } from "antd";
import { Table, Input } from "antd";
import { useState } from "react";

const Graph3 = () => {
  const [selectedOption, setSelectedOption] = React.useState("first");
  const { Option } = Select;
  const { Search } = Input;

  const dataSource = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    // Add more data as needed
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  const [filteredData, setFilteredData] = useState(dataSource);

  const handleSearch = (value) => {
    const filtered = dataSource.filter((item) =>
      Object.keys(item).some((key) =>
        String(item[key]).toLowerCase().includes(value.toLowerCase())
      )
    );
    setFilteredData(filtered);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  const handleDropdownChange = (value) => {
    console.log(`selected ${value}`);
    // Add logic to change page based on dropdown selection
  };

  return (
    <div>
      <div style={{ display: "flex", padding: "15px" }}>
        <div
          onClick={() => handleOptionChange("first")}
          style={{
            padding: "10px",
            marginRight: "10px",
            cursor: "pointer",
            backgroundColor: selectedOption === "first" ? "#63a4ff" : "white",
            borderRadius: selectedOption === "first" ? "5px" : "0px",
          }}
        >
          First
        </div>
        <div
          onClick={() => handleOptionChange("second")}
          style={{
            padding: "10px",
            cursor: "pointer",
            backgroundColor: selectedOption === "second" ? "#63a4ff" : "white",
            borderRadius: selectedOption === "second" ? "5px" : "0px",
          }}
        >
          Second
        </div>
      </div>
      {selectedOption === "first" && (
        <div style={{ display: "flex", padding: "15px" }}>
          <Card style={{ width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>First</h3>
              <Select defaultValue="option1" onChange={handleDropdownChange}>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
              </Select>
            </div>
            <Search
              placeholder="Search..."
              onSearch={handleSearch}
              onChange={(e) => handleSearch(e.target.value)}
              style={{ marginBottom: 20, marginTop: 20 }}
            />
            <Table dataSource={filteredData} columns={columns} />
          </Card>
        </div>
      )}
      {selectedOption === "second" && (
        <div style={{ display: "flex", padding: "20px" }}>
          <Card>Second Card</Card>
        </div>
      )}
    </div>
  );
};

export default Graph3;
