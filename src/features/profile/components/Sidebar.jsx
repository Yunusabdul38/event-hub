import PropTypes from 'prop-types';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Sidebar = ({activePath}) => {
  const [active, setActive] = useState(false)
  const [settingOptions, setSettingOptions] = useState([
    {
      name: "profile",
      active: true,
    },
    {
      name: "account info",
      active: false,
    },
    {
      name: "change email",
      active: false,
    },
    {
      name: "password",
      active: false,
    },
  ]);

  const toggleActive = (arr, val) => {
    let newArr = []
    arr.forEach((el) => {
      if(el.name == val) {
        newArr.push({
          name: el.name,
          active: true,
        })
      } else {
        newArr.push({
          name: el.name,
          active: false
        })
      }
    })
    console.log(newArr)
    setSettingOptions(newArr);
  }
  // const settingOptions = 

  return (
    <div className="lg:w-[400px]  md:w-[350px] w-full lg:bg-gray-100 md:bg-gray-100 border-b h-min-[400px]">
      <h2 className="font-bold flex justify-between lg:text-left md:text-left text-center text-3xl lg:mb-10 md:mb-10 p-6">
        <span>Account Settings</span>
        <span className="lg:hidden md:hidden visible" onClick={() => setActive(!active)}><img width="30" height="30" src="https://img.icons8.com/ios/50/menu--v1.png" alt="menu--v1"/></span>
      </h2>
      <div className={`settingOptions lg:flex md:flex gap-3 flex-wrap ${active ? 'visible text-center' : 'hidden'}`}>
        {settingOptions.map((opt, _i) => (
            <p key={_i} className={`capitalize text-lg cursor-pointer w-full px-6 py-3 ${opt.active ? 'bg-white lg:font-[500] md:font-[500] font-bold' : 'bg-none'}`} onClick={() => {
              toggleActive(settingOptions, opt.name)
              activePath({
                path: opt.name
              })
            }}>
              {opt.name}
            </p>
        ))}
      </div>
    </div>
  )
}
Sidebar.PropTypes = {
  activePath: PropTypes.func
};
export default Sidebar;