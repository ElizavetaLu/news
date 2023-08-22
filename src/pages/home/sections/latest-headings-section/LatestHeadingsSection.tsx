import { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { latestHeadlines } from "../../../../store/actions/actionCreators";
import SectionTitle from "../../../../components/section-title/SectionTitle";
import NewsCard from "../../../../components/cards/news/NewsCard";
import { ICardData } from "../../../../interfacesAndTypes";
import Loader from "../../../../components/loader/Loader";
import "./LatestHeadingsSection.scss";
import DataFetchingError from "../../../../components/data-fetching-error/DataFetchingError";



const LatestHeadingsSection = () => {

    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        // dispatch(latestHeadlines({ lang: 'en', pageSize: 9, page: 1 }));
    }, [])

    const { data, isFetching, isErrorOccurred } = useSelector((state: any) => state.latestHeadlines);


    return (
        <div className="latest-headings">
            <SectionTitle title="Latest News" />
            {
            <DataFetchingError />
                // isErrorOccurred && <DataFetchingError />
            }
            {
                isFetching
                    ? <Loader />

                    : <div className="cards">
                        {
                            data?.map((item: ICardData, i: number) => {
                                switch (i) {
                                    case 0:
                                        return <NewsCard key={item._id} large cardData={item} />;

                                    case 1 || 2 || 3:
                                        return <NewsCard key={item._id} horizontal cardData={item} />;

                                    default:
                                        return <NewsCard key={item._id} vertical cardData={item} />;
                                }
                            })
                        }
                    </div>
            }
        </div>
    );
};

export default LatestHeadingsSection;