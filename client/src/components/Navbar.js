import React, { useEffect, useState } from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import LocationCityTwoToneIcon from '@mui/icons-material/LocationCityTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import GroupTwoToneIcon from '@mui/icons-material/GroupTwoTone';
import ExploreTwoToneIcon from '@mui/icons-material/ExploreTwoTone';
import { places } from '../jsons/jsons';
import { auth } from '../firebase'
import { EmailAuthCredential } from 'firebase/auth';

function Navbar() {
  
  const [openDate, setOpenDate] = useState(false)
  const [openOptions, setOpenOptions] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const [openPeople, setOpenPeople] = useState(false); 
  const [inputCity, setInputCity] = useState(""); 
  const [citiesSearch, setCitiesSearch] = useState([]);
  const [options, setOptions] = useState({
    adults: 1,
    childs: 0,
    pets: 0
  })
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [user, setUser] = useState(null);
  console.log(user, 'in navbar')
  useEffect(() => {
    const userConnected = localStorage.getItem('user')
    setUser(userConnected)
  }, [])
  
  function setOpensfx(props) {
    if (props === 'date') {
      if (openDate) {
        return setOpenDate(false);
      }
      setOpenDate(true);
      setOpenOptions(false);
    }

    if (props === 'options') {
      if (openOptions) {
        return setOpenOptions(false);
      }
      setOpenDate(false);
      setOpenOptions(true);
    }
  }



  function optionsChange(option, method) {

    if (option === 'adults') {
      if (options.adults > 0) {
        if (method === "i") {
          setOptions({...options, adults: options.adults + 1})
        } else {
          setOptions({...options, adults: options.adults - 1})
         }
      } else if (options.adults === 0) {
        if (method === "i") {
          setOptions({...options, adults: options.adults + 1})
      } else {
        return;
      } 
    } else {
        return;
      }
    }
    if (option === 'childs') {
      if (options.childs > 0) {
        if (method === "i") {
          setOptions({...options, childs: options.childs + 1})
        } else {
          setOptions({...options, childs: options.childs - 1})
         }
      } else if (options.childs === 0) {
        if (method === "i") {
          setOptions({...options, childs: options.childs + 1})
      } else {
        return;
      } 
    } else {
        return;
      }
    }
    if (option === 'pets') {
      if (options.pets > 0) {
        if (method === "i") {
          setOptions({...options, pets: options.pets + 1})
        } else {
          setOptions({...options, pets: options.pets - 1})
         }
      } else if (options.pets === 0) {
        if (method === "i") {
          setOptions({...options, pets: options.pets + 1})
      } else {
        return;
      } 
    } else {
        return;
      }
    }
  }

  function handleOnChangeCity(e) {
    console.log(e.target.value)
    setInputCity(e.target.value);
    const citiesArray = [];
    if (e.target.value.length === 0) {
      return setCitiesSearch([]);
    }
    for (let i = 0; i < places.length; i++) {
      if (places[i].city.toLowerCase().includes(e.target.value)) {
        citiesArray.push({city: places[i].city, neighborhood: places[i].neighborhood, country: places[i].country});
      }
      if (places[i].neighborhood.toLowerCase().includes(e.target.value)) {
        const citiesArrayHasCity = citiesArray.some(city => city.neighborhood === places[i].neighborhood)
        if (!citiesArrayHasCity) {
          citiesArray.push({city: places[i].city, neighborhood: places[i].neighborhood, country: places[i].country});
        }         
        }

    }
  
    console.log(citiesArray);
    setCitiesSearch(citiesArray);
  } 

  const getToLogin = () => {
  if (!user) {
    window.location.href = '/login' 
  } else {
    auth.signOut() 
    localStorage.removeItem('user')
    setUser(null)
  }
}

  console.log(citiesSearch.length)

  return (
    <div className='Navcontainer'>
        <div>
            <h1 className='Navlogo'>Zoomate.com</h1>
        </div>

        <div className='NavsearchContainer'>
            <div className='NavdivSearch'>
            <LocationCityTwoToneIcon className='NavIconSearch'></LocationCityTwoToneIcon>
            <input className='NavinputCity' placeholder='City, neighborhood...' value={inputCity} onChange={(e) => handleOnChangeCity(e)} ></input>
            <div className='NavCitiesSearchContainer'>
              {citiesSearch && citiesSearch.map(city => (
              <div onClick={() => {setInputCity(city.neighborhood); setCitiesSearch([])}} className='NavCitySearch'>
                <ExploreTwoToneIcon></ExploreTwoToneIcon>
                <span>{city.neighborhood}, {city.city}, {city.country}</span>
              </div>
              )) }
            </div>
            <div className='Navseparator'></div>
            <CalendarMonthTwoToneIcon className='NavIconSearch'></CalendarMonthTwoToneIcon>
            <input onClick={() => setOpensfx('date')} value={`${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(date[0].endDate, 'dd/MM/yyy')}`} className='NavinputDate' placeholder='      from - to' ></input>
            {openDate && <DateRange
            className='NavDate'
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            />}
            <div className='Navseparator'></div>
            <GroupTwoToneIcon className='NavIconSearch'></GroupTwoToneIcon>
            <input onClick={() => setOpensfx('options')} value={`${options.adults} Adults - ${options.childs} Childs - ${options.pets} Pets`} className='NavinputDate' placeholder='      from - to' ></input>
            {openOptions &&   
            < div className='NavListContainer'>
              <ul className='NavUl'>
                <li className='NavList'>
                  <span>Adults</span>
                  <div className='NavListbuttons'>
                  <button onClick={() => optionsChange("adults", "d")} className='NavListbuttonIndividualLeft'>-</button>
                  <span>{options.adults}</span>
                  <button onClick={() => optionsChange("adults", "i")}  className='NavListbuttonIndividualRight'>+</button>
                  </div>
                </li>
                <li className='NavList'>
                  <span>Childs</span>
                  <div className='NavListbuttons'>
                  <button onClick={() => optionsChange("childs", "d")} className='NavListbuttonIndividualLeft'>-</button>
                  <span>{options.childs}</span>
                  <button onClick={() => optionsChange("childs", "i")} className='NavListbuttonIndividualRight'>+</button>
                  </div>
                </li>
                <li className='NavList'>
                  <span>Pets</span>
                  <div className='NavListbuttons'>
                  <button onClick={() => optionsChange("pets", "d")} className='NavListbuttonIndividualLeft'>-</button>
                  <span>{options.pets}</span>
                  <button onClick={() => optionsChange("pets", "i")} className='NavListbuttonIndividualRight'>+</button>
                  </div>
                </li>
              </ul>
              <button onClick={() => setOpenOptions(false)} className='NavFilterButton'>Filter</button>
            </div> }
            <SearchIcon className='NavsearchIcon' ></SearchIcon>
            </div>
        </div>

        <div className='NavbuttonsContainer'>
            <LanguageIcon onClick={() => setLanguageOpen(!languageOpen)} className='Navbuttons'></LanguageIcon>
            {languageOpen && <div className='LanguageContainer'>
              <div onClick={() => setLanguageOpen(!languageOpen)}  className='Languages'>
                <img className='Navflags' src='https://flagcdn.com/16x12/es.png' alt='spanish' ></img>
                <span>Spanish</span>
              </div>
              <div onClick={() => setLanguageOpen(!languageOpen)}  className='Languages'>
                <img className='Navflags' src='https://flagcdn.com/16x12/us.png' alt='spanish' ></img>
                <span>English</span>
              </div>
            </div> }
            <NotificationsNoneIcon className='Navbuttons'></NotificationsNoneIcon>
            <div className='NavUserLogin Navbuttons'>
            <AccountCircleIcon onClick={() => getToLogin()} className='Navbuttons'></AccountCircleIcon>
            {user ? <span className='NavUserEmail'>{user}</span> : ""}
            </div>
        </div>
    </div>
  )
}

export default Navbar