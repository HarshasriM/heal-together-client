import React, { useState, useEffect } from "react";
import CampaignFilter from "./CampaignFilter";
import axios from "axios"; // To send data to the backend
import CampaignCard from "./CampaignCard";
import { Drawer, IconButton } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';


const CampaignLayout = () => {
    const [filters, setFilters] = useState({});
    const [campaigns, setCampaigns] = useState([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Drawer state
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsDrawerOpen(open);
    };

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
        fetchFilteredCampaigns(newFilters); // Fetch campaigns based on filters
    };

    const fetchFilteredCampaigns = async (filters) => {
        // try {
        //     const response = await axios.get("/campaigns", {
        //         params: filters, // Send filters as query parameters
        //     });
        //     setCampaigns(response.data); // Update campaigns state with response data
        // } catch (error) {
        //     console.error("Error fetching campaigns:", error);
        // }
        fetch('/campaigns.json') // Note: This will look for the file in the 'public' folder
            .then(response => response.json())
            .then(data => setCampaigns(data))
            .catch(error => console.error('Error fetching team data:', error));
    };

    useEffect(() => {
        fetchFilteredCampaigns(filters); // Initial fetch
    }, [filters]);

    return (
        <div className="flex relative">
            {/* Toggle button for mobile */}
            <IconButton onClick={toggleDrawer(true)} sx={{display:{md:"none"},position:"absolute",top:"3px",right:"20px"}}>
                <FilterAltIcon  sx={{color:"#198a76",fontSize:"35px"}}/>
                Filters
            </IconButton>
            <div className="hidden lg:block w-80 h-full overflow-y-auto overflow-x-hidden  bg-gray-200">
                <CampaignFilter onFilterChange={handleFilterChange} />
            </div>
            {/* Mobile View */}
            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
                sx={{
                    display: { xs: 'block', lg: 'none' },
                    '& .MuiDrawer-paper': { width: 'auto' },
                }}
            >
                 <div className="p-0 bg-gray-200 h-full overflow-y-auto overflow-x-hidden">
                     <CampaignFilter onFilterChange={handleFilterChange} />
                 </div>
            </Drawer>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 p-10 mt-5 md:mt-0 h-lvh overflow-y-auto">
                {/* Campaigns List */}
                {campaigns.map((campaign) => (
                    <CampaignCard campaign={campaign} key={campaign.id}/>
                ))}
            </div>
        </div>
    );
};

export default CampaignLayout;
