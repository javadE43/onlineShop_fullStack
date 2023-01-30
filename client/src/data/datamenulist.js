import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export const dataListItem = [
  {
    id: 5,
    path: "/",
    title: "",
    icone: <HomeIcon />,
  },
  {
    id: 1,
    path: "/home",
    title: "صفحه اصلی",
    category: "CategoryHome",
    icone: <KeyboardArrowDownRoundedIcon />,
    subMenu: [
      {
        id: 1,
        category: "CategoryHome1",
        title: "صفحه اصلی",
        path: "/home1",
        icone: <ArrowLeftIcon />,
        iconeM: <ChevronLeftIcon />,
        subMenu: [
          {
            id: 1,
            category: "home1",
            title: "صفحه اصلی",
            path: "/contact1",
            icone: "",
          },

          {
            id: 2,
            category: "home1",
            title: "صفحه اصلی",
            path: "/contact1",
            icone: "",
          },
        ],
      },
      {
        id: 2,
        category: "CategoryHome2",
        title: "صفحه اصلی 2",
        path: "/Home2",
        icone: <ArrowLeftIcon />,
        iconeM: <ChevronLeftIcon />,
        subMenu: [
          {
            id: 2,
            category: "home2",
            title: "صفحه اصلی 2",
            path: "/contact1",
            icone: "",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    path: "/products",
    title: "فروشگاه",
    category: "CategoryProduct",
    icone: <KeyboardArrowDownRoundedIcon />,
    subMenu: [
      {
        id: 3,
        category: "electronics",
        title: "الکترونیک",
        path: `/products/category/electronics`,
        icone: <ArrowLeftIcon />,
        iconeM: <ChevronLeftIcon />,
        subMenu: [
          {
            id: 7,
            category: "categorycontact1",
            title: "product",
            path: "/contact1",
            icone: "",
          },
        ],
      },
      {
        id: 4,
        category: "jewelery",
        title: "جواهرات",
        path: `/products/category/jewelery`,
        icone: <ArrowLeftIcon />,
      },
      {
        id: 4,
        category: `men's clothing`,
        title: `لباس مردانه `,
        path: `/products/category/men's clothing`,
        icone: "",
      },
      {
        id: 4,
        category: `women's clothing`,
        title: `لباس زنانه`,
        path: `/products/category/women's clothing`,
        icone: "",
      },
    ],
  },
  {
    id: 3,
    path: "/about",
    title: "درباره ما",
    category: "CategoryAbout",
    icone: <KeyboardArrowDownRoundedIcon />,
    subMenu: [
      {
        id: 5,
        category: "categoryabout1",
        title: "درباره ما",
        path: "/about1",
        icone: <ArrowLeftIcon />,
        iconeM: <ChevronLeftIcon />,
        subMenu: [
          {
            id: 7,
            category: "categorycontact1",
            title: "درباره ما",
            path: "/contact1",
            icone: "",
          },
        ],
      },
      {
        id: 6,
        category: "categoryabout2",
        title: "درباره ما",
        path: "/about2",
        icone: "",
      },
    ],
  },
  {
    id: 4,
    path: "/contact",
    title: "تماس با ما",
    category: "CategoryContact",
    icone: <KeyboardArrowDownRoundedIcon />,
    subMenu: [
      {
        id: 7,
        category: "categorycontact1",
        title: "تماس",
        path: "/contact1",
        icone: <ArrowLeftIcon />,
        iconeM: <ChevronLeftIcon />,
        subMenu: [
          {
            id: 7,
            category: "categorycontact1",
            title: "تماس1",
            path: "/contact1",
            icone: "",
          },
        ],
      },
      {
        id: 8,
        category: "categorycontact2",
        title: "تماس2",
        path: "/contact2",
        icone: "",
      },
    ],
  },
];
