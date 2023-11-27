import React from "react";
import {
  Form,
  Label,
  Input,
  FormGroup,
  Button,
  Col,
  Row,
  Table,
} from "reactstrap";
import Spreadsheet from "react-spreadsheet";

import "../Asset/CSS/Shifts_page.css";

const Shifts_page = () => {
  let col = [
    "Flavour",
    "Food",
    "Flavour",
    "Flavour",
    "Flavour",
    "Food",
    "Food",
    "Food",
    "Food",
    "Food",
    "Food",
    "Food",
    "Food",
    "Food",
  ];
  let row = ["Item 1", "Item 2", "Item 1", "Item 1"];
  const data = [
    [
      { value: "Vanilla" },
      { value: "Chocolate" },
      { value: "Vanilla" },
      { value: "Chocolate" },
      { value: "Vanilla" },
      { value: "Chocolate" },
      { value: "Chocolate" },
      { value: "Vanilla" },
      { value: "Chocolate" },
      { value: "Chocolate" },
      { value: "Vanilla" },
    ],
    [
      { value: "Strawberry" },
      { value: "Cookies" },
      { value: "Strawberry" },
      { value: "Cookies" },
      { value: "Strawberry" },
      { value: "Cookies" },
      { value: "Cookies" },
      { value: "Strawberry" },
      { value: "Cookies" },
      { value: "Cookies" },
      { value: "Strawberry" },
    ],
  ];
  return (
    <div className="container-fluid">
      <div className="shift_main">
        <Form id="shift_form">
          <Row className="row-cols-lg-auto g-3 align-items-center">
            <Col>
              <FormGroup>
                <Label for="exampleDate">Date</Label>
                <Input
                  id="exampleDate"
                  name="date"
                  placeholder="date placeholder"
                  type="date"
                />
              </FormGroup>
            </Col>

            <Col>
              <FormGroup>
                <Label for="exampleSelect">Department</Label>
                <Input
                  id="Department"
                  name="select"
                  placeholder="Not selected"
                  type="select"
                >
                  <option>Not Selected</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>5</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </Col>

            <Col>
              <FormGroup>
                <Label for="exampleSelect">Role</Label>
                <Input
                  id="exampleSelect"
                  name="select"
                  placeholder="Not selected"
                  type="select"
                >
                  <option>Not Selected</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </Col>

            <Col>
              <FormGroup>
                <Label for="exampleSelect">Staff</Label>
                <Input
                  id="exampleSelect"
                  name="select"
                  placeholder="Not selected"
                  type="select"
                >
                  <option>Not Selected</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </Col>

            <Col>
              <Button color="primary">Filter</Button>
            </Col>
          </Row>
        </Form>
      </div>

      <div className="shift_table">
        {/* <Table bordered size="sm">
          <thead>
            <tr className="table-secondary">
              <th></th>
              <th>Staff</th>
              <th>Wed 01</th>
              <th>Thu 02</th>
              <th>Fri 03</th>
              <th>Sat 04</th>
              <th>Sun 05</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="table-secondary" scope="row">1</th>
              <td>NS</td>
              <td>NS</td>
              <td>NS</td>
              <td>NS</td>
              <td>NS</td>
              <td>NS</td>
            </tr>
            <tr>
              <th className="table-secondary" scope="row">1</th>
              <td>NS</td>
              <td>NS</td>
              <td>NS</td>
              <td>NS</td>
              <td>NS</td>
              <td>NS</td>
            </tr>
            <tr>
              <th className="table-secondary" scope="row">1</th>
              <td>NS</td>
              <td>NS</td>
              <td>NS</td>
              <td>NS</td>
              <td>NS</td>
              <td>NS</td>
            </tr>
            <tr>
              <th className="table-secondary" scope="row">1</th>
              <td>NS</td>
              <td>NS</td>
              <td>NS</td>
              <td>NS</td>
              <td>NS</td>
              <td>NS</td>
            </tr>
          </tbody>
        </Table> */}

        <Spreadsheet
          responsive
          data={data}
          columnLabels={col}
          rowLabels={row}
        />
      </div>
    </div>
  );
};

export default Shifts_page;
