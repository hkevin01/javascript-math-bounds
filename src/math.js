/******************************************************************************************************/
/**
 * Converts degrees to radians
 * @param {number} degrees - Angle in degrees
 * @returns {number} Angle in radians
 */
export function deg2rad(degrees) {
  return Math.PI * (degrees / 180);
}

/******************************************************************************************************/
/**
 * Calculates the total distance between two geographic coordinates using the Haversine formula
 * @param {number} aLon - Longitude of point A
 * @param {number} aLat - Latitude of point A
 * @param {number} bLon - Longitude of point B
 * @param {number} bLat - Latitude of point B
 * @returns {number} Distance in kilometers
 */
export function distances(aLon, aLat, bLon, bLat) {
  const RADIUS_OF_EARTH = 6371000; // meters
  const dlat = aLat - bLat;
  const dlon = aLon - bLon;
  const a = Math.pow(Math.sin(deg2rad(dlat / 2)), 2) +
    Math.cos(deg2rad(aLat)) * Math.cos(deg2rad(bLat)) *
    Math.pow(Math.sin(deg2rad(dlon / 2)), 2);
  const totalDistance = RADIUS_OF_EARTH * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round((totalDistance / 1000) * 100) / 100;
}

/******************************************************************************************************/
/**
 * Sets bounding box from a geo event
 * @param {Object} event - Geo event object
 */
export function setBounds(event) {
  // Implementation depends on event structure and mapping library
  // Example: bbox = event.features[0].geometry.getBounds();
  // TODO: Integrate with mapping library (e.g., OpenLayers, Leaflet)
}

/******************************************************************************************************/
/**
 * Gets the current bounding box
 * @returns {Object} Bounding box
 */
export function getBounds() {
  // TODO: Return the current bounding box
  return bbox;
}

/******************************************************************************************************/
/**
 * Checks if a point is inside a bounding box
 * @param {number} north - Northern boundary
 * @param {number} east - Eastern boundary
 * @param {number} south - Southern boundary
 * @param {number} west - Western boundary
 * @param {Object} lonlat - Object with lat and lon properties
 * @returns {boolean} True if inside bounding box, else false
 */
export function isInBoundingBox(north, east, south, west, lonlat) {
  // top-north, right-east, bottom-south, left-west
  if (
    north >= lonlat.lat &&
    lonlat.lat >= south &&
    east >= lonlat.lon &&
    lonlat.lon >= west
  ) {
    return true; // Point is in bounding box
  }
  return false;
}
