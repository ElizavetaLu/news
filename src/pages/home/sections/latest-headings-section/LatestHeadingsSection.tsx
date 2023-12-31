import { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICardData } from "../../../../interfacesAndTypes";
import DataFetchingError from "../../../../components/data-fetching-error/DataFetchingError";
import SectionTitle from "../../../../components/section-title/SectionTitle";
import { briefSectionNews } from "../../../../store/actions/actionCreators";
import NewsCard from "../../../../components/cards/news/NewsCard";
import Loader from "../../../../components/loader/Loader";
import "./LatestHeadingsSection.scss";



const LatestHeadingsSection = () => {

    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        dispatch(briefSectionNews({ size: 9 }))
    }, [])

    const { data, isFetching, isErrorOccurred, currentCategory } = useSelector((state: any) => state.briefSections);


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
                (isErrorOccurred && !currentCategory) ? <DataFetchingError /> : null
            }

            <div className="latest-cards">
                <div className="latest-cards__first-row">

                    {
                        isFetching && !currentCategory
                            ? loader('large')
                            : <NewsCard large cardData={data.latest && data.latest[0]} />
                    }

                    <div className="latest-cards__row-block">
                        {
                            data.latest?.slice(1, 4).map((item: ICardData, i: number) => {

                                return isFetching && !currentCategory
                                    ? loader('horizontal')
                                    : <NewsCard key={i} horizontal cardData={item} />;
                            })
                        }
                    </div>
                </div>

                <div className="latest-cards__second-row">
                    {
                        data.latest?.slice(4).map((item: ICardData, i: number) => {
                            return isFetching && !currentCategory
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