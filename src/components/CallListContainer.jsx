import React, { useState, useEffect } from "react";
import { TABS } from "../constants";
import CallList from "./CallList.jsx";
import Archive from "../icons/Archive.jsx";
import { getAllCalls, updateCallStatus } from "../api";

export default function CallListContainer() {
  const [currentTab, setCurrentTab] = useState(TABS.ACTIVITY_FEED);
  const [calls, setCalls] = useState([]);
  const [archivedCalls, setArchivedCalls] = useState([]);
  const [unarchivedCalls, setUnarchivedCalls] = useState([]);

  useEffect(() => {
    getAllCallDetails();
  }, [currentTab]);

  const getAllCallDetails = () => {
    getAllCalls().then((res) => {
      setCalls(res);
      setArchivedCalls(res.filter((call) => call.is_archived));
      setUnarchivedCalls(res.filter((call) => !call.is_archived));
    });
  };

  const onArchiveClick = () => {
    if (currentTab === TABS.ACTIVITY_FEED) {
      unarchivedCalls.map((call) =>
        updateCallStatus(call.id, { is_archived: true })
      );
    } else {
      archivedCalls.map((call) =>
        updateCallStatus(call.id, { is_archived: false })
      );
    }
    getAllCallDetails();
  };
  return (
    <div className="listBody">
      <div className="tabContainer">
        <div
          className={currentTab === TABS.ACTIVITY_FEED ? "activeTab" : ""}
          onClick={() => setCurrentTab(TABS.ACTIVITY_FEED)}
        >
          Activity Feed
        </div>
        <div
          className={currentTab === TABS.ARCHIVED_CALLS ? "activeTab" : ""}
          onClick={() => setCurrentTab(TABS.ARCHIVED_CALLS)}
        >
          Archived Calls
        </div>
      </div>
      <div className="callListContainer">
        <button className="archiveButton" onClick={onArchiveClick}>
          <Archive />
          {currentTab === TABS.ACTIVITY_FEED
            ? "Archive all calls"
            : "Unarchive all calls"}
        </button>
        <CallList
          currentTab={currentTab}
          calls={calls}
          archivedCalls={archivedCalls}
          unarchivedCalls={unarchivedCalls}
        />
      </div>
    </div>
  );
}
