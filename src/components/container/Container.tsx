import { Children } from "../../interfacesAndTypes";
import "./Container.scss";

const Container = ({ children }: Children) => {
    return (
        <div className="container">{children}</div>
    );
};

export default Container;