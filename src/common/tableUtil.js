import React from 'react';
import {updateData} from '../actions/tableActions';

export function filter(data, searchStr)
{
    let newData=[];
     data.map((item, index)=>{
              let stringValue=JSON.stringify(item);

                if(stringValue.indexOf(searchStr)!=-1)
                    {
                        newData.push(item);
                    }   
     });    
     updateData(newData);
}

export function sort(data, column, order)
{  
    data.sort( sortBy(column, order) );
    updateData(data);
}

function sortBy(column, order)
{
    return function(a,b)
    {
        let colIndex=column.indexOf(".");
        let parent="";
        let child="";
        if(colIndex!=-1)
            {
                parent=column.substring(0,colIndex );
                child=column.substring(colIndex+1, column.length); 
                if(order=="ASC")
                    {
                        return sortAsc(a[parent][child], b[parent][child])
                    }
                else{
                    return sortDesc(a[parent][child], b[parent][child])

                }
                     
            }
        else
            {
                if(order=="ASC")
                    return a[column] - b[column];
                else
                    return b[column] - a[column];
            }   

        return 0;
    }
}

export function getColumnsforSorting(data)
{
    let columns=[];
    let sortColumns=[];
    for(let name in data)
        {
            if(typeof data[name]=='object')
                {
                    for(let i in data[name])
                        {
                            columns.push(name+"."+i)
                        }

                }
            else
            columns.push(name);    
        }
    
    sortColumns=columns.map((item, index)=><option name={item}>{item}</option>)
    return sortColumns;
    
}
     
function sortAsc(a,b)
{
    if(a>b)
        {
            return 1;
        }
    else
        return -1;

    return 0;
}

function sortDesc(a,b)
{
    if(a>b)
        {
            return -1;
        }
    else
        return 1;

    return 0;
}