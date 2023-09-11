import { Dispatch, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { news } from '../store/actions/actionCreators';



export default function useInfiniteScroll(titleTest = '', value: string) {

    const { title } = useParams();
    const dispatch: Dispatch<any> = useDispatch();

    const { isFetching, isErrorOccured, nextPageNumber, totalPages } = useSelector((state: any) => state.news);
    const [page, setPage] = useState<number>(1);


    useEffect(() => {

        if (totalPages !== null && page > totalPages) return;

        dispatch(news(page === 1, {
            category: title,
            page: nextPageNumber,
            searchTerm: value
        }))
    }, [page, title])


    const handleScroll = (e: any) => {
        if (isFetching) return;

        const { scrollHeight, scrollTop, clientHeight } = e.target.documentElement;

        if (Math.ceil(scrollHeight - scrollTop) === clientHeight) {

            setPage(prev => prev + 1)
        }
    }


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return { isFetching, isErrorOccured, totalPages }
}
