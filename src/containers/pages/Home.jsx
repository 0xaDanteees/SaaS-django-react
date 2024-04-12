import BlogList from "components/blog/BlogList";
import CTA from "components/home/CTA";
import FAQs from "components/home/FAQs";
import Header from "components/home/Header";
import Incentives from "components/home/Incentives";
import Logos from "components/home/Logos";
import FullWidthLayout from "HOCS/layouts/FullWidthLayout";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { get_blog_list, get_blog_list_page } from "redux/actions/blog";
import Particle from "containers/Particle";
import './index.css';

function Home({
    blog_list,
    get_blog_list,
    get_blog_list_page
}){

    useEffect(()=>{
        blog_list ? <></>:get_blog_list()
        
    },[])

    const[toggleParticles, setToggleParticles] = useState(false);

    const changeParticlesState = () => {
        if(window.scrollY >= 400) {
            setToggleParticles(false);
        } else {
            setToggleParticles(true);
        }
    }

    window.addEventListener('scroll', changeParticlesState); 

    return(
        <FullWidthLayout>
            {toggleParticles
                ? <Particle></Particle>
                : <span/>}
            <Header/>
            {/* <Logos/> */}
            <div className="gradient__bg-2">
                <BlogList get_blog_list_page={get_blog_list_page} blog_list={blog_list}/>
                <Incentives/>
            </div>
            <FAQs/>
            <CTA/>
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({
    blog_list: state.blog.blog_list
})

export default connect(mapStateToProps,{
    get_blog_list,
    get_blog_list_page
})(Home)