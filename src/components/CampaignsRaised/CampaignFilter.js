import React from 'react';
import { useState } from 'react';
function CampaignFilter({ onFilterChange }) {
    const [campaignCategory, setCampaignCategory] = useState("");
    const [amountRange, setAmountRange] = useState(""); // Min and Max range
    const [sortField, setSortField] = useState("targetAmount");
    const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'

    // Handle changes
    const handleCategoryChange = (e) => {
        setCampaignCategory(e.target.value);
        sendFiltersToParent();
    };

    const handleAmountRangeChange = (e) => {
        setAmountRange(e.target.value);
        sendFiltersToParent();
    };

    const handleSortFieldChange = (e) => {
        setSortField(e.target.value);
        sendFiltersToParent();
    };

    const handleSortOrderChange = (e) => {
        setSortOrder(e.target.value);
        sendFiltersToParent();
    };

    const sendFiltersToParent = () => {
        onFilterChange({
            campaignCategory,
            amountRange,
            sortField,
            sortOrder
        });
    };

    return (
        <div>

            <div className="w-80 h-screen overflow-y-auto p-8 bg-gray-200">
                <h2 className="text-2xl font-semibold mb-4 text-custom-green-dark">Filter Options</h2>

                {/* Category Filter */}
                <div className="mb-4">
                    <label className="block text-xl m-4 text-custom-green-dark">Category</label>
                    <select
                        value={campaignCategory}
                        onChange={handleCategoryChange}
                        className="ml-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-custom-green-light sm:max-w-xs sm:text-sm/6"
                    >
                        <option value="">All Categories</option>
                        <option value="health">Medical Emergency</option>
                        <option value="education">Education</option>
                        <option value="community">Community</option>
                    </select>
                </div>

                {/* Amount Range Filter */}
                <div className="mb-4">
                    <label className="block text-xl m-4 text-custom-green-dark">Amount Range (₹)</label>
                    <div className="flex flex-col gap-2 ml-4">
                        <label>
                            <input
                                type="radio"
                                name="amountRange"
                                value="0-100000"
                                checked={amountRange === "0-100000"}
                                onChange={handleAmountRangeChange}
                                className="border-gray-300 text-custom-green-light focus:ring-custom-green-light"
                            />
                            <span className="ml-2">0 - 100,000</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="amountRange"
                                value="100000-200000"
                                checked={amountRange === "100000-200000"}
                                onChange={handleAmountRangeChange}
                                className="border-gray-300 text-custom-green-light focus:ring-custom-green-light"
                            />
                            <span className="ml-2">100,000 - 200,000</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="amountRange"
                                value="200000-500000"
                                checked={amountRange === "200000-500000"}
                                onChange={handleAmountRangeChange}
                                className="border-gray-300 text-custom-green-light focus:ring-custom-green-light"
                            />
                            <span className="ml-2">200,000 - 500,000</span>
                        </label>
                        {/* Add more ranges as needed */}
                    </div>
                </div>

                {/* Sorting Options */}
                <div className="mb-4">
                    <label className="block text-xl m-4 text-custom-green-dark">Sort By</label>
                    <div className="flex flex-col gap-2 ml-4">
                        <label>
                            <input
                                type="radio"
                                value="deadline"
                                checked={sortField === "deadline"}
                                onChange={handleSortFieldChange}
                                className="border-gray-300 text-custom-green-light focus:ring-custom-green-light"
                            />
                            <span className="ml-2">Deadline</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="targetAmount"
                                checked={sortField === "targetAmount"}
                                onChange={handleSortFieldChange}
                                className="border-gray-300 text-custom-green-light focus:ring-custom-green-light"
                            />
                            <span className="ml-2">Target Amount</span>
                        </label>
                    </div>

                    {/* Sort Order */}
                    <div className="mb-4 ml-4 mt-4">
                        <div className="flex flex-col gap-2">
                            <label className="block text-xl  text-custom-green-dark">Sort Order</label>
                            <label>
                                <input
                                    type="radio"
                                    value="asc"
                                    checked={sortOrder === "asc"}
                                    onChange={handleSortOrderChange}
                                    className="border-gray-300 text-custom-green-light focus:ring-custom-green-light"
                                />
                                <span className="ml-2">Low to High</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="desc"
                                    checked={sortOrder === "desc"}
                                    onChange={handleSortOrderChange}
                                    className="border-gray-300 text-custom-green-light focus:ring-custom-green-light"
                                />
                                <span className="ml-2">High to Low</span>
                            </label>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CampaignFilter;