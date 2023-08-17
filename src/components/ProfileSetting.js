import React, { useState } from "react";
import styled from '@emotion/styled';
import prImg from "./images/img6.jpg";
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import DropdownElement from './DropdownElement';
import InputField from "./InputField";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import SideBar from "./SideBar";


const ProfileSetting = () => {
    const WorkLocations =["India","Canada","Germany","Japan"];
    const TimeZones = [
        "(utc-8:00)Pacific Time",
        "(utc+5:30)Indian Standrad Time",
        "(utc+9:00)Tokyo, Seoul,Osaka", 
        ];
        const times =[];
        for(let i=1; i<=12; i++){
            times.push(`${i}:00 AM`);
            times.push(`${i}:00 PM`);
        }
        const [toggleState, setToggleState] = useState(true);
        const toggleIcon = (e) => {
            setToggleState(!toggleState);
            e.preventDefault();
        }
        const [Phone, setPhone] = useState("");

  return ( 
    <div>
     <SideBar />
    <MainDiv>
            <Heading>profile settings</Heading>
        <Body>
            <ProfileText>
            <h3>Profile Info</h3>
            </ProfileText>
            <Section>
                <InputField label={"First Name"}/>
                <InputField label={"Last Name"}/>
                <div style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
                <ImgSection>
                <Section2 src={prImg} alt="" />
                <CameraIcon><PhotoCameraOutlinedIcon/></CameraIcon>
                </ImgSection>
                </div>
                <InputField label={"Role"} />
                <InputField label ={"Email Address"}/>
                <DropdownElement label={"Work Location"} arr={WorkLocations}/>
                <PhoneVerify> <PhoneInput
                placeholder={"Mobile Number"} 
                country={"IN"}
                value={Phone} 
                onChange={Phone => setPhone(Phone)}
                 />
                </PhoneVerify>
                <div>
                    <DropdownElement label={"Time Zone"} arr={TimeZones}/>
                    <TextMessage>
                        <h4>Adjust for daylight saving time automatically</h4>     
                        <ToggleButton onClick={toggleIcon}>0</ToggleButton>
                            {toggleState ? (
                            <ToggleOff fontSize="medium" />
                            ) : (
                            <ToggleOn fontSize="medium" />
                            )}
                    </TextMessage>
                </div> 
                <div>
                    
                <WorkHours>Work Hours</WorkHours>
                <Section3>
                <DropdownElement label={"Start Time"} arr={times}/>
                <DropdownElement label={"End Time"} arr={times}/>
               </Section3>
               </div>
            </Section>
            <Update>
                <UpdateButton>Update</UpdateButton>
            </Update>   
        </Body>
    </MainDiv>
    </div>
  );
  }
const MainDiv = styled.div`
margin-left:60px;
background-color: whitesmoke;
width:96%;
height:100%;
`;

const Heading = styled.h3`
width: fit-content;
color: #a0a2a5;
`;

const Body = styled.div`
margin:20px;
border-radius: 10px;
padding: 20px 20px;
background-color: white;
`;

const ProfileText= styled.h3`
width: fit-content;
margin: 0;
/* padding: 10px 20px 20px 20px; */
/* margin-bottom: 20px; */
`;

const Section = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
grid-template-rows: repeat(3,130px);
justify-items: center;
align-items: center;
margin-left: 0px;
`;

const TextMessage = styled.div`
position: absolute;
transform: translateY(10px);
`;

const PhoneVerify = styled.div`
padding-left: 12px;
`;
 

const ToggleButton = styled.button`
  position: absolute;
  width: fit-content;
  z-index: 2;
  opacity: 0;
  transform: translateY(10px);
  cursor: pointer;
`;
const ToggleOff = styled(ToggleOffIcon)`
  position: absolute;
  transform: translateY(10px);
`;

const ToggleOn = styled(ToggleOnIcon)`
  position: absolute;
  transform: translateY(10px);
`;

const ImgSection = styled.div`
display: flex;
flex-direction: column;
`;

const Section2 = styled.img`
position: relative;
height:90px;
width:90px;
border-radius: 100px;
`;

const WorkHours = styled.span`
position:absolute;
transform: translateY(-35px);
`;

const Section3 =styled.div`
display: flex;
width: fit-content;
align-items: center;
width: 300px;
gap:30px;
`;

const CameraIcon = styled.a`
position: absolute;
background-color: white;
border-radius: 10px;
z-index:2;
transform: translate(60px , 60px);
cursor: pointer;
`;

const Update = styled.div`
`;

const UpdateButton = styled.button`
display: block;
height: 30px;
width: 80px;
border: none;
background-color: aqua;
color: white;
margin-left: auto;
margin-right: 30px;
cursor: pointer;
`;

export default ProfileSetting;
