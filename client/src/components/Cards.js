import React, { useState } from 'react'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import './Cards.css';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

function Cards() {
    // let slideIndex = 1;
    // console.log(first)
    // showSlides(slideIndex);


    // function plusSlide(params) {
    //     slideIndex = slideIndex + 1;
    // }

    // function lessSlide(params) {
    //     slideIndex = slideIndex - 1;
    // }

    // function showSlides(n) {
    //     let i;
    //     let slides = document.getElementsByClassName("CardImg");
    //     console.log(slides, "here")
    //     if (n > slides.length) {
    //         slideIndex = 1
    //     }
    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }
    //     for (let i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none"
    //     }
    //     slides[slideIndex - 1].style.display = "block";


    // }

    let imageArray = ['https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg',
                        'https://bambooarquitectura.com/wp-content/uploads/2020/06/casa-tradicional-08.jpg',
                        'https://bambooarquitectura.com/wp-content/uploads/2020/06/casas-contemporaneas-02.jpg',
                    'https://bambooarquitectura.com/wp-content/uploads/2020/06/casa-mujihouse-interior-madera.jpg']

    let [counterImage, setCounterImage] = useState(0);
    let [image, setImage] = useState(imageArray[counterImage]);
    console.log(counterImage)


    function lessSlide() {
        if (counterImage > 0) {
            setCounterImage(counterImage - 1);
            setImage(imageArray[counterImage]);
            return;
        }
        if (counterImage === 0) {
            setCounterImage(imageArray.length - 1);
            setImage(imageArray[counterImage]);
            return;
        }    
    }

    function plusSlide() {
        if (counterImage < imageArray.length) {
            setCounterImage(counterImage + 1);
            setImage(imageArray[counterImage]);
            return;
        }
        if (counterImage === imageArray.length) {
            setCounterImage(0);
            setImage(imageArray[0]);
            return;
        }  
    }

    // function lessSlide() {
    //     if (counter > 0) {
    //         counter = counter - 1;
    //         setImage(imageArray[counter]);
    //         return;
    //     }
    //     if (counter === 0) {
    //         counter = imageArray.length - 1;
    //         setImage(imageArray[counter]);
    //         return;
    //     }    
    // }

    // function plusSlide() {
    //     if (counter < imageArray.length) {
    //         counter = counter + 1;
    //         setImage(imageArray[counter]);
    //         return;
    //     }
    //     if (counter === imageArray.length) {
    //         counter = 0;
    //         setImage(imageArray[0]);
    //         return;
    //     }  
    // }
  return (
    <div className='Cardscontainer'>
            <div className='CardHeader'>
                <img className='CardImg' src={image} alt='not found'></img>
                <FavoriteTwoToneIcon color='disabled' className='CardFavoriteIcon'></FavoriteTwoToneIcon>
                <button onClick={() => plusSlide()} className='CardButtonLeft'><ArrowForwardIosRoundedIcon fontSize='inherit' /></button>
                <button onClick={() => lessSlide()} className='CardButtonRight'><ArrowBackIosRoundedIcon fontSize='inherit' /></button>
            </div>
            {/* <div className='CardHeader'>
                <img className='CardImg' src='https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg' alt='not found'></img>
                <FavoriteTwoToneIcon color='disabled' className='CardFavoriteIcon'></FavoriteTwoToneIcon>
            </div>
            <div className='CardHeader'>
                <img className='CardImg' src='https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg' alt='not found'></img>
                <FavoriteTwoToneIcon color='disabled' className='CardFavoriteIcon'></FavoriteTwoToneIcon>
            </div>
            <button onClick={() => lessSlide()} >back</button>
            <button onClick={() => plusSlide()} >forward</button> */}
        <div className='CardDescription'>
            <p className='CardCity'>City</p>
            <div className='CardStarFavorite'>
            <StarTwoToneIcon fontSize='small' className='CardStarIndividual' ></StarTwoToneIcon>
            <span>4.85</span>
            </div>
        </div>
            <span className='CardPrice'>$250 USD <span className='Cardnight'>night</span></span>
    </div>
  )
}

export default Cards