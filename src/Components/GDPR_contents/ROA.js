import React, { useState } from "react";
import "../../Asset/CSS/ROA.css";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const ROA = () => {
  return (
    <div className="GDPR_ROA">
      <div className="roa_heading">
        <h4>Right of access/Right to rectification</h4>
      </div>

      <div className="roa_heading">
        <h4>Contacts</h4>
      </div>

      <div className="roa_heading">
        <p>
          The customers area gives your customers access to login and view their
          personal information. Also the customers area provide with access to
          update their personal information like first name, last name, email
          address, phone etc... Below you can find additional options you may
          want to allow the contacts to modify.
        </p>
      </div>

      <div className="roa_heading">
        <h4>Profile/Contact</h4>
      </div>

      <div className="roa_dropdown">
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Allow primary contact to view/edit billing & shipping details{" "}
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

      <div className="roa_dropdown">
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Allow contacts to delete own files uploaded from customers area{" "}
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

      <div className="roa_heading">
        <h4>Leads</h4>
      </div>

      <div className="roa_dropdown">
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Enable public form for leads
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

      <div className="roa_dropdown">
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Show lead custom fields on public form{" "}
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

      <div className="roa_dropdown">
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Show lead attachments on public form and allow attachments to
            removed by the lead
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
    </div>
  );
};

export default ROA;
