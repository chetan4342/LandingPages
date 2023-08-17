import React from 'react';
import styled from '@emotion/styled';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useNavigate } from 'react-router-dom'; 

 const NavBar = () => {
 const navigate = useNavigate();
  const handleLogout =() =>{
    navigate('/');
  }
 const handleProfile = () =>{
  navigate('/profile');
 }
  return (
    <div>
        <Navbar>
          <Logo src=".\images\img5.png" alt="Logo" />
         <Nav>
          <CircleNotificationsRoundedIcon sx={{ fontSize: 30,cursor: "pointer", color:"white" }}/>
          <DropDown>
          <AccountCircleRoundedIcon sx={{ fontSize: 30, cursor: "pointer", color:"white" }} />
          <KeyboardArrowDownRoundedIcon sx={{color:'aqua', marginTop:"3px", marginRight:"3px",cursor: "pointer" }}/>
          <Select>
            <option
            onClick={(e)=>{
              e.preventDefault();
              handleProfile();
            }
              }>Profile</option>
            <option onClick={(e)=>{
              e.preventDefault();
              handleLogout();
            }
              }>Logout</option>
          </Select>
          </DropDown>
          </Nav>
        </Navbar>
    </div>
  )
}
const Navbar = styled.nav`
  display: flex;
  height: 10vh;
  gap:900px;
  align-items:center;
  background-color: grey;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
   
const Logo = styled.img`
  width: 160px;
  height:50px;
  margin-left: 100px; 
`;

const Nav = styled.div`
display: flex;
padding: 10px; 
gap:40px;

`;

const DropDown = styled.div`
display: flex;
`;

const Select = styled.select`
position: absolute;
opacity:0;
cursor: pointer;
`;

export default NavBar;
