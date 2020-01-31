import React from 'react';


export default function Customize(props){
    const features = Object.keys(this.props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    return(
        
    <Feature options={props.features[feature]} featureHash={featureHash} feature={feature} selected={props.selected} handleChange={props.handleChange}  /> 
     
    )
    }
}
