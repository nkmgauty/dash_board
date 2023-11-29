import React, {useState} from 'react'
import "../../Asset/CSS/rtbi.css"
import ReactQuill from "react-quill";
import  "react-quill/dist/quill.snow.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";



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

const RTBI = () => {
    const [value, setValue] =  useState("");
  console.log(value);
  return (
   <>
   <div className='GDPR_RTBI'>
<div className='rtbi_heading'>
    <h4>Right to be informed</h4>
</div>

<div className='rtbi_dropdown'>
<FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
            Enable Terms & Conditions for registration and customers portal
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

<div className='rtbi_dropdown'>
<FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
            Enable Terms & Conditions for web to lead forms            </FormLabel>
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

<div className='rtbi_dropdown'>
<FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
            Enable Terms & Conditions for ticket form
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

<div className='rtbi_dropdown'>
<FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
            Show Terms & Conditions in customers area footer
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

<div className='rtbi_dropdown'>
<FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
            Enable Terms & Conditions for estimate request forms
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

<div>
    <div className='rtbi_heading'>
    <p>Terms & Conditions</p>
    </div>
    <div className='rtbi_editor'>
    <ReactQuill modules={modules} theme="snow" onChange={setValue} placeholder="The content starts here..." />
    </div>
    <div className='rtbi_heading'>
    <p> Privacy Policy</p>
    </div>
    <div className='rtbi_editor'>
    <ReactQuill modules={modules} theme="snow" onChange={setValue} placeholder="The content starts here..." />
    </div>
</div>




   </div>
   
   </>
  )
}

export default RTBI