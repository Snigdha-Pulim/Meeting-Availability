import React from "react"; 
import ReactTable from "react-table";  
import "react-table/react-table.css";
import List_Comp from "./List_Comp";
class List extends React.Component{
    constructor(props){
        super(props);
        this.state={boo:false}
    }
    b1=x=>{
        this.setState({
          boo:true
        });
      }
    render() {
        const c=[
            {
                Header: 'Name',
                accessor:'name',
                width:100,
                maxWidth:100,
                minWidth:100
            }]
        for (var x = 0; x < 30; x++) {
            if(this.props.array.includes(x+1)&&this.state.boo==true){c.push({Header: x+1,
                accessor:`/${parseInt(x+1)}`,
                width:'5%',
                maxWidth:'5%',
                minWidth:'5%',
                style: {
                    background: '#80ced6'
                  }
              });}
            else{
            c.push({Header: x+1,
                accessor:`/${parseInt(x+1)}`,
                width:'5%',
                maxWidth:'5%',
                minWidth:'5%'});}
        }
        const data=[]
        {this.props.tasks.map(i=>{
            return (
                data.push({
                    name:i.name,
                    [`${parseInt(i.start, 10)}`]:'x',
                    [`${parseInt(i.end, 10)}`]:'x'
                })
                );
        })}
        console.log(this.props.array)
        return (
            <div>
                <div class="container">
                    <div class="row">
                    <div class="col-5"></div>
                    <div class="col">September 2019 </div>
                    <div class="col-5"></div>
                    </div>
                </div>
                <ReactTable
                  columns={c}
                  data={data}
                  defaultPageSize={15}
                  showPagination={false}
                  /> 
                <div>
                <div class="container">
                    <div class="row">
                    <div class="col-5"></div>
                    <div class="col"><button onClick={this.b1}>show availability</button></div>
                    </div>
                </div>
                </div>
            </div>);
    }
}
export default List;