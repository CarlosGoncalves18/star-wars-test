import React, { useState, useEffect } from "react";
import Character from "../components/Character";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";

const BASE_URL = "http://localhost:8000/api";

export default function Characters() {
    const [searchQuery, setSearchQuery] = useState("");
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        setCurrentPage(1);
        setLoading(true);
        const response = await fetch(
            `${BASE_URL}/people/search/?search=${searchQuery}`
        );
        const data = await response.json();
        setCharacters(data.results);
        setTotalPages(1);
        setLoading(false);
    };

    const handlePageChange = async (page) => {
        setLoading(true);
        setCurrentPage(page);
        const response = await fetch(`${BASE_URL}/people/?page=${page}`);
        const data = await response.json();
        setCharacters(data.results);
        setTotalPages(Math.ceil(data.count / 10));
        setLoading(false);
    };

    useEffect(() => {
        const fetchCharacters = async () => {
            setLoading(true);
            const response = await fetch(`${BASE_URL}/people/`);
            const data = await response.json();
            setCharacters(data.results);
            setTotalPages(Math.ceil(data.count / 10));
            setLoading(false);
        };
        fetchCharacters();
    }, []);

    return (
        <main>
            <div className="top-container">
                <h1>Character Page</h1>
                <form className="form" onSubmit={handleSearchSubmit}>
                    <input
                        className="input-search"
                        type="text"
                        placeholder="Search character by name"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                    />
                    <button className="btn" type="submit">
                        Search
                    </button>
                </form>
            </div>
            {loading ? (
                <Loader />
            ) : (
                <div className="cards-container">
                    {characters.map((character, index) => (
                        <Character key={index} {...character} />
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
