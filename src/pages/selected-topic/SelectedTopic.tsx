import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import { ICardData } from "../../interfacesAndTypes";
import FetchingProgress from "../../components/fetching-progress/FetchingProgress";
import SearchInput from "../../components/search-input/SearchInput";
import Container from "../../components/container/Container";
import NewsCard from "../../components/cards/news/NewsCard";
import "./SelectedTopic.scss";



const SelectedTopic = () => {

    const { title } = useParams();
    const [value, setValue] = useState('');

    const { isFetching, isErrorOccured, totalPages } = useInfiniteScroll(title, value);

    const { searchTerm, data } = useSelector((state: any) => state.news);


    return (
        <Container>
            <main className="selected-topic">

                <div className="selected-topic__data">

                    <div className="selected-topic__search">
                        <SearchInput
                            value={value}
                            setValue={setValue}
                            placeholder="Search by title"
                        />
                    </div>

                    <div className="selected-topic__data-list">
                        {
                            data?.map((item: ICardData, i: number) => {
                                return <NewsCard key={i} vertical cardData={item} />
                            })
                        }

                        <FetchingProgress
                            isFetching={isFetching}
                            isErrorOccured={isErrorOccured}
                            totalPages={totalPages}
                            searchTerm={searchTerm}
                        />

                        {
                            (totalPages === 0 && searchTerm) && <div className='not-found'>No data was found with such search term in current category</div>
                        }

                    </div>
                </div>
            </main>
        </Container>
    );
};

export default SelectedTopic; 