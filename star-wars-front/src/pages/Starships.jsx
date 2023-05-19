import React, { useState, useEffect } from "react";
import Starship from "../components/Starship";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";

const BASE_URL = "http://localhost:8000/api";

export default function Starships() {
    const [starships, setStarships] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    const handlePageChange = async (page) => {
        setLoading(true);
        setCurrentPage(page);
        const response = await fetch(`${BASE_URL}/starships/?page=${page}`);
        const data = await response.json();
        setStarships(data.results);
        setTotalPages(Math.ceil(data.count / 10));
        setLoading(false);
    };

    useEffect(() => {
        const fetchStarships = async () => {
            setLoading(true);
            const response = await fetch(`${BASE_URL}/starships/`);
            const data = await response.json();
            setStarships(data.results);
            setTotalPages(Math.ceil(data.count / 10));
            setLoading(false);
        };
        fetchStarships();
    }, []);

    console.log(starships);

    return (
        <main>
            <h1>Starships Page</h1>
            {loading ? (
                <Loader />
            ) : (
                <div className="cards-container">
                    {starships.map((starship, index) => (
                        <Starship key={index} {...starship} />
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
