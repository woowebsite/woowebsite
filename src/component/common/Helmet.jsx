import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Thiết kế website công nghệ mới </title>
                    <meta name="description" content="WooWebsite – Thiết kế website theo công nghệ mới, chuyên nghiệp, giá rẻ, chuẩn SEO và tương thích Mobile. Website đã được tối ưu về UI/UX giúp người dùng trải nghiệm tốt nhất. Các giao diện đa dạng, phù hợp với nhiều ngành nghề." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
