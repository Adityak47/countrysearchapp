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
                        placeholder="Search..."
                        onChange={(event) => {
                            setSearchTerm(event.target.value);
                        }}
                    />
                </div>

                <div className="template_Container">
                    {data
                        .filter((val) => {
                            if (searchTerm === "") {
                                return val;
                            } else if (
                                val.currency
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase())
                            ) {
                                return val;
                            }
                        })
                        .map((val) => {
                            return (
                                <div className="template" key={val.name}>
                                    <img src={val.flag} alt={val.name} />
                                    <hr />
                                    <h3>{val.name}</h3>
                                    <p>
                                        Capital : {val.capital} <br />
                                        <br />
                                        Currency : {val.currency} (
                                        {val.currency_sign})
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
