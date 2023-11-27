# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm add react-router-dom`


Create Router Browser
### Routes

"""import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <span>Home</span>
  }
])"""



### 2. Create Pages

src > 
    pages

            Home
                Home.jsx
            Product
                Product.jsx
            Products
                Products.jsx

### 3. Create Navbar and Footer

1. Create Component Folder
    src
        components
            Footer
                Footer.jsx
            Navbar
                Navbar.jsx


2. use Outlet Component (represent different pages)

"
const Layout = () => {
  return (
    <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}"

"
 path: "/",
    element: <Layout />,
    children: [
      {
        path:"/",
        element: <Home />
      },
"
### 3. Create Navbar

`2. npm add sass`
`3. npm install @mui/material @emotion/react @emotion/styled`
`4. npm add @mui/icons-material`
`import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';`
`import SearchIcon from '@mui/icons-material/Search';`
`import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';`
`import FavoriteBorderOutlinedIcon  from '@mui/icons-material/FavoriteBorderOutlined';`
`import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';`

    app.scss

Component
    Slider
        Slider.jsx
        Slider.scss


Data [
    
]