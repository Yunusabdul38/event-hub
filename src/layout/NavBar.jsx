import { useState } from "react";
import { Select, MenuItem, TextField, InputAdornment, Box } from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { AppButton } from "../components/button/AppButton";
import styles from './Layout.module.css'
import { appRoutes } from "../config/routeMgt/RoutePaths";



const NavBar = () => {
  const [isActive, setIsActive] = useState("Home");

  // category and search
  const [selectedValue, setSelectedValue] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="flex  sticky top-0 bg-white justify-between max-[1023px]:pb-20">
      <div className="flex flex-col w-full">
        <div className="py-5 flex items-center pl-11 max-sm:pl-2 justify-between">
          <span style={{ fontFamily: "cursive" }} className="text-[var(--app-blue)] text-xl font-semibold">
            Logo
          </span>

          {/* category search */}
          <div className="xl:mr-[20vw] lg:mr-[15vw]  mr-[5vw]">
            <Box display="flex" alignItems="center">
              {/* <InputLabel id="demo-simple-select-helper-label">Category</InputLabel> */}
              <Select IconComponent={() => null} labelId="demo-simple-select-helper-label" id="demo-simple-select-helper" value={selectedValue} onChange={handleSelectChange} size="small" variant="outlined" displayEmpty sx={{ mr: 0, bgcolor: "var(--app-blue)", borderTopLeftRadius: 8, borderBottomLeftRadius: 8, color: "white" }} label="Category" name={"Category"} className={styles.navCategorySelect}>
                <MenuItem value="" disabled>
                  Category
                </MenuItem>
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
                <MenuItem value="option3">Option 3</MenuItem>
              </Select>
              <TextField
                value={searchText}
                onChange={handleSearchChange}
                variant="standard"
                placeholder="Search Events Here"
                className={styles.navSearch}
                sx={{ ml: 4, pl: 4, width: "auto" }}
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon htmlColor="var(--app-blue)" className="cursor-pointer" />
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                }}
              />
            </Box>
          </div>
        </div>

        {/* main nav area for large sreens*/}
        <div className="py-10 pl-11 w-full max-[1023px]:hidden border-t border-t-[var(--app-grey)] relative flex justify-center ">
          <nav className=" flex  xl:w-3/4 lg:w-full justify-between max-w-full absolute top-[-1px] bottom-0 ">
            <Link
              className={`${isActive === "Home" ? "text-[var(--app-blue)] border-t-[var(--app-blue)]" : ""}  border-t-2 border-transparent hover:text-[var(--app-blue)] cursor-pointer ease-in duration-300 font-bold lg:pl-6  xl:pl-10  pt-5`}
              onClick={() => {
                setIsActive("Home");
              }}
              to={appRoutes.home}
            >
              Home
            </Link>
            <Link className={`${isActive === "Find Events" ? "text-[var(--app-blue)] border-t-[var(--app-blue)]" : ""}  border-t-2 border-transparent hover:text-[var(--app-blue)] cursor-pointer ease-in duration-300 font-bold  lg:pl-6  xl:pl-10  pt-5`}
              onClick={() => {
                setIsActive("Find Events");
              }}
              to={appRoutes.coming_soon}
            >
              Find Events
            </Link>
            <p
              className={`${isActive === "Create Events" ? "text-[var(--app-blue)] border-t-[var(--app-blue)]" : ""}  border-t-2 border-transparent hover:text-[var(--app-blue)] cursor-pointer ease-in duration-300 font-bold  lg:pl-6  xl:pl-10   pt-5`}
              onClick={() => {
                setIsActive("Create Events");
              }}>
              Create Events
            </p>
            <p
              className={`${isActive === "Help Center" ? "text-[var(--app-blue)] border-t-[var(--app-blue)]" : ""}  border-t-2 border-transparent hover:text-[var(--app-blue)] cursor-pointer ease-in duration-300 font-bold  lg:pl-6  xl:pl-10  pt-5`}
              onClick={() => {
                setIsActive("Help Center");
              }}>
              Help Center
            </p>
            <p
              className={`${isActive === "About Us" ? "text-[var(--app-blue)] border-t-[var(--app-blue)]" : ""}  border-t-2 border-transparent hover:text-[var(--app-blue)] cursor-pointer ease-in duration-300 font-bold  lg:pl-6  xl:pl-10  pt-5`}
              onClick={() => {
                setIsActive("About Us");
              }}>
              About Us
            </p>
            <Link
              className={`${isActive === "Contact Us" ? "text-[var(--app-blue)] border-t-[var(--app-blue)]" : ""}  border-t-2 border-transparent hover:text-[var(--app-blue)] cursor-pointer ease-in duration-300 font-bold  lg:pl-6  xl:pl-10 pt-5`}
              onClick={() => {
                setIsActive("Contact Us");
              }}
              to={appRoutes.contact_us}
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* main nav for mobile screens (smartphone and tab) */}
        <div className=" flex lg:hidden items-center justify-items-center justify-center gap-4 w-full py-5 absolute top-20 border-t border-t-[var(--app-grey)]">
          <AppButton variant="transparent" label="Home" />
          <AppButton variant="transparent" label="Find Events" />
          <AppButton variant="transparent" label="Create Event +" containerStyle="border-black" />
        </div>
      </div>

      {/* sign up & login */}
      <div className="mt-5 pr-11 flex justify-between gap-4 md:gap-8 w-2/5 xl:w-1/5 lg:w-1/3  ">
        <Link to={appRoutes.sign_up}>
          <AppButton variant="text" label="Sign Up" containerStyle="whitespace-nowrap" />
        </Link>
        <Link to={appRoutes.login}>
          <AppButton label="Login" />
        </Link>
      </div>{" "}
    </div>
  );
};

export default NavBar;
