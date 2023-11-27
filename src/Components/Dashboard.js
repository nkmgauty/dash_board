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
  DropdownToggle,
  Container,
} from "reactstrap";
import "../Asset/CSS/Dashboard.css";
import Doughnet_chart from "./Doughnet_chart";
import { FaRegEdit } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IoIosMail } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const Dashboard = () => {
  return (
    <>
      <Container className="bg-light border" fluid="lg">
        <div className="dashboard_heading">
          <p>HRM DASHBOARD</p>
        </div>
        <div className="div_line"></div>
        <div className="cards">
          <div className="dash_cards">
            <div className="card_position">
              <Card
                style={{
                  width: "300px",
                }}
              >
                <CardBody>
                  <CardTitle className="card_title_1" tag="h4">
                    <IconContext.Provider
                      value={{
                        color: "green",
                        className: "global-class-name",
                        size: "1.5rem",
                      }}
                    >
                      <FaRegEdit />
                    </IconContext.Provider>
                    TOTAL STAFF
                  </CardTitle>
                </CardBody>
                <CardBody>
                  <div
                    className="progress"
                    style={{
                      height: "3px",
                    }}
                  >
                    <div
                      className="progress-bar bg-success"
                      id="progressbar_1"
                      style={{
                        height: "3px",
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
                  width: "300px",
                }}
              >
                <CardBody>
                  <CardTitle className="card_title_2" tag="h5">
                    <IconContext.Provider
                      value={{
                        color: "purple",
                        className: "global-class-name",
                        size: "1.5rem",
                      }}
                    >
                      <FaRegEdit />
                    </IconContext.Provider>
                    NEW STAFF IN MONTH
                  </CardTitle>
                </CardBody>
                <CardBody>
                  <div
                    class="progress"
                    style={{
                      height: "3px",
                    }}
                  >
                    <div
                      class="progress-bar bg-warning"
                      id="progressbar_1"
                      style={{
                        height: "3px",
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
                  width: "300px",
                }}
              >
                <CardBody>
                  <CardTitle tag="h5">
                    <IconContext.Provider
                      value={{
                        color: "#0BC6F3",
                        className: "global-class-name",
                        size: "1.5rem",
                      }}
                    >
                      <IoIosMail />
                    </IconContext.Provider>
                    WORKING
                  </CardTitle>
                </CardBody>
                <CardBody>
                  <div
                    class="progress"
                    style={{
                      height: "3px",
                    }}
                  >
                    <div
                      class="progress-bar bg-info"
                      id="progressbar_1"
                      style={{
                        height: "3px",
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
                  width: "300px",
                }}
              >
                <CardBody>
                  <CardTitle tag="h5">
                    <IconContext.Provider
                      value={{
                        color: "red",
                        className: "global-class-name ",
                        size: "1.5rem",
                      }}
                    >
                      <IoCloseSharp />
                    </IconContext.Provider>
                    OVERDUE CONTRACT
                  </CardTitle>
                </CardBody>
                <CardBody>
                  <div
                    class="progress"
                    style={{
                      height: "3px",
                    }}
                  >
                    <div
                      class="progress-bar bg-danger"
                      id="progressbar_1"
                      style={{
                        height: "3px",
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
          <div>
            <Doughnet_chart />
          </div>
          <div>
            <Doughnet_chart />
          </div>
        </div>

        <div className="div_line"></div>
        {/* Table */}

        <div className="dash_table">
          <div className="table1_position">
            <div className="table_1">
              <h3>Expired contacts that need to be extended</h3>
              <Table responsive striped>
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
          {/* fdfds */}
          {/* fdfds */}
          {/* fdfds */}

          <div className="table2_position">
            <div className="table_2">
              <h3>list of nearly expired contacts</h3>
              <Table responsive striped>
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
      </Container>
    </>
  );
};

export default Dashboard;
