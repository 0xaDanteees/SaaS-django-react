import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import { useEffect } from "react"
import { connect } from "react-redux"
import { get_categories } from "redux/actions/categories"


const FullWidthLayout = ({ children, categories }) => {

    useEffect(() => {
        categories ? <></> : get_categories()
    }, [])
    return (
        <>
            <Navbar />
            <div className=" mx-auto">
                
                <div className=" mx-auto">
        
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}

const mapStateToProps = state => ({
    categories: state.categories.categories
})

export default connect(mapStateToProps, {

})(FullWidthLayout)