import React, { useEffect, useState } from "react";

import { TABS } from "../constants";

import CallDetails from "./CallDetails.jsx";

export default function CallList({
  currentTab,
  archivedCalls,
  unarchivedCalls,
}) {
  return (
    <div className="callList">
      {currentTab === TABS.ARCHIVED_CALLS
        ? archivedCalls.map((call) => <CallDetails call={call} />)
        : unarchivedCalls.map((call) => <CallDetails call={call} />)}
    </div>
  );
}
