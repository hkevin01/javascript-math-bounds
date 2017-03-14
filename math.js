/******************************************************************************************************/
/**
 * converts degrees to radius
 * @param degrees
 * @returns {Number}
 */
function deg2rad(degrees) {
   return Math.PI * (degrees / 180);
}
/******************************************************************************************************/ 
/**
 * Calculates the total distance between objects
 * @param latLng
 * @param tempLatLng
 * @returns {Number}
 */
function distances(aLon, aLat, bLon, bLat) {
	
   var dlat = aLat - bLat,
       dlon = aLon - bLon,
       a = Math.pow(Math.sin(deg2rad(dlat / 2)), 2) + Math.cos(deg2rad(aLat)) * Math.cos(deg2rad(bLat)) * Math.pow(Math.sin(deg2rad(dlon / 2)), 2);
  
   var totalDistance = RADIUS_OF_EARTH * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
   
   return  Math.round((totalDistance/1000)*100)/100;  
}
/******************************************************************************************************/
/**
 * 
 * @param event
 */
function setBounds(event){
	
	    bbox = event.features[0].geometry.getBounds();
	//  var  tbbox = event.features[0].geometry.getVertices();
	  //  bbox.transform(map.getProjectionObject(), new OpenLayers.Projection("EPSG:4326"));
	//    var answer = "bottom: " + tbbox.bottom  + "\n";
	//    answer += "left: " + tbbox.left  + "\n";
	//    answer += "right: " + tbbox.right  + "\n";
	//    answer += "top: " + tbbox.top  + "\n";
	 //   alert(answer);
	   // boxes = "&boxes=" + bounds.top + "_" + bounds.left + "_" + bounds.bottom + "_" + bounds.right;
}

/******************************************************************************************************/
function getBounds(){
	
	return bbox;
}
/******************************************************************************************************/
function is_in_bb(north, east, south, west, lonlat){
	//top-north,  right-east, bottom-south, left-west
	//	lonlat.transform(map.getProjectionObject(), new OpenLayers.Projection("EPSG:4326"));
	//alert(lonlat.lat);
	if( north >= lonlat.lat && lonlat.lat >= south && east >= lonlat.lon && lonlat.lon >= west ){
		return true;  // Point is in bounding box  
	}
	else{
		return false;
	}
	// bb is the boundingbox, (ix,iy) (north,east) are its top-left coordinates, 
	// and (ax,ay) (south,west) its bottom-right coordinates. p is the point and (x,y) its coordinates.
}
/******************************************************************************************************/
