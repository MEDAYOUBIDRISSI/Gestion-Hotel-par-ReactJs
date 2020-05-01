import React, { Component } from 'react';
import { get } from 'https';
//import Button from './Button.js'
 class Getapi extends Component 
 { 

    constructor(){
        super()
        let data={
            "1":{
                "name":"med ayoub",
                "age":23
            },
            "2":{
                "name":"mohamed",
                "age":22
            }
        }
        this.state={
            data
        }
    }
    LoadData()
    {
        let getData=JSON.parse(JSON.stringify(this.state.data))
        let keys=Object.keys(getData)
        let dataArray=[]
        for(let i=0;i<keys.length;i++)
        {
            let key=keys[i]
            let name=getData[key]["name"]
            let age=getData[key]["age"]
            let obj={
                key,name,age
            }
            dataArray.push(obj)
        }
        return (
            <div>
            {dataArray.map(d=>{
                    return(
                        <p>{d.name} {d.age}</p>
                    )
                })
            }
            </div>
        )
    }


    render() 
    { 
    //     const elements = []
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(res => res.json())
    //     .then(res => { 
    //     elements=res;
	// 	 console.log(res);
    //   })

        return (
            <div>
            {this.LoadData()}
            </div>
        )
    }
} export default Getapi;
