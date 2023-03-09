import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./Sidebar.css"
import Header from "../Header/Header";
import OrderTrack from "../../OrdersReturn/OrderTrack/OrderTrack";
import Coupons from "../../Credits/Coupons/Coupons";
import Rewards from "../../Credits/Rewards/Rewards";
import Refer from "../../Credits/Refer/Refer";
import Terms from "../../Others/Terms/Terms";
import Orders from "../../OrdersReturn/Orders";
import Help from "../../Others/Help/Help";
import BankDetails from "../../BankDetails/BankDetails";
import ManageAddresses from "../../ManageAddresses/ManageAddresses";
import MensWear from "../../MensWear/MensWear";
import MySharedCatalogues from "../../MySharedCatalogues/MySharedCatalogues";
import MyWishList from "../../MyWishList/MyWishList";
import Checkout from "../../Checkout/Checkout";
import Checkout2 from "../../Checkout2/Checkout2";
import PaymentCheckout from "../../PaymentCheckout/PaymentCheckout";
import Payments from "../../Payments/Payments";
import Profile from "../../Profile/Profile";
import Wallet from "../../Wallet/Wallet";
import Dashbord from "../../Dashboard/Dashboard"

import OrderCompleted from "../../OrderCompleted/OrderCompleted"
import MyShopingCart from "../../MyShopingCart/MyShopingCart"
import Dashboard from "../../Dashboard/Dashboard";



const drawerWidth = 200;
const drawerHeight = "90%";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex"}} >
      <CssBaseline />
      <AppBar position="fixed"  open={open}  >
        <Toolbar style={{ backgroundColor: "white", position:'relative' }}>
          <IconButton
            color="white"
            className="openbtn"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
         <Header/>

        </Toolbar>

      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          height: drawerHeight,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          height: drawerHeight,
            boxSizing: "border-box",
            position:'fixed',
            zIndex:999,
            marginTop:'5.5rem',
            background: "#164C96"
          
          },
          
          bottom:'0px'
        }}
     
        variant="persistent"
        anchor="left"
        open={open}
      >
     
     
        <Divider />
        <IconButton onClick={handleDrawerClose}
        sx={{
        position:"absolute",
        right:"0px",
        zIndex:"9999999999",
        color:"white"
        
        }}
        >
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
        <List className="sidebarbackgroundCol p-0">

        <nav id="sidebar" class="active">

<ul class="list-unstyled components p-0">
     <li>        
        <Link to="/dashboard"><i class="las la-home"></i>Dashboard</Link>
    </li>

    {/* products */}
    <li>

        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="las la-cube"></i>Orders</a>
        <ul class="list-unstyled collapse" id="homeSubmenu">
            <li id="akaiconspace">
               <div className="clickmenu"><Link to="/orders/track"><i class="las la-cube"></i>Orders & Returns</Link> <Link to="/products/addproduct"><i class="las la-plus-circle" style={{color:"#ffff"}}></i></Link></div>
            </li>
            <li id="akaiconspace">
               <div className="clickmenu"><Link to="/catalog_product"><i class="ri-share-line"></i>My Shared Catalogues</Link></div>
            </li>
            <li id="akaiconspace">
               <div className="clickmenu"><Link to="/my_wishlist"><i class="las la-heart"></i>My Wishlist</Link></div>
            </li>
        </ul>
    </li>


{/* orders */}

    <li>
        <a href="#ProductSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="las la-cart-plus"></i>Account</a>
        <ul class="list-unstyled collapse" id="ProductSubmenu">
            <li id="akaiconspace">
               <div className="clickmenu"><Link to="/profile"><i class="las la-user"></i>Profile</Link> <span class="badge rounded-pill"style={{backgroundColor:"#37C282"}}>4</span></div>
            </li>
            <li id="akaiconspace">
               <div className="clickmenu"><Link to="/manage_address"><i class="las la-map-marker"></i>Manage Addresses</Link></div>
            </li>
            <li id="akaiconspace">
               <div className="clickmenu"><Link to="/bank_details"><i class="las la-university"></i>Bank Details</Link></div>
            </li>
            <li id="akaiconspace">
               <div className="clickmenu"><Link to="/payment"><i class="las la-credit-card"></i>Payments</Link></div>
            </li>
            <li id="akaiconspace">
               <div className="clickmenu"><Link to="/wallet"><i class="las la-wallet"></i>Wallet</Link></div>
            </li>
        </ul>
    </li>


    <li>
    <a href="#SettingSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="las la-info-circle"></i>Credits</a>
    <ul class="list-unstyled collapse show" id="SettingSubmenu">
    <li id="akaiconspace">
               <div className="clickmenu"><Link to="/coupon"><i class="las la-ticket-alt"></i>Coupons</Link></div>
            </li>
            <li id="akaiconspace">
               <div className="clickmenu"><Link to="/reward"><i class="las la-gift"></i>Rewards</Link></div>
            </li>
            <li id="akaiconspace">
               <div className="clickmenu"><Link to="/refer"><i class="las la-user-plus"></i>Refer & Earn</Link></div>
            </li>
    </ul>
  </li>
  <li>
    <a href="#OtherSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="las la-info-circle"></i>Others</a>
    <ul class="list-unstyled collapse" id="OtherSubmenu">
    <li id="akaiconspace">
               <div className="clickmenu"><Link to="/help"><i class="las la-info-circle"></i>Help</Link></div>
            </li>
            <li id="akaiconspace">
               <div className="clickmenu"><Link to="/term"><i class="las la-file-alt"></i>Term & Conditions</Link></div>
            </li>
    </ul>
  </li>
</ul>


</nav>


        </List>
      </Drawer>
      <Main open={open} style={{ backgroundColor: "#F5F7F9", padding: "0px" }}>
        <DrawerHeader />
        <div className="container-fluid p-0" id="absoluteallroute">
       
          <Routes>

          <Route exact path="/coupon" element={<Coupons/>}/>
          <Route exact path="/reward" element={<Rewards/>}/>
          <Route exact path="/refer" element={ <Refer/>}/>
          <Route exact path="/term" element={ <Terms/>}/>
          <Route exact path="/help" element={ <Help/>}/>
          <Route exact path="/orders" element={ <Orders/>}/>
          <Route exact path="/orders/track" element={<OrderTrack/>}/>





          <Route exact path="/bank_details" element={<BankDetails/>}/>
          <Route exact path="/manage_address" element={<ManageAddresses/>}/>
          <Route exact path="/mens_wear" element={<MensWear/>}/>
          <Route exact path="/catalog_product" element={<MySharedCatalogues/>}/>
          <Route exact path="/my_wishlist" element={<MyWishList/>}/>
          <Route exact path="/checout_third" element={<Checkout/>}/>
          <Route exact path="/checout_second" element={<Checkout2/>}/>
          <Route exact path="/payment_checkout" element={<PaymentCheckout/>}/>
          <Route exact path="/order/complete" element={<OrderCompleted/>}/>
          <Route exact path="/my_shoping_cart" element={<MyShopingCart/>}/>
          <Route exact path="/payment" element={<Payments/>}/>

          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/wallet" element={<Wallet/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>

          










          

          

          </Routes>

        </div>
      </Main>
    </Box>
  );
}