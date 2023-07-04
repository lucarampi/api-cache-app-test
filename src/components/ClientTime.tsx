"use client";

import { useState } from "react";

export default function ClientTime() {
  const [date, setDate] = useState(new Date());
  return <div>{date.toUTCString() || "Date error"}</div>;
}
