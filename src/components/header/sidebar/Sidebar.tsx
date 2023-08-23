import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showSidebar } from "../../../store/actions/actionCreators";
import { navigation } from "../../../data";
import "./Sidebar.scss";


const Sidebar = () => {

    const dispatch = useDispatch();
    const { isActive } = useSelector((state: any) => state.sidebar)

    return (
        <>
            <div className={`sidebar-overlay ${isActive && 'sidebar-overlay--active'}`} onClick={() => dispatch(showSidebar())}></div>
            <div className={`sidebar ${isActive && 'sidebar--active'}`}>
                <div className="sidebar__header">
                    <img className="sidebar__semi-circle" src="/images/icons/semi-circle.png" alt="" />

                    <button className="sidebar__close" onClick={() => dispatch(showSidebar())}>
                        <img className="sidebar__close-icon" src="/images/icons/cross.png" alt="" />
                    </button>
                </div>

                <div className="sidebar__navigation">
                    {
                        navigation.map(item => {
                            return (
                                <Link
                                    key={item.id}
                                    to={item.path}
                                    className="sidebar__navigation-link"
                                    onClick={() => dispatch(showSidebar())}
                                >
                                    {item.name}
                                </Link>
                            )
                        })
                    }
                </div>


                <div></div>
            </div></>
    );
};

export default Sidebar;