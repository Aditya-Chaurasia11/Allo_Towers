# USA Location Mapper

An interactive React application for mapping and visualizing locations across the United States. Built with React, Leaflet, and Tailwind CSS.

## Features

- Interactive map centered on the United States
- Add new locations using latitude and longitude coordinates
- Optional city and state information for each location
- Popup information windows for each marker
- Responsive design that works on all devices
- Default locations for major US cities

## Technology Stack

- React.js
- TypeScript
- Tailwind CSS
- Lucide React (for icons)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Aditya-Chaurasia11/Allo_Towers.git
cd Allo_Towers
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Usage

### Adding Locations

1. Find the latitude and longitude coordinates for your desired location
2. Enter the coordinates in the input form above the map
3. (Optional) Add city and state information
4. Click "Add Location" to place the marker on the map

### Viewing Location Information

- Click on any marker to view its details in a popup
- The popup displays:
  - City name (if provided)
  - State (if provided)
  - Exact coordinates

### Default Locations

The application comes with three default locations:
- New York, NY
- Los Angeles, CA
- Chicago, IL


## Project Structure

```
usa-location-mapper/
├── src/
│   ├── components/
│   │   └── Map.tsx         
│   ├── App.tsx           
│   ├── main.tsx          
│   └── index.css         
├── public/
├── index.html
└── package.json
```


This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenStreetMap for providing the map tiles
- React-Leaflet for the mapping functionality
- Tailwind CSS for the styling system
