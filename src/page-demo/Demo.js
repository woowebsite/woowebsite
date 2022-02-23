import React, {Component, Fragment} from "react";
import ScrollToTop from 'react-scroll-up';
import Particles from 'react-particles-js';
import {
    FaReact,
    FaSass
} from "react-icons/fa";
import {
    FiSmartphone,
    FiCode,
    FiDownload,
    FiCommand,
    FiHeadphones,
    FiBold,
    FiChevronUp
} from "react-icons/fi";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const featureList = [
    {
        icon: <FaReact/>,
        title: 'Công nghệ mới nhất',
        subtitle: 'Sản phẩm được phát triển dựa trên công nghệ JAM Stack sử dụng React và Nodejs phiên bản mới nhất.'
    },
    {
        icon: <FiSmartphone/>,
        title: 'Tương thích mọi thiết bị',
        subtitle: 'Website được hiển thị hoàn hoả trên mọi thiết bị mobile, tablet, laptop.'
    },
    {
        icon: <FiCode/>,
        title: 'Hướng dẫn chi tiết',
        subtitle: 'Sản phẩm được cung cấp tài liệu hướng dẫn đi kèm rất chi tiết và chuyên nghiệp.'
    },
    
    {
        icon: <FiDownload/>,
        title: 'Tốc độ cực nhanh',
        subtitle: 'Website được phát triển dựa trên công nghệ JAM Stack, nên tốc độ tải cực nhanh.'
    },
    {
        icon: <FiCommand/>,
        title: 'Thiết kế hiện đại',
        subtitle: 'WooWebsite có nhiều thiết kế theo phong cách hiện đại như Creative Agency , Personal Portfolio'
    },
    {
        icon: <FiHeadphones/>,
        title: 'Hỗ trợ 24/7',
        subtitle: 'Hãy liên hệ ngay với chúng tôi bất cứ khi nào bạn cần hỗ trợ.'
    },
   
]

