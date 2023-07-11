import React, { useEffect, useMemo, useState } from 'react'
import { GoogleMap, Marker, useLoadScript, GoogleApi } from "@react-google-maps/api"
import axios from 'axios';
import './CreatePlace.css';
import { db } from '../firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const containerStyle = {
  width: '800px',
  height: '800px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function CreatePlace() {

  let [numberOfPeople, setNumberOfPeople] = useState(0);
  let [hours, setHours] = useState(0);
  const [photos, setPhotos] = useState("");
  const [data, setData] = useState({
    country: "",
    city: "",
    numberOfPeople: 0,
    all: false,
    day: false,
    night: false,
    noise: 0,
    pictures: [],
    price: 0,
  });
  const [filter, setFilter] = useState({
    pets: false, 
    wifi: false, 
    workZone: false,
    kitchen: false,
    barbeque: false,
    fridge: false,
    pool: false,
})
  const [availability, setAvailability] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  })
  const [dynamicInputPhoto, setDynamicInputPhoto] = useState([1, 1, 1])
  console.log(dynamicInputPhoto, 'photo')
  console.log(photos)
  async function createZoom(e) {
    e.preventDefault();
    console.log(photos)
    const pictures = [];
    photos.map( async (photo) => {
      const newPhotoName = photo + Date.now();
      const storageRef = ref(db, `images/${photo.name}`); // create reference to storage
      try {
        const uploadImageRes = await uploadBytes(storageRef, photo)
        const photoUrlStoragefx = async (storageRef) => {
          try {
            const photoUrlStorage = await getDownloadURL(storageRef);
            pictures.push(photoUrlStorage);
            console.log(photoUrlStorage, "url")
            setData({...data, filter: filter, availability: availability, pictures: pictures})
          } catch (error) {
            console.log(error.message)
          }
        }
        await photoUrlStoragefx(storageRef) ;
      } catch (error) {
        console.log(error.message)
      }
      
    })
    console.log(pictures)
    // setData({...data, filter: filter, availability: availability, pictures: pictures})
    console.log(data)
  }

   function handleonChange(e) {
    console.log(e.target.name)
    console.log(e.target.value)
    setData({...data, [e.target.name]: e.target.value})
  }

  function handleOnChangeNumberOfPeople(e) {
    setData({...data, [e.target.name]: e.target.value})
    setNumberOfPeople(e.target.value)
  }

  function handleonChangeFilter(e) {
    setFilter({...filter, [e.target.name]: true});
  }

  function handleonChangeAvailability(e) {
    setAvailability({...availability, [e.target.name]: true});
  }

  function handleonChangeTime(e) {
    setData({...data, [e.target.name]: true});
  }

  function handleonChangeVoice(e) {
    setData({...data, [e.target.name]: e.target.value})
    setHours(e.target.value)
  }

// const {isLoaded} = useLoadScript({
//   googleMapsApiKey: 'AIzaSyDs8C6cUgQeU4-94gjGxvmtT32p_l-SwPc',
// });

// const [map, setMap] = React.useState(null)

// const onLoad = React.useCallback(function callback(map) {
//   // This is just an example of getting and using the map instance!!! don't just blindly copy!
//   const bounds = new window.google.maps.LatLngBounds(center);
//   map.fitBounds(bounds);

//   setMap(map)
// }, [])

// const onUnmount = React.useCallback(function callback(map) {
//   setMap(null)
// }, [])

