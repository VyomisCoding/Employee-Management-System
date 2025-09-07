import React from 'react'
import axios from 'axios';

export const fetchDepartments = async() => {
    let departments
      try{
        const response = await axios.get('http://localhost:5000/api/department',{
          headers:{
            "Authorization":`Bearer ${localStorage.getItem('token')}`
          },
        });
        if(response.data.success){
          departments = response.data.departments
        }
      }catch(error){
        if(error.response && !error.response.data.success){
          alert(error.response.data.error)
        }else {
        console.error("Fetch error:", error.message);
        }
      }
      return departments
    };


