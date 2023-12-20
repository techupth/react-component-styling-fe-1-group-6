/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { Frown , AlertCircle , AlertTriangle , CheckCircle } from 'react-feather';

function Alert(props) {
    let error = {
        detail : 'This is error alert box',
        background : '#F9C7C7' ,
        icon : {
          iconImage : <Frown/>,
          iconColor : '#ED5757'
        }
      }
    
      let warning = {
        detail : 'This is warning alert box',
        background : '#F9D9C7' ,
        icon : {
          iconImage : <AlertCircle/>,
          iconColor : '#EA712D'
        }
      }
    
      let info = {
        detail : 'This is info alert box',
        background : '#F9EBC7' ,
        icon : {
          iconImage : <AlertTriangle/>,
          iconColor : 'orange'
        }
      }
    
      let success = {
        detail : 'This is info alert box',
        background : '#F9EBC7' ,
        icon : {
          iconImage : <CheckCircle/>,
          iconColor : '#199752'
        }
      }
    
      let result;
    
      if(props.name === "error"){
        result = error;
      }else if (props.name === "warning") {
        result = warning;
      }else if (props.name === "info") {
        result = info;
      }else if (props.name === "success") {
        result = success;
      }
    
      return(
        <div css={css`
          height : 50px;
          width : 100%;
          border-radius : 5px;
          margin-bottom : 5px;
          background-color : ${result.background};
          color : black;
          display : flex;
          justify-content: start;
          align-items: center;
          padding-left: 25px; 
          gap : 10px;
          font-weight : bold;
        `}><i css={css`color : ${result.icon.iconColor};`}>{result.icon.iconImage}</i>{result.detail}</div>
    )
}

export default Alert
