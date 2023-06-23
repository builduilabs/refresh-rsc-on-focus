import { headers } from "next/headers";
import { formatInTimeZone } from "date-fns-tz";
import { RefreshOnFocus } from "./refresh-on-focus";

const stats = [
  { name: "Total Subscribers", stat: "71,897" },
  { name: "Avg. Open Rate", stat: "58.16%" },
  { name: "Avg. Click Rate", stat: "24.57%" },
];
export default function Home() {
  const headersList = headers();

  let tz = headersList.get("x-vercel-ip-timezone") ?? "UTC";
  let date = new Date();

  let stats = [
    { label: "Date", value: formatInTimeZone(date, tz, "MMMM do, yyyy") },
    { label: "Time", value: formatInTimeZone(date, tz, "h:mm:ss a") },
    { label: "Time Zone", value: tz },
  ];

  return (
    <div
      className="max-w-prose mx-auto w-full min-h-full flex flex-col justify-center"
      key={date.toString()}
    >
      <h1 className="font-bold text-4xl tracking-tight">
        Refresh RSC On Focus
      </h1>
      <div className="mt-4 text-xl text-gray-600">
        This page shows the datetime when this Server Component was rendered.
        Try refocusing this browser window to trigger a server-side rerender.
      </div>

      <div className="mt-8">
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow border-l-4 border-transparent"
            >
              <dt className="truncate text-xs font-medium text-gray-500">
                {stat.label}
              </dt>
              <dd className="relative mt-1 text-xl font-semibold tracking-tight overflow-hidden animate-[text_1000ms_ease-in-out]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <RefreshOnFocus />
    </div>
  );
}

export const runtime = "edge";
