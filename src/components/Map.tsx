'use client';
import React, { useEffect, useRef } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { createRoot } from 'react-dom/client';
// import { MarkerData, MapProps } from './types';

// types.ts
import { ReactNode } from 'react';

export type MarkerContent = HTMLElement | ReactNode;
export type MarkerPosition = google.maps.LatLngLiteral;

export interface MarkerData {
  position: MarkerPosition;
  title?: string;
  content?: MarkerContent;
}

export interface MapProps {
  center?: MarkerPosition;
  zoom?: number;
  markers?: MarkerData[];
  className?: string;
}

// Define constant loader options outside the component
const LIBRARIES: ("marker" | "maps" | "places" | "geometry" | "drawing" | "visualization")[] = ['marker', 'maps'];

const Map: React.FC<MapProps> = ({ center, zoom, markers = [], className }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    libraries: LIBRARIES
  });

  const mapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.marker.AdvancedMarkerElement[]>([]);
  const contentRootsRef = useRef<ReturnType<typeof createRoot>[]>([]);
  const contentElementsRef = useRef<HTMLElement[]>([]);

  const createContentNode = (content: MarkerContent): Node | null => {
    if (!content) return null;

    // If already an HTMLElement, return it directly
    if (content instanceof HTMLElement) return content;

    // For React nodes, render to a DOM element
    const container = document.createElement('div');
    const root = createRoot(container);
    root.render(<>{content}</>);

    // Store references for cleanup
    contentRootsRef.current.push(root);
    contentElementsRef.current.push(container);

    return container;
  };

  const onLoad = (map: google.maps.Map) => {
    mapRef.current = map;

    markersRef.current = markers.map((markerData) => {
      const contentNode = createContentNode(markerData.content);

      return new google.maps.marker.AdvancedMarkerElement({
        map,
        position: markerData.position,
        title: markerData.title,
        content: contentNode || undefined
      });
    });
  };

  const cleanupMarkers = () => {
    // Remove all markers from the map
    markersRef.current.forEach(marker => {
      marker.map = null;
    });
    markersRef.current = [];

    // Cleanup React roots
    contentRootsRef.current.forEach(root => root.unmount());
    contentRootsRef.current = [];

    // Remove DOM elements
    contentElementsRef.current = [];

    mapRef.current = null;
  };

  useEffect(() => {
    return () => cleanupMarkers();
  }, []);

  if (!isLoaded) return <div className={className}>Loading map...</div>;

  return (
    <div className={className}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '150px' }}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={cleanupMarkers}
      />
    </div>
  );
};

export default Map;