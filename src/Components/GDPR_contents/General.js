import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../Asset/CSS/general.css";

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const General = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="GDPR_general">
      <div className="gdpr_general_heading">
        <h3>GENERAL</h3>
      </div>

      <div className="enable_GDPR">
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Enable GDPR
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

      <div className="show_GDPR_can">
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Show GDPR link in customers area navigation
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

      <div className="show_GDPR_caf">
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Show GDPR link in customers area footer
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

      <div className="gdpr_text_edit">
        <ReactQuill
          modules={modules}
          theme="snow"
          onChange={setValue}
          placeholder="The content starts here..."
        />
      </div>
    </div>
  );
};

export default General;
