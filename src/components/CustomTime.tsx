"use client";

import { getTimeFromEndpoint } from "@/utils/getTimeFromEndpoint";
import { useEffect, useState } from "react";

interface CustomTimeProps {
  path: string;
  noCache?: boolean;
}

export default function CustomTime({ path, noCache = false }: CustomTimeProps) {
  const [date, setDate] = useState("loading");
  useEffect(() => {
    const fetchTime = () =>
      getTimeFromEndpoint(path, noCache).then(({ date }) =>
        setDate(date || "")
      );
    fetchTime();
  }, []);
  return <div>{date || "Date error"}</div>;
}
