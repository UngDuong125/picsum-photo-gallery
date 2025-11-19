import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PhotoDetail() {
    const { id } = useParams();
    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        fetch(`https://picsum.photos/id/${id}/info`)
            .then((res) => res.json())
            .then(setPhoto);
    }, [id]);

    if (!photo) return <p className="p-6">Loading...</p>;

    return (
        <div className="p-6">
            <Link to="/" className="text-blue-500 underline">← Back</Link>
            <img src={photo.download_url} className="w-full mt-6 rounded-lg" />

            <h1 className="text-2xl font-bold mt-4">Photo by {photo.author}</h1>
            <p className="text-gray-600 mt-2">
                No description available (API doesn’t provide one).
            </p>
        </div>
    );
}
