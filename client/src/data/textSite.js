import featured1 from '../assets/featured/jim.webp'
import featured2 from '../assets/featured/britches.webp'

//
import topRatings1 from '../assets/topRatings/camera-1.webp'
import topRatings2 from '../assets/topRatings/mobile-1.webp'
import topRatings3 from '../assets/topRatings/shoes-2.webp'
import topRatings4 from '../assets/topRatings/watch-1.webp'

//
import NewArrivals1 from '../assets/NewArrivals/NewArrivals 1.webp'
import NewArrivals2 from '../assets/NewArrivals/NewArrivals2.webp'
import NewArrivals3 from '../assets/NewArrivals/NewArrivals3.webp'
import NewArrivals4 from '../assets/NewArrivals/NewArrivals4.webp'
import NewArrivals5 from '../assets/NewArrivals/NewArrivals5.webp'
import NewArrivals6 from '../assets/NewArrivals/NewArrivals6.webp'


//

import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

//titleNavbar

export const titleNavbar="نت شاپ"

//boxAuhNavbar
export const boxAuhNavbar={
    register:"ثبت نام",
    login:"ورود",
    logout:"خروج",
}

//Description CarouselHome

export const DescriptionCaroselHome={
    title:"محصول جدید",
    description:"عرضه محصولات به صورت رایگان در سراسر ایران",
    buttonText:"محصول جدید",
}


//text CaroselCategory and Product

export const CaroselCategoryHome={
    viewAll:"نمایش بیشتر",
    topCategory:"دسته های برتر",
    flashDeals:"جدید",
    topRatings:"برترین ها",
    newArrivals:"تازها",
    bigdiscount:"فروش ویژه",
    FeaturedBrands:" برند های برتر",
    brands:" برند",
    viewAllBrands:" نمایش همه برند ها",
}




//featuredBanner
export const featuredBanner=[
    {
      id:1,
      title:'دیود جونز',
      rating:5,
      image:featured1,
      price:'799 تومان',
    },
    {
      id:2,
      title:'اپل',
      rating:4.6,
      image:featured2,
      price:'400 تومان',
    },
  ]





  //topRatingsBanners
  export const topRatingsBanners=[
    {
      id:1,
      title:'دوربین',
      rating:5,
      image:topRatings1,
      price:'3.300 تومان',
    },
    {
      id:2,
      title:'موبایل',
      rating:4.6,
      image:topRatings2,
      price:'400 تومان',
    },
    {
      id:3,
      title:'کفش',
      rating:4.7,
      image:topRatings3,
      price:'799 تومان',
    },
    {
      id:4,
      title:'ساعت',
      rating:4.5,
      image:topRatings4,
      price:'999 تومان',
    },
  ]


  //newArrivalsBanner
  export const newArrivalsBanner=[
    {
      id:1,
      title:'درخت بونسای',
      image:NewArrivals1,
      price:'3000 تومان',
    },
    {
      id:2,
      title:'گیاه',
      image:NewArrivals2,
      price:'400 تومان',
    },
    {
      id:3,
      title:'میکاب',
      image:NewArrivals3,
      price:'786 تومان',
    },
    {
      id:4,
      title:'الکترونیک',
      image:NewArrivals4,
      price:'375 تومان',
    },
    {
      id:5,
      title:'عینک آفتابی',
      image:NewArrivals5,
      price:'599 تومان',
    },
    {
      id:6,
      title:'لوازم آرایشی',
      image:NewArrivals6,
      price:'799 تومان',
    },
    
  ]


  //card product

  export const offerProduct={
    offer:"25% تخفیف"
  }
  
//footerInfo
  export const footerInfo={
      logo:titleNavbar,
      description:"ارسال محصولات به صورت کاملا رایگان به تمام نقاط ایران",
      contactUs:{
        address:"تهران - شهریار",
        email:"javadahmadi1931@gmail.com",
        phone:"09367394353",
      },
      abouts:{
       about:"درباره ما",
       privacyPolice:"شکایت",
       contact:"تماس با ما",
      },
      icons:{
          linkdin:<LinkedInIcon color="error"/>,
          facebook:<FacebookOutlinedIcon color="error"/>,
         twiter:<TwitterIcon color="error"/>,
         google:<GoogleIcon color="error"/>
      },
      namad:{
        title:"نماد کترونیک",
        img:""
      }
  }