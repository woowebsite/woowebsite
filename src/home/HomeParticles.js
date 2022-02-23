import React, { Component , Fragment } from "react";
import Slider from "react-slick";
import { slickDot } from "../page-demo/script";
import Scrollspy from 'react-scrollspy';
import ScrollToTop from 'react-scroll-up';
import Particles from 'react-particles-js';
import { FiChevronUp , FiX , FiMenu } from "react-icons/fi";
import ServiceList from "../elements/service/ServiceList";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import Team from "../elements/Team";
import BlogContent from "../elements/blog/BlogContent";
import BrandTwo from "../elements/BrandTwo";
import FooterTwo from "../component/footer/FooterTwo";
import Contact from "../elements/contact/ContactTwo";
import Helmet from "../component/common/Helmet";

const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: 'Thiết kế website',
        description: 'Thiết kế website theo công nghệ mới nhất, chuyên nghiệp, giá rẻ, chuẩn SEO và tương thích Mobile.',
        buttonText: 'Xem Demo',
        buttonLink: '/demo'
    }
]

const list = [
    {
        image: 'image-1',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-2',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'Getting tickets to the big show'
    }
]

class HomeParticles extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);

       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded');
        })
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }
    stickyHeader () {}
    render(){
        const PostList = BlogContent.slice(0 , 5);
        
        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 100) {
                document.querySelector('.header--fixed').classList.add('sticky')
            }else{
                document.querySelector('.header--fixed').classList.remove('sticky')
            }
        });

        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        
        return(
            <Fragment>
                <Helmet pageTitle="WooWebsite" />

                {/* Start Header Area  */}
                <header className="header-area formobile-menu header--fixed default-color">
                    <div className="header-wrapper" id="header-wrapper">
                        <div className="header-left">
                            <div className="logo">
                                <a href="/">
                                    <img className="logo-1" src="/assets/images/logo/logo-light.png" alt="Logo Images"/>
                                    <img className="logo-2" src="/assets/images/logo/logo-all-dark.png" alt="Logo Images"/>
                                </a>
                            </div>
                        </div>
                        <div className="header-right">
                            <nav className="mainmenunav d-lg-block">
                                <Scrollspy className="mainmenu" items={['home','service', 'about', 'portfolio','team','testimonial','blog', 'contact']} currentClassName="is-current" offset={-200}>
                                    <li><a href="#home">Trang chủ</a></li>
                                    <li><a href="#service">Dịch vụ</a></li>
                                    <li><a href="#about">Về chúng tôi</a></li>
                                    <li><a href="#portfolio">Các dự án</a></li>
                                    <li><a href="#team">Team</a></li>
                                    <li><a href="#testimonial">Ý kiến khách hàng</a></li>
                                    <li><a href="#blog">Tin tức</a></li>
                                    <li><a href="#contact">Liên hệ</a></li>
                                </Scrollspy>
                            </nav>
                            {/* Start Humberger Menu  */}
                            <div className="humberger-menu d-block d-lg-none pl--20">
                                <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                            </div>
                            {/* End Humberger Menu  */}
                            <div className="close-menu d-block d-lg-none">
                                <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                            </div>
                        </div>
                    </div>
                </header>
                {/* End Header Area  */}

                {/* Start Slider Area   */}
                
                <div className="slider-activation slider-creative-agency with-particles" id="home">
                    <div className="frame-layout__particles">
                        <Particles
                            params={{
                                "particles": {
                                    "number": {
                                        "value": 50
                                    },
                                    "size": {
                                        "value": 4
                                    }
                                },
                                "interactivity": {
                                    "events": {
                                        "onhover": {
                                            "enable": true,
                                            "mode": "repulse"
                                        }
                                    }
                                }
                            }}
                        />
                    </div>
                    <div className="bg_image bg_image--27">
                            {SlideList.map((value , index) => (
                                <div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center" key={index}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className={`inner ${value.textPosition}`}>
                                                    {value.category ? <span>{value.category}</span> : ''}
                                                    {value.title ? <h1 className="title theme-gradient">{value.title}</h1> : ''}
                                                    {value.description ? <p className="description">{value.description}</p> : ''}
                                                    {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                </div>
                {/* End Slider Area   */}

                {/* Start Service Area  */}
                <div className="service-area creative-service-wrapper ptb--120 bg_color--1" id="service">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-12">
                                <div className="section-title text-left mb--30">
                                    <h2>Dịch vụ của chúng tôi</h2>
                                    <p>Với nhiều năm kinh nghiệm trong dịch vụ thiết kế website và ứng dụng web. Sản phẩm được phát triển dựa trên công nghệ <b> JAM Stack </b>sử dụng <b> React</b> và <b> Nodejs</b>, đem đến cho khách hàng trải nghiệm nhanh nhất và hoàn toàn bảo mật.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div>
                    </div>
                </div>  
                {/* End Service Area  */} 

                {/* Start About Area */}
                <div className="about-area ptb--120 bg_color--5" id="about">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about-10.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">Về chúng tôi</h2>
                                            <p className="description">Được thành lập từ năm 2017 Sau 5 năm nỗ lực không ngừng, hàng nghìn khách hàng đã nhớ đến cái tên Woowebsite - Công ty hàng đầu trong lĩnh vực thiết kế web và ứng dụng web. Với một đội ngũ chuyên gia có tư duy tốt, kỹ thuật chuyên môn cao, say mê công việc. Sự chuyên sâu tạo nên sức mạnh cho Woowebsite trong việc ngày càng nâng cao chất lượng dịch vụ cho khách hàng và đối tác. </p>
                                        </div>
                                        <div className="row mt--30">
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">Đội ngũ chuyên nghiệp</h3>
                                                    <p>Đội ngũ nhân sự chuyên nghiệp với nhiều năm kinh nghiệm trong lĩnh vực web và phát triển phần mềm.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">Công nghệ mới nhất</h3>
                                                    <p>Website được triển khai trên công nghệ mới nhất hiện nay, đảm bảo tốc độ, bảo mật và tương thích tốt trên mọi thiết bị.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area */}

                {/* Start Portfolio Area */}
                <div className="portfolio-area pt--120 pb--140 bg_color--1" id="portfolio">
                    <div className="rn-slick-dot">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="section-title service-style--3 text-left mb--15 mb_sm--0">
                                        <h2 className="title">Dự án điển hình</h2>
                                        <p>WooWebsite luôn có gắng nỗ lực để tạo ra những website chất lượng và hài lòng khách hàng. Hãy tham khảo một vài tác phẩm website của chúng tôi dưới đây nhé! :)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="slick-space-gutter--15 slickdot--20">
                                        <Slider {...slickDot}>
                                            {list.map((value , index) => (
                                                <div className="portfolio" key={index}>
                                                    <div className="thumbnail-inner">
                                                        <div className={`thumbnail ${value.image}`}></div>
                                                        <div className={`bg-blr-image ${value.image}`}></div>
                                                    </div>
                                                    <div className="content">
                                                        <div className="inner">
                                                            <p>{value.category}</p>
                                                            <h4><a href="/portfolio-details">{value.title}</a></h4>
                                                            <div className="portfolio-button">
                                                                <a className="rn-btn" href="/portfolio-details">Case Study</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                            </div>

                            <div className="view-more-btn mt--60 text-center">
                                <a className="rn-button-style--2 btn-solid" href="/demo"><span>Xem Demo</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}

                {/* Start Blog Area */}
                <div className="rn-blog-area pt--120 pb--140 bg_color--1" id="blog">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8">
                                <div className="section-title text-left">
                                    <h2>Tin tức</h2>
                                    <p>Chia sẻ kiến thức về thiết kế website, công nghệ phần mềm, SEO, Marketing online...</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--55 mt_sm--30 rn-slick-dot slick-space-gutter--15 slickdot--20 row--0">
                            <div className="col-lg-12">
                                <Slider {...slickDot}>
                                    {PostList.map((value , i ) => (
                                        <div className="blog blog-style--1" key={i}>
                                            <div className="thumbnail">
                                                <a href="/blog-details">
                                                    <img src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images"/>
                                                </a>
                                            </div>
                                            <div className="content">
                                                <p className="blogtype">{value.category}</p>
                                                <h4 className="title"><a href="/blog-details">{value.title}</a></h4>
                                                <div className="blog-btn">
                                                    <a className="rn-btn text-white" href="/blog-details">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>    
                    </div>    
                </div>
                {/* End Blog Area */}

                {/* Start Contact Us */}
                <div className="rn-contact-us ptb--120 bg_color--5" id="contact">
                    <Contact />
                </div>
                {/* End Contact Us */}


                {/* Start Brand Area */}
                <div className="rn-brand-area bg_color--1 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area */}

                 {/* Start Footer Style  */}
                 <FooterTwo />
                {/* End Footer Style  */}
                
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

            </Fragment>
        )
    }
}
export default HomeParticles;