import React, {useState} from 'react'
import ReactQuill from "react-quill";
import  "react-quill/dist/quill.snow.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "../../Asset/CSS/Consent.css"



const  modules  = {
  toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script:  "sub" }, { script:  "super" }],
      ["blockquote", "code-block"],
      [{ list:  "ordered" }, { list:  "bullet" }],
      ["link", "image", "video"],
      ["clean"],
  ],
};


const Consent = () => {
  const [value, setValue] =  useState("");
  console.log(value);
  return (
    <>
    <div className='Gdpr_consent'>
        <div className='consent_heading'>
            <h4>Consent</h4>
        </div>
<div className='consent_radio_1'>
<FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
            Enable consent for contacts
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

<div className='consent_radio_1'>
<FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
            Enable consent for leads
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

<div className='consent_heading'>
  <h4>Public page consent information block</h4>
  <div className='consent_editor'>
  <ReactQuill modules={modules} theme="snow" onChange={setValue} placeholder="The content starts here..." />
  </div>
</div>
    </div>
    
    
    </>
  )
}

export default Consent