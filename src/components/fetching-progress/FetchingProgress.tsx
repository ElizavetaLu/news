import { IFetchingProgress } from '../../interfacesAndTypes';
import DataFetchingError from '../data-fetching-error/DataFetchingError';
import Loader from '../loader/Loader';
import './FetchingProgress.scss';

const FetchingProgress = ({ isFetching, isErrorOccured, totalPages, searchTerm }: IFetchingProgress) => {
    return (
        <>
            {
                isFetching
                && <div className="loader-container">
                    <Loader />
                </div>
            }
            {
                isErrorOccured
                && <div className="error-container">
                    <DataFetchingError />
                </div>
            }
            {
                (totalPages === 0 && !searchTerm) && <div className='not-found'>No data was found</div>
            }
        </>
    );
};

export default FetchingProgress;
