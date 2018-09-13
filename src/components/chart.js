import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

 

export default (props)=>{
return(
          <div><Sparklines height={props.height} width={props.width} data={props.data}>
            <SparklinesLine color={props.color} />
            <SparklinesReferenceLine type="avg" />
   
          </Sparklines>
          <div>{_.round(_.sum(props.data)/props.data.length)}{props.unit}</div>
          </div>
          
);
}