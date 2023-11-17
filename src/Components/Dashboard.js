import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  CardBody,
  CardTitle,
  Card,
  CardSubtitle,
  CardLink,
  CardText,
  Table,
  Row,
  Col,
  Button,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";
import "../Asset/CSS/Dashboard.css";
import Doughnet_chart from "./Doughnet_chart";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="dashboard_heading">
          <p>HRM DASHBOARD</p>
        </div>
        <div className="div_line"></div>
        <div>
          <div className="dash_cards">
            <div className="card_position">
              <Card
                style={{
                  width: "22rem",
                }}
              >
                <CardBody>
                  <CardTitle tag="h5">TOTAL STAFF</CardTitle>
                </CardBody>
                <CardBody>
                  <div
                    class="progress"
                    style={{
                      height: "1px",
                    }}
                  >
                    <div
                      class="progress-bar bg-success"
                      style={{
                        height: "1px",
                        width: "40%",
                      }}
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </CardBody>
              </Card>
            </div>

            <div className="card_position">
              <Card
                style={{
                  width: "22rem",
                }}
              >
                <CardBody>
                  <CardTitle tag="h5">NEW STAFF IN MONTH</CardTitle>
                </CardBody>
                <CardBody>
                  <div
                    class="progress"
                    style={{
                      height: "1px",
                    }}
                  >
                    <div
                      class="progress-bar bg-warning"
                      style={{
                        height: "1px",
                        width: "40%",
                      }}
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </CardBody>
              </Card>
            </div>

            <div className="card_position">
              <Card
                style={{
                  width: "22rem",
                }}
              >
                <CardBody>
                  <CardTitle tag="h5">WORKING</CardTitle>
                </CardBody>
                <CardBody>
                  <div
                    class="progress"
                    style={{
                      height: "1px",
                    }}
                  >
                    <div
                      class="progress-bar bg-info"
                      style={{
                        height: "1px",
                        width: "40%",
                      }}
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </CardBody>
              </Card>
            </div>

            <div className="card_position">
              <Card
                style={{
                  width: "22rem",
                }}
              >
                <CardBody>
                  <CardTitle tag="h5">OVERDUE CONTRACT</CardTitle>
                </CardBody>
                <CardBody>
                  <div
                    class="progress"
                    style={{
                      height: "1px",
                    }}
                  >
                    <div
                      class="progress-bar bg-danger"
                      style={{
                        height: "1px",
                        width: "40%",
                      }}
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>

        {/* Donut chart */}

        <div className="dash_pie">
            <div><Doughnet_chart /></div>
            <div><Doughnet_chart /></div>
        </div>

        <div className="div_line"></div>
        {/* Table */}

        <div className="dash_table">
          <div className="table_1">
            <h3>Expired contacts that need to be extended</h3>
            <Table striped>
              <thead>
                <tr>
                  <th>Contract code</th>
                  <th>Contract ID</th>
                  <th>Staff</th>
                  <th>Departments</th>
                  <th>Start</th>
                  <th>End</th>
                  <th>Sign day</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">22</th>
                  <td>2</td>
                  <td>Staff cobra</td>
                  <td></td>
                  <td>2023-01-21</td>
                  <td>2023-01-24</td>
                  <td></td>
                </tr>
                {/* <tr>
      <th scope="row">
        2
      </th>
      <td>
        Jacob
      </td>
      <td>
        Thornton
      </td>
      <td>
        @fat
      </td>
    </tr>
    <tr>
      <th scope="row">
        3
      </th>
      <td>
        Larry
      </td>
      <td>
        the Bird
      </td>
      <td>
        @twitter
      </td>
    </tr> */}
              </tbody>
            </Table>
          </div>
{/* fdfds */}
{/* fdfds */}
{/* fdfds */}
          <div className="table_2">
            <h3>list of nearly expired contacts</h3>
            <Table striped>
              <thead>
                <tr>
                  <th>Contract code</th>
                  <th>Contract ID</th>
                  <th>Staff</th>
                  <th>Departments</th>
                  <th>Start</th>
                  <th>End</th>
                  <th>Sign day</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">22</th>
                  <td>2</td>
                  <td>Staff cobra</td>
                  <td></td>
                  <td>2023-01-21</td>
                  <td>2023-01-24</td>
                  <td></td>
                </tr>
                {/* <tr>
      <th scope="row">
        2
      </th>
      <td>
        Jacob
      </td>
      <td>
        Thornton
      </td>
      <td>
        @fat
      </td>
    </tr>
    <tr>
      <th scope="row">
        3
      </th>
      <td>
        Larry
      </td>
      <td>
        the Bird
      </td>
      <td>
        @twitter
      </td>
    </tr> */}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
