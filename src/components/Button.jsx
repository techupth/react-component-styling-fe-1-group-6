/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';


function Button(props) {
    let buttonStatus = {
      primary : '#074EE8' ,
      secondary : '#07A4E8'
    }
    let result;
    if(props.name === "primary") {
      result = buttonStatus.primary
    }else if (props.name === "secondary") {
      result = buttonStatus.secondary
    }
  
    return(
      <button css={css`
        height : 50px;
        width : 170px;
        border-radius : 4px;
        margin-right : 5px;
        background-color : ${result};
      `}> Button </button>
    )
  }

  export default Button