const singleDemo = [
    {
        url: 'main-demo',
        imageUrl: 'demo-home.png',
        title: 'Main Demo',
        description: 'Mẫu này có thể được áp dụng cho doanh nghiệp Agency với nhiều mục đích.',
        label: ''
    },
    {
        url: 'dark-main-demo',
        imageUrl: 'dark-main-demo.png',
        title: 'Main Demo — Dark Version',
        description: 'Mẫu này có thể được áp dụng cho doanh nghiệp Agency với nhiều mục đích.',
        label: 'New'
    },
    {
        url: 'creative-agency',
        imageUrl: 'creative-agency.png',
        title: 'Creative Agency',
        description: 'Đây là mẫu Agency hiện đại, phù hợp với những công ty Agency trong lĩnh vực sáng tạo, năng động.',
        label: ''
    },
    {
        url: 'corporate-business',
        imageUrl: 'corporate-business.png',
        title: 'Corporate Business',
        description: 'Corporate Business được xây dựng phù hợp cho những công ty startup với nhiều mục đích đa dạng.',
        label: 'Hot'
    },
    {
        url: 'interior-landing',
        imageUrl: 'interior-design.png',
        title: 'Interior Design',
        description: 'Interior design được sử dụng cho những công ty làm về thiết kế.',
        label: 'New'
    },
    {
        url: 'dark-portfolio-landing',
        imageUrl: 'dark-personal-portfolio-landing.png',
        title: 'Personal Portfolio 02 — One Page',
        description: 'Đây là một template dành cho cá nhân, sử dụng để giới thiệu bản thân, nghề nghiệp và chuyên môn cụ thể.',
        label: 'Hot'
    },
    {
        url: 'portfolio-landing',
        imageUrl: 'personal-portfolio-landing.png',
        title: 'Personal Portfolio — One Page',
        description: 'Đây là một template dành cho cá nhân, sử dụng để giới thiệu bản thân, nghề nghiệp và chuyên môn cụ thể.',
        label: ''
    },

    {
        url: 'creative-landing',
        imageUrl: 'creative-landing.png',
        title: 'Creative Agency 02 — One Page',
        description: 'Mẫu template được sử dụng cho những doanh nghiệp liên quan tới công nghệ, kỹ thuật số. Đây là một mẫu được thiết kế theo dạng Landing page.',
        label: ''
    },

    {
        url: 'creative-portfolio',
        imageUrl: 'creative-portfolio.png',
        title: 'Creative Portfolio',
        description: 'Creative Portfolio được sử dụng cho những porfolio năng động, sáng tạo.',
        label: ''
    },

    {
        url: 'designer-portfolio',
        imageUrl: 'designer-portfolio.png',
        title: 'Designer Portfolio',
        description: 'Designer Portfolio đây là một template chung cho những porfolio cá nhân sử dụng cho nhiều mục đích đa dạng.',
        label: 'Hot'
    },
    {
        url: 'home-particles',
        imageUrl: 'homeparticles.png',
        title: 'Home Particle — Landing Page',
        description: 'Home particle là một template theo dạng Landing page được sử dụng cho nhiều mục đích Agency, Business.',
        label: ''
    },
    {
        url: 'personal-portfolio',
        imageUrl: 'personal-portfolio.png',
        title: 'Personal Portfolio',
        description: 'Personal portfolio là một porfolio được dùng cho cá nhân phù hợp với những ngành nghề Freelancer, Designer, và Developer.',
        label: ''
    },

    {
        url: 'portfolio-home',
        imageUrl: 'portfolio-home.png',
        title: 'Minimal Portfolio',
        description: 'Đây là mẫu Portfolio đơn giản nhất, phù hợp với những cá nhân ưa chuộng phong cách đơn giản.',
        label: ''
    },

    {
        url: 'digital-agency',
        imageUrl: 'digital-agency.png',
        title: 'Digital Agency',
        description: 'Digital Agency là một mẫu gồm một slider đẹp mặt, nhanh và phù hợp với nhiều Agency.',
        label: ''
    },
    {
        url: 'business',
        imageUrl: 'business.png',
        title: 'Business',
        description: 'Đây là mẫu phù hợp với nhiều doanh nghiệp.',
        label: ''
    },
    {
        url: 'startup',
        imageUrl: 'startup.png',
        title: 'Startup',
        description: 'Đây là mẫu giao diện hiện đại với thiết kế sáng tạo, phù hợp với những công ty startup.',
        label: ''
    },
    {
        url: 'paralax',
        imageUrl: 'paralax.png',
        title: 'Paralax Home',
        description: 'Đây là một thiết kế theo phong các Paralax background. Sử dụng phù hợp cho những doanh nghiệp Business, Corporate, Degital Agency hoặc nhiều mục đích khác.',
        label: ''
    },
    {
        url: 'studio-agency',
        imageUrl: 'studio-agency.png',
        title: 'Studio Agency',
        description: 'Mẫu này sử dụng background video và video popup. Sử dụng phù hợp với những studio, media',
        label: ''
    
    },
    {
        url: '#comingsoon',
        imageUrl: 'coming-soon.png',
        title: 'Còn nữa...',
        description: 'Chúng tôi sẽ luôn phát triển và cập nhật những mẫu giao diện mới',
        label: ''
    }
]

