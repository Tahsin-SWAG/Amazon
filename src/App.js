/* eslint-disable react/jsx-pascal-case */
import ButtonAppBar from "./components/Navbar"
import Banner from "./components/Banner"
import Section from "./components/Section"
import Card_Group from "./components/Card_Group"
import Footer from "./components/Footer"
export default function App() {
    return(
        <div>
            <ButtonAppBar/>
            <Banner/>
            <Section/>
            <Card_Group/>
            <Footer/>
        </div>
    )
}