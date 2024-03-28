import { Sidebar, Menu, MenuItem,SubMenu } from "react-pro-sidebar";
/* importation icons*/
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";


/* importation icons*/ 



function Bar() {


  return (
    <div id="app"  collapsed={true} style={({ height: "100vh"}, { color : "#4154f2"}, { display: "flex" })}>
      <Sidebar style={{ /* modificatoin des outlis interne du dashbaord*/color:"black", height: "100vh" }}>
     
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              
              /* collapse side bar gere la reaction de la side bar a l appuis puis le rest c est du react boostrap normal  */
            }}
            style={{ textAlign: "center" }}
          >
            {""}
            <h2>Admin</h2>
          </MenuItem>
         
          <MenuItem icon={<HomeOutlinedIcon  />}>Home</MenuItem>
          <SubMenu icon={<HomeOutlinedIcon />} label="Home">
            <MenuItem icon={<PeopleOutlinedIcon />}>Item 1</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon />}>Item 2</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon />}>Item 3</MenuItem>
      </SubMenu>
        
          <MenuItem icon={<PeopleOutlinedIcon  /> }>Te</MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
          
      
      </Sidebar>
     
    </div>
  );
}

export default Bar;