const agencyDemo = [
    {
        url: 'main-demo',
        imageUrl: 'demo-home.png',
        title: 'Main Demo',
        description: 'Mẫu này có thể được áp dụng cho doanh nghiệp Agency với nhiều mục đích.',
        label: ''
    },
    {
        url: 'creative-agency',
        imageUrl: 'creative-agency.png',
        title: 'Creative Agency',
        description: 'Đây là mẫu Agency hiện đại, phù hợp với những công ty Agency trong lĩnh vực sáng tạo, năng động.',
        label: ''
    },
    {
        url: 'corporate-business',
        imageUrl: 'corporate-business.png',
        title: 'Corporate Business',
        description: 'Corporate Business được xây dựng phù hợp cho những công ty startup với nhiều mục đích đa dạng.',
        label: 'Hot'
    },
    {
        url: 'home-particles',
        imageUrl: 'homeparticles.png',
        title: 'Home Particle — Landing Page',
        description: 'Home particle là một template theo dạng Landing page được sử dụng cho nhiều mục đích Agency, Business.',
        label: ''
    },
    {
        url: 'digital-agency',
        imageUrl: 'digital-agency.png',
        title: 'Digital Agency',
        description: 'Digital Agency là một mẫu gồm một slider đẹp mặt, nhanh và phù hợp với nhiều Agency.',
        label: ''
    },
    {
        url: 'creative-portfolio',
        imageUrl: 'creative-portfolio.png',
        title: 'Creative Portfolio',
        description: 'Creative Portfolio sử dụng cho những porfolio năng động, sáng tạo.',
        label: 'New'
    },
    {
        url: 'studio-agency',
        imageUrl: 'studio-agency.png',
        title: 'Studio Agency',
        description: 'Mẫu này sử dụng background video và video popup. Sử dụng phù hợp với những studio, media',
        label: ''
    },
    {
        url: 'dark-main-demo',
        imageUrl: 'dark-main-demo.png',
        title: 'Main Demo — Dark Version',
        description: 'Mẫu này có thể được áp dụng cho doanh nghiệp Agency với nhiều mục đích.',
        label: 'New'
    },
    {
        url: 'creative-landing',
        imageUrl: 'creative-landing.png',
        title: 'Creative Agency 02 — One Page',
        description: 'Mẫu template được sử dụng cho những doanh nghiệp liên quan tới công nghệ, kỹ thuật số. Đây là một mẫu được thiết kế theo dạng Landing page.',
        label: ''
    },
    {
        url: 'interior-landing',
        imageUrl: 'interior-design.png',
        title: 'Interior Design',
        description: 'Interior design được sử dụng cho những công ty làm về thiết kế.',
        label: 'New'
    },
    {
        url: 'paralax',
        imageUrl: 'paralax.png',
        title: 'Paralax Home',
        description: 'Đây là một thiết kế theo phong các Paralax background. Sử dụng phù hợp cho những doanh nghiệp Business, Corporate, Degital Agency hoặc nhiều mục đích khác.',
        label: ''
    },
]

const busenessDemo = [
    {
        url: 'business',
        imageUrl: 'business.png',
        title: 'Business',
        description: 'Đây là mẫu phù hợp với nhiều doanh nghiệp.',
        label: ''
    },
    {
        url: 'startup',
        imageUrl: 'startup.png',
        title: 'Startup',
        description: 'Đây là mẫu giao diện hiện đại với thiết kế sáng tạo, phù hợp với những công ty startup.',
        label: ''
    },
    {
        url: 'corporate-business',
        imageUrl: 'corporate-business.png',
        title: 'Corporate Business',
        description: 'Corporate Business được xây dựng phù hợp cho những công ty startup với nhiều mục đích đa dạng.',
        label: 'Hot'
    },
    {
        url: 'creative-portfolio',
        imageUrl: 'creative-portfolio.png',
        title: 'Creative Portfolio',
        description: 'Creative Portfolio sử dụng cho những porfolio năng động, sáng tạo.',
        label: 'New'
    },
    {
        url: 'home-particles',
        imageUrl: 'homeparticles.png',
        title: 'Home Particle — Landing Page',
        description: 'Home particle là một template theo dạng Landing page được sử dụng cho nhiều mục đích Agency, Business.',
        label: ''
    },
    {
        url: 'studio-agency',
        imageUrl: 'studio-agency.png',
        title: 'Studio Agency',
        description: 'Mẫu này sử dụng background video và video popup. Sử dụng phù hợp với những studio, media',
        label: ''
    },
    {
        url: 'paralax',
        imageUrl: 'paralax.png',
        title: 'Paralax Home',
        description: 'Đây là một thiết kế theo phong các Paralax background. Sử dụng phù hợp cho những doanh nghiệp Business, Corporate, Degital Agency hoặc nhiều mục đích khác.',
        label: ''
    },
]

