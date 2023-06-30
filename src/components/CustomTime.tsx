"use client";

import { getTimeFromEndpoint } from "@/app/page";
import { useEffect, useState } from "react";

interface CustomTimeProps {
  path: string;
}

export default function CustomTime({
  path,
}: CustomTimeProps) {
  const [date, setDate] = useState("loading");
  useEffect(() => {
    const fetchTime = () =>
      getTimeFromEndpoint(path).then(({ date }) =>
        setDate(date || "")
      );
    fetchTime();
  }, [path]);
  return <div>{date || "Date error"}</div>;
}
