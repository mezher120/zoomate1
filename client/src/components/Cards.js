import React from 'react'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import './Cards.css';

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



  return (
    <div className='Cardscontainer'>
            <div className='CardHeader'>
                <img className='CardImg' src='https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg' alt='not found'></img>
                <FavoriteTwoToneIcon color='disabled' className='CardFavoriteIcon'></FavoriteTwoToneIcon>
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