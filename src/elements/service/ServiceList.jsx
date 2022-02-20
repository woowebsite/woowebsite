import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiLayers />,
        title: 'Thiết kế Website',
        description: 'Website đã được tối ưu về UI/UX giúp người dùng trải nghiệm tốt nhất. Các giao diện đa dạng, phù hợp với nhiều ngành nghề.'
    },
    {
        icon: <FiCast />,
        title: 'Ứng dụng web',
        description: 'Ứng dụng web (Web application) là chương trình máy tính vận hành trên trình duyệt web thông qua mạng Internet'
    },
    {
        icon: <FiUsers />,
        title: 'SEO & Marketing Online',
        description: 'Dịch vụ SEO trên google và marketing trên các nền tảng mạng xã hội như Facebook, Tiktok...'
    },
    { 
        icon: <FiMonitor />,
        title: 'Mobile App Development',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiUsers />,
        title: 'Marketing & Reporting',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    { 
        icon: <FiMonitor />,
        title: 'Mobile App Development',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="/service-details">
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
