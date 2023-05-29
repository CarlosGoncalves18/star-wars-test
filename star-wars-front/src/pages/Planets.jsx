import { useState, useEffect } from "react";
import Planet from "../components/Planet";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";

const BASE_URL = "http://localhost:8000/api";

export default function Planets() {
    const [planets, setPlanets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    const handlePageChange = async (page) => {
        setLoading(true);
        setCurrentPage(page);
        const response = await fetch(`${BASE_URL}/planets/?page=${page}`);
        const data = await response.json();
        setPlanets(data.results);
        setTotalPages(Math.ceil(data.count / 10));
        setLoading(false);
    };

    useEffect(() => {
        const fetchPlanets = async () => {
            setLoading(true);
            const response = await fetch(`${BASE_URL}/planets/`);
            const data = await response.json();
            setPlanets(data.results);
            setTotalPages(Math.ceil(data.count / 10));
            setLoading(false);
        };
        fetchPlanets();
    }, []);

    return (
        <main>
            <h1>Planets Page</h1>
            {loading ? (
                <Loader />
            ) : (
                <div className="cards-container">
                    {planets.map((planet, index) => (
                        <Planet key={index} {...planet} />
                    ))}
                </div>
            )}
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onClick={handlePageChange}
            />
        </main>
    );
}
