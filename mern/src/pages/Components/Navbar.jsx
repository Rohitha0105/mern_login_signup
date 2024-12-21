import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Navbar() {
const navigate = useNavigate();
const [details,SetDetails] = useState([]);
const GetDetails = async() => {
  const token = await localStorage.getItem('token');
  const response = await fetch(`http://localhost:2000/user/getuser`,{
    method : "Get",
    headers:{
      token: `${token}`,
    },
  });

const userDetails = await response.json();
SetDetails(userDetails);
};
useEffect(() => {
  GetDetails();
},[])

  return (
    <div>
        <div style={{display : "flex",
                    justifyContent: "space-between",
                    padding:"10px",
                    height: "72px",
                    backgroundColor: "pink",
                    alignItems: "center"}}>
           <h1>Name: {details?.name || 'Yourname'}</h1>
           <button style={{width:"80px",
                           height:"40px",
                           borderRadius: "5px",
                           backgroundColor:"turquoise"
           }}>Logout</button>
        </div>
        <div style={{marginTop: "2%"}}>
            <h1>My Posts</h1>
        </div>
        <div style={{float:"right",
                     marginRight: "10px"
        }}>
            <button style={{padding:"10px",
                            height: "50px",
                            width: "90px",
                            borderRadius: "5px",
                            backgroundColor: "palegoldenrod"
            }}
            onClick={() => navigate ('/addpost') }
            >Add Post</button>
        </div>
    </div>
  )
}

export default Navbar
