import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';

export default {
    title: "Custom Button",
    component: CustomButton
}

export const MyCustomButton = () => <CustomButton />;

export const PageWithCustomButtons = () => <div>
    <Header 
    fontSize= {45}
    color= "#ABC"
    onMouseOver= {Header1Click}
    />

    <Header 
    fontSize= {35}
    color= "#blue"
    onMouseOver= {Header2Click}
    />

    <CustomButton 
    color="#999"
    text="Cancel"
    onClick= {CancelClick}
    />

    <CustomButton 
    color="#3F5"
    text="Okay"
    onClick= {OkClick}
    />

    <CustomButton 
    color="#F3F"
    text="Submit"
    onClick= {SubmitClick}
    />

    <CustomButton 
    text="Menu"
    onClick= {MenuClick}
    />
</div>

function CancelClick(){
    alert("Cancel");
}

function OkClick(){
    alert("Okay");
}

function SubmitClick(){
    alert("Submitted!");
}

function MenuClick(){
    alert("Returning to Menu");
}

function Header1Click(){
    alert("This is Header 1");
}

function Header2Click(){
    alert("This is Header 2");
}