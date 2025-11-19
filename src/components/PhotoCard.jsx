import { Link } from "react-router-dom";

export default function PhotoCard({ photo }) {
    return (
        <Link to={`/photos/${photo.id}`} className="block">
            <img
                src={photo.download_url}
                alt={photo.author}
                className="rounded-lg shadow hover:scale-105 transition"
            />
            <p className="mt-2 text-sm text-gray-500">{photo.author}</p>
        </Link>
    );
}
