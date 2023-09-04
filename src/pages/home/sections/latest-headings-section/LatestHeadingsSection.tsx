import { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { latestHeadlines } from "../../../../store/actions/actionCreators";
import { ICardData } from "../../../../interfacesAndTypes";
import DataFetchingError from "../../../../components/data-fetching-error/DataFetchingError";
import SectionTitle from "../../../../components/section-title/SectionTitle";
import NewsCard from "../../../../components/cards/news/NewsCard";
import Loader from "../../../../components/loader/Loader";
import "./LatestHeadingsSection.scss";



const LatestHeadingsSection = () => {

    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        // dispatch(latestHeadlines({ lang: 'en', pageSize: 9, page: 1 }));
    }, [])

    const { data, isFetching, isErrorOccurred } = useSelector((state: any) => state.latestHeadlines);


    const loader = (containerSize: string) => {
        return (
            <div className={`loading loading--${containerSize}`}>
                <Loader />
            </div>
        )
    }


    return (
        <div className="latest-headings">
            <SectionTitle title="Latest News" />

            {
                isErrorOccurred && <DataFetchingError />
            }

            <div className="latest-cards">
                <div className="latest-cards__first-row">

                    {
                        isFetching
                            ? loader('large')
                            : <NewsCard large cardData={data && data[0]} />
                    }

                    <div className="latest-cards__row-block">
                        {
                            data?.slice(1, 4).map((item: ICardData, i: number) => {

                                return isFetching
                                    ? loader('horizontal')
                                    : <NewsCard key={i} horizontal cardData={item} />;
                            })
                        }
                    </div>
                </div>

                <div className="latest-cards__second-row">
                    {
                        data?.slice(4).map((item: ICardData, i: number) => {
                            return isFetching
                                ? loader('vertical')
                                : <NewsCard key={i} vertical cardData={item} />;
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default LatestHeadingsSection;