const portfolioList = [
    {
        url: 'personal-portfolio',
        imageUrl: 'personal-portfolio.png',
        title: 'Personal Portfolio',
        description: 'Personal portfolio là một porfolio được dùng cho cá nhân phù hợp với những ngành nghề Freelancer, Designer, và Developer.',
        label: ''
    },
    {
        url: 'dark-portfolio-landing',
        imageUrl: 'dark-personal-portfolio-landing.png',
        title: 'Personal Portfolio 02 — One Page',
        description: 'Đây là một template dành cho cá nhân, sử dụng để giới thiệu bản thân, nghề nghiệp và chuyên môn cụ thể.',
        label: 'Hot'
    },
    {
        url: 'designer-portfolio',
        imageUrl: 'designer-portfolio.png',
        title: 'Designer Portfolio',
        description: 'Designer Portfolio đây là một template chung cho những porfolio cá nhân sử dụng cho nhiều mục đích đa dạng.',
        label: 'Hot'
    },

    {
        url: 'creative-portfolio',
        imageUrl: 'creative-portfolio.png',
        title: 'Creative Portfolio',
        description: 'Creative Portfolio sử dụng cho những porfolio năng động, sáng tạo.',
        label: 'New'
    },
    {
        url: 'portfolio-home',
        imageUrl: 'portfolio-home.png',
        title: 'Minimal Portfolio',
        description: 'Đây là mẫu Portfolio đơn giản nhất, phù hợp với những cá nhân ưa chuộng phong cách đơn giản.',
        label: ''
    },
    {
        url: 'portfolio-landing',
        imageUrl: 'personal-portfolio-landing.png',
        title: 'Personal Portfolio — One Page',
        description: 'Đây là một template dành cho cá nhân, sử dụng để giới thiệu bản thân, nghề nghiệp và chuyên môn cụ thể.',
        label: 'New'
    },
    


]

const landingPage = [
    {
        url: 'dark-portfolio-landing',
        imageUrl: 'dark-personal-portfolio-landing.png',
        title: 'Personal Portfolio 02 — One Page',
        description: 'Đây là một template dành cho cá nhân, sử dụng để giới thiệu bản thân, nghề nghiệp và chuyên môn cụ thể.',
        label: 'Hot'
    },
    {
        url: 'portfolio-landing',
        imageUrl: 'personal-portfolio-landing.png',
        title: 'Personal Portfolio — One Page',
        description: 'Đây là một template dành cho cá nhân, sử dụng để giới thiệu bản thân, nghề nghiệp và chuyên môn cụ thể.',
        label: 'New'
    },
    {
        url: 'creative-landing',
        imageUrl: 'creative-landing.png',
        title: 'Creative Agency 02 — One Page',
        description: 'Mẫu template được sử dụng cho những doanh nghiệp liên quan tới công nghệ, kỹ thuật số. Đây là một mẫu được thiết kế theo dạng Landing page.',
        label: 'New'
    },
    {
        url: 'interior-landing',
        imageUrl: 'interior-design.png',
        title: 'Interior Design',
        description: 'Interior design được sử dụng cho những công ty làm về thiết kế.',
        label: 'New'
    },
    {
        url: 'home-particles',
        imageUrl: 'homeparticles.png',
        title: 'Home Particle — Landing Page',
        description: 'Home particle là một template theo dạng Landing page được sử dụng cho nhiều mục đích Agency, Business.',
        label: ''
    },
]

