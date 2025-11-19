import { useEffect, useState, useRef } from "react";
import PhotoCard from "../components/PhotoCard";
import Loader from "../components/Loader";

export default function PhotoList() {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const loaderRef = useRef();

    useEffect(() => {
        fetchMorePhotos();
    }, [page]);

    const fetchMorePhotos = async () => {
        setLoading(true);
        const res = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=12`);
        const data = await res.json();

        if (data.length === 0) setHasMore(false);

        setPhotos((prev) => [...prev, ...data]);
        setLoading(false);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setPage((p) => p + 1);
                }
            },
            { threshold: 1 }
        );

        if (loaderRef.current) observer.observe(loaderRef.current);
    }, [hasMore]);

    return (
        <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {photos.map((photo) => (
                <PhotoCard key={photo.id} photo={photo} />
            ))}

            {loading && <Loader />}
            <div ref={loaderRef}></div>
        </div>
    );
}
