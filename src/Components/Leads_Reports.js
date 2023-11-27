import { Button } from "reactstrap";
import "../Asset/CSS/Leads_Reports.css";
import React, { useState } from "react";
import Lincha from "../Components/Charts/LR_linechart";
import Barcha from "../Components/Charts/LR_barchart";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";

const Leads_Reports = ({ direction, ...args }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="LR_main">
      <div className="LR_container_1">
        <div className="LR_btn_position">
          <Button color="success">Switch to Staff Report</Button>
        </div>
      </div>

      <div className="LR_container_2">
        <div className="LR_linechart">
          <div className="LR_chart_head">
            <h3>This Week Leads Conversions</h3>
          </div>
          <div className="lr_lincha">
            <Lincha />
          </div>
        </div>
        <div className="LR_barchart">
          <div className="LR_chart_head">
            <h3>This Week Leads Conversions</h3>
          </div>
          <div className="lr_barcha">
            <Barcha />
          </div>
        </div>
      </div>

      <div className="LR_container_3">
        <div>
        <div className="LR_chart_head">
          <h3>Monthly</h3>
          </div>
          
            <div className="LR_Drop">
              <div className="d-flex p-5">
                <Dropdown
                  isOpen={dropdownOpen}
                  toggle={toggle}
                  direction={direction}
                >
                  <DropdownToggle caret>Dropdown</DropdownToggle>
                  <DropdownMenu {...args}>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem>Some Action</DropdownItem>
                    <DropdownItem text>Dropdown Item Text</DropdownItem>
                    <DropdownItem disabled>Action (disabled)</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Foo Action</DropdownItem>
                    <DropdownItem>Bar Action</DropdownItem>
                    <DropdownItem>Quo Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="LR_drop_2">

              </div>
            </div>
          </div>
        </div>
        </div>
    
  );
};

export default Leads_Reports;