// isLoaded ? 
  return (
    <div>
      <h1>
        Create your common place to rent...
      </h1>
      <div className='createPlaceContainer'>
        <div className='createPlaceFirstColumn'>
          <div className='createPlaceFirstColumnfirstpart'>
              <label>Country</label>
              <input type='text' placeholder='Country' name="country" onChange={(e) => handleonChange(e)}></input>
              <label>City</label>
              <input type='text' placeholder='City' name="city" onChange={(e) => handleonChange(e)}></input>
              <label>Number of People Max:</label>
              <input onChange={(e) => handleOnChangeNumberOfPeople(e)} type='range' min='0' max='500' value={numberOfPeople} 
              placeholder='People' name='numberOfPeople'></input>
              <span>{numberOfPeople}</span>
          </div>
          <div className='createPlaceFirstColumnsecondpart'>
            <h3>Filters</h3>
              <div className='createPlaceFirstColumnfirstitems'>
              <input type='checkbox' id='check1' name="pets" onChange={(e) => handleonChangeFilter(e)}></input>
              <label>Pets</label>
              <input type='checkbox' id='check2' name="wifi" onChange={(e) => handleonChangeFilter(e)}></input>
              <label>Wifi</label>
              <input type='checkbox' id='check3' name="work" onChange={(e) => handleonChangeFilter(e)}></input>
              <label>Work Zone / Oficine</label>
              <input type='checkbox' id='check4' name="kitchen" onChange={(e) => handleonChangeFilter(e)}></input>
              <label>Kitchen</label>
              <input type='checkbox' id='check5' name="barbeque" onChange={(e) => handleonChangeFilter(e)}></input>
              <label>Barbeque</label>
              <input type='checkbox' id='check6' name="fridge" onChange={(e) => handleonChangeFilter(e)}></input>
              <label>Fridge</label>
              <input type='checkbox' id='check7' name="pool" onChange={(e) => handleonChangeFilter(e)}></input>
              <label>Pool</label>
              </div>
          </div>
          <div className='createPlaceFirstColumnsecondpart'>
            <h3>Availability</h3>
            <div className='createPlaceFirstColumnfirstitems'>
              <input type='checkbox' id='checkone' name="monday" onChange={(e) => handleonChangeAvailability(e)}></input>
              <label>Monday</label>
              <input type='checkbox' id='checktwo' name="tuesday" onChange={(e) => handleonChangeAvailability(e)}></input>
              <label>Tuesday</label>
              <input type='checkbox' id='checkthree' name="wednesday" onChange={(e) => handleonChangeAvailability(e)}></input>
              <label>Wednesday</label>
              <input type='checkbox' id='checkfour' name="thursday" onChange={(e) => handleonChangeAvailability(e)}></input>
              <label>Thursday</label>
              <input type='checkbox' id='checkfive' name="friday" onChange={(e) => handleonChangeAvailability(e)}></input>
              <label>Friday</label>
              <input type='checkbox' id='checksix' name="saturday" onChange={(e) => handleonChangeAvailability(e)}></input>
              <label>Saturday</label>
              <input type='checkbox' id='checkseven' name="sunday" onChange={(e) => handleonChangeAvailability(e)}></input>
              <label>Sunday</label>
            </div>
            <div>
              <h3>Time</h3>
              <div className='createPlaceFirstColumnfirstitems'>
                <input type='checkbox' name="all" onChange={(e) => handleonChangeTime(e)}></input>
                <label>All Day/Night</label>
                <input type='checkbox' name="day" onChange={(e) => handleonChangeTime(e)}></input>
                <label>Day</label>
                <input type='checkbox' name="night" onChange={(e) => handleonChangeTime(e)}></input>
                <label>Night</label>
              </div>
            </div>
            <div className='createPlaceNoise'>
              <label>Noise you can do</label>
              <input onChange={(e) => handleonChangeVoice(e)} type='range' min='0' max='10' value={hours} placeholder='Hours'
              name="noise"></input>
              <span>{hours}</span>
              <h3>Photos</h3>
            </div>
              {dynamicInputPhoto && dynamicInputPhoto.map((input, index) => (
                <input type='file' id={index} name='filePhotos' onChange={(e) => setPhotos([...photos, e.target.files[0]])}></input>
              ))}
              <button onClick={() => setDynamicInputPhoto([...dynamicInputPhoto, 1])}>Add more...</button>
            <div>
              <h3>Rent and Price:</h3>
              <div className='createPlacePrice'>
                <label>Price per day/night</label>
                <input type='number' name='price' onChange={(e) => handleonChange(e)}></input>
              </div>
            </div>
          </div>
        </div>
        <div className='createPlaceSecondColumn'>
          <div className='createplaceSecondMapContainer'>
            <img width='900px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Island_of_California.jpg/300px-Island_of_California.jpg'></img>
          {/* <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >

          </GoogleMap> */}
            </div>
          </div>
        </div>
      <div className='border'></div>
      <div className='createPlaceButton'>
      <button onClick={(e) => createZoom(e)}>Create Zoomate Place</button>
      </div>
    </div>

  )
}

export default CreatePlace