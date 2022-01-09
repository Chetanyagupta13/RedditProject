import React from "react";

export const navigationRef = React.createRef();
export const navigationIsReadyRef = React.createRef();

export function navigate(name, params) {
    if (navigationIsReadyRef.current && navigationRef.current) {
        navigationRef.current.navigate(name, params);
    } else {
        console.warn("Navigation unavailable.");
    }
};