const newDemoList = [
    {
        url: 'dark-portfolio-landing',
        imageUrl: 'dark-personal-portfolio-landing.png',
        title: 'Personal Portfolio 02 — One Page',
        description: 'Đây là một template dành cho cá nhân, sử dụng để giới thiệu bản thân, nghề nghiệp và chuyên môn cụ thể.',
        label: 'Hot'
    },
    {
        url: 'dark-main-demo',
        imageUrl: 'dark-main-demo.png',
        title: 'Main Demo — Dark Version',
        description: 'Mẫu này có thể được áp dụng cho doanh nghiệp Agency với nhiều mục đích.',
        label: 'New'
    },
    {
        url: 'corporate-business',
        imageUrl: 'corporate-business.png',
        title: 'Corporate Business',
        description: 'Corporate Business được xây dựng phù hợp cho những công ty startup với nhiều mục đích đa dạng.',
        label: 'Hot'
    },
    {
        url: 'interior-landing',
        imageUrl: 'interior-design.png',
        title: 'Interior Design',
        description: 'Interior design được sử dụng cho những công ty làm về thiết kế.',
        label: 'New'
    },
    {
        url: 'designer-portfolio',
        imageUrl: 'designer-portfolio.png',
        title: 'Designer Portfolio',
        description: 'Designer Portfolio đây là một template chung cho những porfolio cá nhân sử dụng cho nhiều mục đích đa dạng.',
        label: 'Hot'
    },
    {
        url: 'creative-portfolio',
        imageUrl: 'creative-portfolio.png',
        title: 'Creative Portfolio',
        description: 'Creative Portfolio sử dụng cho những porfolio năng động, sáng tạo.',
        label: 'New'
    },
    {
        url: 'creative-landing',
        imageUrl: 'creative-landing.png',
        title: 'Creative Agency 02 — One Page',
        description: 'Mẫu template được sử dụng cho những doanh nghiệp liên quan tới công nghệ, kỹ thuật số. Đây là một mẫu được thiết kế theo dạng Landing page.',
        label: 'New'
    },
    {
        url: 'portfolio-landing',
        imageUrl: 'personal-portfolio-landing.png',
        title: 'Personal Portfolio — One Page',
        description: 'Đây là một template dành cho cá nhân, sử dụng để giới thiệu bản thân, nghề nghiệp và chuyên môn cụ thể.',
        label: 'New'
    },
    {
        url: 'interior-landing',
        imageUrl: 'interior-design.png',
        title: 'Interior Design',
        description: 'Interior design được sử dụng cho những công ty làm về thiết kế.',
        label: 'New'
    },
]


