import { headers } from "next/headers";
import { formatInTimeZone } from "date-fns-tz";
import { RefreshOnFocus } from "./refresh-on-focus";

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
    <div className="max-w-4xl mx-auto w-full min-h-full flex flex-col justify-center px-4 md:px-8 pb-4 md:pb-20">
      <div className="mt-4 md:text-lg text-gray-300 space-y-2 text-sm sm:text-base">
        <p>Shows the date and time when this Server Component was rendered.</p>
        <p>Refocus this browser window to trigger a server-side rerender.</p>
      </div>

      <div className="mt-2 md:mt-8">
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="overflow-hidden rounded-lg bg-gray-900/70 border border-white border-opacity-[15%] p-3 md:px-4 md:py-5 shadow animate-[text_1000ms] text-sky-500"
            >
              <dt className="truncate text-sm font-medium text-white/50">
                {stat.label}
              </dt>
              <dd className="relative md:mt-2 text-lg md:text-xl tabular-nums font-semibold md:tracking-tight origin-center truncate">
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
