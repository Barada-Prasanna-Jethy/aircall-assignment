import React from "react";
import moment from "moment";
import CallOutbound from "../icons/CallOutbound.jsx";
import CallInbound from "../icons/CallInbound.jsx";

export default function CallDetails({ call }) {
  return (
    <div>
      <div className="callDate">{moment(call.created_at).format("LL")}</div>
      <div className="callDetailsCard">
        {call.direction === "outbound" ? <CallOutbound /> : <CallInbound />}
        <div className="fromTo">
          <div>{call.from}</div>
          <div className="receiver">tried to call on {call.to}</div>
        </div>
        <div className="callTime">{moment(call.created_at).format("LT")}</div>
      </div>
    </div>
  );
}
