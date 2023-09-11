import { Dispatch, useEffect, useState } from "react";
import { news } from "../store/actions/actionCreators";
import { useDispatch } from "react-redux";

export default function useSearch() {
    const [serchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);

    const dispatch: Dispatch<any> = useDispatch();

    const onSubmit = () => {
        // dispatch(news(true, {

        // }))
    }
}
