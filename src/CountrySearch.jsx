import React from "react";
import { useState } from "react";
import data from "./countryData.json";
import "./countrySearch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const CountrySearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <>
            <div className="templateContainer">
                <div className="search-bar">
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search By currency INR,EUR"
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                        }}
                    />
                </div>

                <div className="country">
                    {data
                        .filter((value) => {
                            if (searchTerm === "") {
                                return value;
                            } else if (
                                value.currency
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase())
                            ) {
                                return value;
                            }
                        })
                        .map((value) => {
                            return (
                                <div className="details" key={value.name}>
                                    <img src={value.flag} alt={value.name} />
                                    <hr />
                                    <h3>{value.name}</h3>
                                    <p>
                                        Capital : {value.capital} <br />
                                        <br />
                                        Currency : {value.currency} (
                                        {value.currency_sign})
                                    </p>
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
};
export default CountrySearch;
