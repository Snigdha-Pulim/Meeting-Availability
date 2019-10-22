import React from "react"; 
class List_Comp extends React.Component{
    constructor(props){
        super(props);
        this.name=props.h;
        this.id=props.g;
        this.start=props.z;
        this.end=props.c;
    }
    render() {
        return (
        <div>
            {this.id}
            {this.name}
            {this.start}
            {this.end}
        </div>
        );
    }
}

export default List_Comp;