class Demo extends Component {
    render() {
        return (
            <Fragment>
                {/* Start Banner Area  */}
                <div className="prv-banner-wrapper"
                     style={{backgroundImage: `url("assets/images/preview/preview-bg.jpg")`}}>
                    <div className="container-fluid">
                        <div className="plr--120">
                            <div className="row">
                                <div className="col-lg-8 col-xl-5">
                                    <div className="inner">
                                        <div className="logo text-left">
                                            <a href="/">
                                                <img src="/assets/images/logo/logo-all-dark.png" alt="Trydo Images"/>
                                            </a>
                                        </div>
                                        <p className="title">Chào mừng bạn đến với WooWebsite, dưới đây là những mẫu website mà chúng tôi đã thực hiện. Các website được sử dụng theo công nghệ JAM Stack với React và Nodejs. Bạn hãy trải nghiệm và liên hệ ngay với chúng tôi!</p>
                                        <div className="purshase-btn">
                                            <a href="/#contact" className="rn-button-style--2 btn-solid">Liên hệ ngay</a>
                                            <a href="#demo" className="rn-button-style--2 btn-border rn-btn-dark border-opacity-half">Xem Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fullscreen empty-div gradient-overlay"></div>
                {/* End Banner Area  */}

                {/* Start Preview Main Wrapper */}
                <div className="main-wrapper" id="demo">

                    {/* Start Main Demo Area  */}
                    <div className="home-demo-area bg_color--1 ptb--120">
                        <div className="wrapper plr--120">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center pb--30">
                                        <h2 className="theme-gradient">Giao diện mẫu</h2>
                                        <p>Vui lòng chọn lựa những mẫu giao diện phù hợp với doanh nghiệp của bạn nhất.</p>
                                    </div>
                                </div>
                            </div>
                            <Tabs>
                                <div className="row text-center">
                                    <div className="col-lg-12">
                                        <div className="tablist-inner">
                                            <TabList className="pv-tab-button text-center">
                                                <Tab><span>Tất cả</span></Tab>
                                                <Tab><span>Agency</span></Tab>
                                                <Tab><span>Doanh nghiệp</span></Tab>
                                                <Tab><span>Portfolio</span></Tab>
                                                <Tab><span>Landing</span></Tab>
                                                <Tab><span>Mới nhất</span></Tab>
                                            </TabList>
                                        </div>
                                    </div>
                                </div>
                                
                                <TabPanel className="row">
                                    {singleDemo.map((value , index) => (
                                        // Start Single Demo 
                                        <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-demo">
                                                <a target="_blank" rel="noopener noreferrer" href={`/${value.url} `}>
                                                    <img src={`/assets/images/preview/${value.imageUrl}`} alt="Creative Agency Images"/>
                                                    <h3 className="title">{value.title}</h3>
                                                    <p className="info">{value.description}</p>
                                                    {value.label ? <div className="label-new"><span>{value.label}</span></div> : ''}
                                                </a>
                                            </div>
                                        </div>
                                        // End Single Demo
                                    ))}
                                </TabPanel>

                                <TabPanel className="row">
                                    {agencyDemo.map((value , index) => (
                                        // Start Single Demo 
                                        <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-demo">
                                                <a target="_blank" rel="noopener noreferrer" href={`/${value.url} `}>
                                                    <img src={`/assets/images/preview/${value.imageUrl}`} alt="Creative Agency Images"/>
                                                    <h3 className="title">{value.title}</h3>
                                                    <p className="info">{value.description}</p>
                                                    {value.label ? <div className="label-new"><span>{value.label}</span></div> : ''}
                                                </a>
                                            </div>
                                        </div>
                                        // End Single Demo
                                    ))}
                                </TabPanel>

                                <TabPanel className="row">
                                    {busenessDemo.map((value , index) => (
                                        // Start Single Demo 
                                        <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-demo">
                                                <a target="_blank" rel="noopener noreferrer" href={`/${value.url} `}>
                                                    <img src={`/assets/images/preview/${value.imageUrl}`} alt="Creative Agency Images"/>
                                                    <h3 className="title">{value.title}</h3>
                                                    <p className="info">{value.description}</p>
                                                    {value.label ? <div className="label-new"><span>{value.label}</span></div> : ''}
                                                </a>
                                            </div>
                                        </div>
                                        // End Single Demo
                                    ))}
                                </TabPanel>

                                <TabPanel className="row">
                                    {portfolioList.map((value , index) => (
                                        // Start Single Demo 
                                        <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-demo">
                                                <a target="_blank" rel="noopener noreferrer" href={`/${value.url} `}>
                                                    <img src={`/assets/images/preview/${value.imageUrl}`} alt="Creative Agency Images"/>
                                                    <h3 className="title">{value.title}</h3>
                                                    <p className="info">{value.description}</p>
                                                    {value.label ? <div className="label-new"><span>{value.label}</span></div> : ''}
                                                </a>
                                            </div>
                                        </div>
                                        // End Single Demo
                                    ))}
                                </TabPanel>

                                <TabPanel className="row">
                                    {landingPage.map((value , index) => (
                                        // Start Single Demo 
                                        <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-demo">
                                                <a target="_blank" rel="noopener noreferrer" href={`/${value.url} `}>
                                                    <img src={`/assets/images/preview/${value.imageUrl}`} alt="Creative Agency Images"/>
                                                    <h3 className="title">{value.title}</h3>
                                                    <p className="info">{value.description}</p>
                                                    {value.label ? <div className="label-new"><span>{value.label}</span></div> : ''}
                                                </a>
                                            </div>
                                        </div>
                                        // End Single Demo
                                    ))}
                                </TabPanel>

                                <TabPanel className="row">
                                    {newDemoList.map((value , index) => (
                                        // Start Single Demo 
                                        <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-demo">
                                                <a target="_blank" rel="noopener noreferrer" href={`/${value.url} `}>
                                                    <img src={`/assets/images/preview/${value.imageUrl}`} alt="Creative Agency Images"/>
                                                    <h3 className="title">{value.title}</h3>
                                                    <p className="info">{value.description}</p>
                                                    {value.label ? <div className="label-new"><span>{value.label}</span></div> : ''}
                                                </a>
                                            </div>
                                        </div>
                                        // End Single Demo
                                    ))}
                                </TabPanel>

                            </Tabs>

                        </div>
                    </div>
                    {/* End Main Demo Area  */}

                    {/* Start Feature Area  */}
                    <div className="prv-feature service-area bg_color--4 ptb--120">
                        <div className="wrapper plr--120">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center pb--30">
                                        <h2 className="text-white">Tính năng nổi bật</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* Start Single Feature  */}
                                {featureList.map((value, i) => (
                                    <div className="col-lg-8 col-xl-4 col-md-8 col-sm-8 col-12" key={i}>
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {value.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{value.title}</h3>
                                                <p className="subtitle">{value.subtitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* End Single Feature  */}
                            </div>
                        </div>
                    </div>
                    {/* End Feature Area  */}

                     {/* Start Faq Area */}
                    <div className="pv-feaq-area bg_color--3 ptb--120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    <div className="section-title text-left pb--30">
                                        <h2 className="theme-gradient">Câu hỏi thường gặp</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    <div className="faq-area">
                                        <Accordion className="accodion-style--1" preExpanded={'0'}>
                                            <AccordionItem >
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        Tại sao bạn nên chọn WooWebsite?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>WooWebsite hướng tới chất lượng và chuyên nghiệp. Các website đều được thiết kế hiện đại và sử dụng theo công nghệ JAMStack mới nhất bao gồm  React và Nodejs. </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        Thời gian để thiết kế một trang web là bao lâu?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>Việc thiết kế website đến lúc hoàn thiện thông thường mất khoảng 5 - 30 ngày tùy theo chức năng, số lượng ngôn ngữ, tính phức tạp của trang web hay những yêu cầu đặc biệt từ phía khách hàng. - Ở giai đoạn tư vấn, tùy thuộc WooWebsite sẽ tiến hành từ 01 đến 03 buổi thảo luận với khách hàng để có thể hiểu đầy đủ và chính xác những yêu cầu và mục tiêu làm webcủa bạn. - Trong giai đoạn phát triển, sau khi nhận được đầy đủ các thông tin cần thiết, chúng tôi sẽ cung cấp cho bạn bản thiết kế về website sau 01 tuần và sẽ hoàn thành toàn bộ website sau tối đa là 03 tuần sau khi khách hàng đã đồng ý với bản thiết kế.</p>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        Chi phí thiết kế một website? web application?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <div>
                                                        <p>
                                                        <strong> Thiết kế Website: </strong>
                                                        <ul>
                                                            <li>
                                                                Thiết kế theo yêu cầu giá giao động khoảng 7.8 triệu. 
                                                            </li>
                                                            <li>
                                                                Theo gói thiết kế cơ bản theo mẫu dựng sẵn giá giao động khoảng 5.6 triệu
                                                            </li>
                                                        </ul>
                                                        </p>
                                                        <p><strong>Web Application</strong>: Tuỳ thuộc và nghiệp vụ, quy mô ứng dụng. Vui lòng liên hệ bộ phân tư vấn thiết kế của WooWebsite để nhận thêm thông tin</p>
                                                    </div>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        Bạn nhận được gì sau khi thiết kế web tại WooWebsite
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>
                                                    Hệ thống web site chuyên nghiệp được thiết kế riêng đồng bộ với hệ thống nhận diện thương hiệu, đặc trưng ngành nghề của quý khách hàng. <br />
                                                    Hệ thống quản trị backend chuyên nghiệp được phát triển trong nhiều năm, đơn giản chuyên nghiệp, mạnh mẽ để quản trị và phát triển nội dung mà không cần biết đến IT. <br />
                                                    Bạn được nhận tài liệu hướng dẫn chi tiết quản trị, xây dựng content chuẩn SEO. Nhận được sự hỗ trợ trong suốt thời gian sử dụng website. <br />
                                                    Website được bảo hành vĩnh viễn tại WooWebsite.
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        Chúng tôi có mất phí tư vấn không?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>
                                                        Bạn sẽ được tư vấn từ khoá, tư vấn SEO website, tư vấn quảng cáo trên Google, Facebook, hoàn toàn miễn phí.
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>        
                    </div>
                     {/* Start Faq Area */}
                                    

                    {/* Start Footer Area  */}
                    <footer className="call-to-action-wrapper text-white-wrapper call-to-action ptb--120 with-particles">
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
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="inner text-center">
                                        <span>Bạn thấy WooWebsite hoàn toàn phù hợp với quy mô và doanh nghiệp của mình.</span>
                                        <h3 style={{color: '#ffffff'}}>Hãy liên hệ với chúng tôi ngay để được phục vụ</h3>
                                        <h2>
                                            <span style={{fontSize: '36px'}}> Hotline: </span>0934.378.644
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/* End Footer Area  */}
                </div>
                {/* End Preview Main Wrapper */}
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
export default Demo;