import { Dispatch, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { briefSectionNews } from "../../../../store/actions/actionCreators";
import { ICardData } from "../../../../interfacesAndTypes"; 
import SectionTitle from "../../../../components/section-title/SectionTitle";
import NewsCard from "../../../../components/cards/news/NewsCard"; 
import FetchingProgress from "../../../../components/fetching-progress/FetchingProgress";
import "./NewsSection.scss";



const NewsSection = ({ title }: { title: string }) => {

    const dispatch: Dispatch<any> = useDispatch();

    const { data, isFetching, isErrorOccurred, totalPages } = useSelector((state: any) => state.briefSections);

    const sectionsRef = useRef<HTMLElement[]>([]);

    const [sectionData, setSectionData] = useState(data[title])

    const dataRef = useRef<ICardData[] | null>(null);
    dataRef.current = sectionData;


    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach((entry) => {
                if (entry.isIntersecting && !dataRef.current) {
                    dispatch(briefSectionNews({ category: title }))
                    setSectionData(data)
                }
            });
        });

        sectionsRef.current.forEach((section) => {
            observer.observe(section);
        });

    }, []);

    const refCallback = useCallback((element: HTMLElement) => {
        if (element) {
            sectionsRef.current.push(element);
        }
    }, []);


    return (
        <section className="news-section" ref={refCallback}>
            <SectionTitle title={title} />

            <div className="news-section__cards">
                <div className="news-section__large-card">
                    <NewsCard large cardData={data[title] && data[title][0]} />
                </div>

                <div className="news-section__cards-column">
                    {
                        data[title]?.map((item: ICardData, i: number) => {
                            if (i === 0 || i > 3) return null;
                            return <NewsCard key={i} horizontal cardData={item} />;
                        })
                    }
                </div>
            </div>

            <div className="news-section__cards-mobile">
                {
                    data[title]?.map((item: ICardData, i: number) => {
                        return <NewsCard key={i} vertical cardData={item} />;
                    })
                }
            </div>
 
                <FetchingProgress
                    isFetching={isFetching}
                    isErrorOccured={isErrorOccurred}
                    totalPages={totalPages}
                /> 

        </section>
    );
};

export default NewsSection;