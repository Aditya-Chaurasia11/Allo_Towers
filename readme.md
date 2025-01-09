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
- Leaflet (react-leaflet)
- Tailwind CSS
- Lucide React (for icons)
- Vite (build tool)

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd usa-location-mapper
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

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

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
usa-location-mapper/
├── src/
│   ├── components/
│   │   └── Map.tsx         # Main map component
│   ├── App.tsx            # Root application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── public/
├── index.html
└── package.json
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenStreetMap for providing the map tiles
- React-Leaflet for the mapping functionality
- Tailwind CSS for the styling system