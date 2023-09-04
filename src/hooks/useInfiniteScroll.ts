import { Dispatch, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { news } from "../store/actions/actionCreators";
import { ICardData } from "../interfacesAndTypes";




export default function useInfiniteScroll() {

    const { title } = useParams();

    const dispatch: Dispatch<any> = useDispatch();

    const { isFetching, isErrorOccured, totalPages, data } = useSelector((state: any) => state.news);

    const [page, setPage] = useState<number>(1);


    // prevent making request twice in dev mode
    const isMount = useRef(false);

    useEffect(() => {

        if (isMount.current === false) {

            // dispatch(news(page === 1, {
            //     category: title,
            //     pageSize: page === 1 ? 16 : 15,
            //     page: page,
            //     searchTerm: ''
            // }));

            return () => { isMount.current = true }
        }

    }, [page])



    const handleScroll = (e: any): void => {

        const { scrollHeight, scrollTop, clientHeight } = e.target.documentElement;

        if (Math.ceil(scrollHeight - scrollTop) === clientHeight) {

            if (isFetching || isErrorOccured || (totalPages === 0) || (totalPages === page)) {
                return
            } else {
                setPage(prev => prev + 1);
            }
        }
    }


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return [data, isFetching, isErrorOccured, totalPages] as [ICardData[], boolean, boolean, number];
};