import React from 'react';

import TopComponent from "./TopComponent"
import LogListComponent from "./LogListComponent"

export default function DiaryLogScreen(): React.JSX.Element {
    return <>
        <TopComponent />
        <LogListComponent />
    </>
}