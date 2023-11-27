import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
//   import PropTypes from 'prop-types';
import "../../Asset/CSS/rtdp.css"

const RTDP = ({ direction, ...args }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <>
      <div className="GDPR_Rtdp">
        <div className="gdpr_rtdp_heading">
          <h3>Right to Data Portability</h3>
        </div>

        <div className="gdpr_rtdp_heading">
          <h3>Contacts</h3>
        </div>

        <div>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Enable contact to export data (JSON)
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="NO" control={<Radio />} label="No" />

              <FormControlLabel
                value="disabled"
                disabled
                control={<Radio />}
                label="other"
              />
            </RadioGroup>
          </FormControl>
        </div>

        {/* <div className="d-flex p-5">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
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
    </div> */}

        <div>
          <select id="selectBox" multiple>
            <div className="select_buttons">
              <div>
                <button>select all</button>
              </div>
              <div>
                <button>unselect all</button>
              </div>
            </div>
            <option value="option1">option-1</option>
            <option value="option2">option-2</option>
            <option value="option3">option-3</option>
            <option value="option4">option-4</option>
            <option value="option5">option-5</option>
            <option value="option6">option-6</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default RTDP;
