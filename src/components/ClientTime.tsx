"use client";

export default function ClientTime() {
  return <div>{new Date().toUTCString().toString() || "Date error"}</div>;
}
