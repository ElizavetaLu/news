import "./DataFetchingError.scss";

const DataFetchingError = () => {
    return (
        <div className="fetching-error">
            <img className="fetching-error__icon" src="/images/icons/earth.png" alt="earth" />
            <p className="fetching-error__text">Something went wrong, try again?</p>
            <button className="fetching-error__button">pip</button>
        </div>
    );
};

export default DataFetchingError;