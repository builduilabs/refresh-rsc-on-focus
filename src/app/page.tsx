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
              style={{
                animationDuration: "750ms",
                animationTimingFunction: "ease-in-out",
                // animationTimingFunction: "cubic-bezier(0,0.55,0.45,1)",
              }}
              // style={{ animationDelay: `${50 * i}ms` }}
            >
              <dt className="truncate text-xs font-medium text-gray-500">
                {stat.label}
              </dt>
              <dd
                className="mt-1 text-xl font-semibold tracking-tight animate-[fade-in_1s]"
                // className="mt-1 text-xl font-semibold tracking-tight"
                style={{
                  // background:
                  //   "linear-gradient(to right, rgba(100, 200, 200, 1), rgba(100, 200, 200, 1))",
                  // background: "linear-gradient(to right, black, black)",
                  // backgroundImage:
                  //   "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1))",
                  backgroundImage: `
                    linear-gradient(to right, white, white),
                    linear-gradient(to right, black, black)
                  `,
                  // backgroundImage: `
                  //   linear-gradient(to right, rgba(100, 200, 200, 1), rgba(100, 200, 200, 1)),
                  //   linear-gradient(to right, rgba(255, 0, 0, 1), rgba(255, 0, 180, 1), rgba(0, 100, 200, 1))
                  // `,
                  backgroundSize: "100% 0.1em, 0% 0.1em",
                  backgroundPosition: "100% 100%, 0 100%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-12 sm:items-center mt-12 animate-[fade-in_1s] ">
        <div>
          <div className="text-gray-500 text-sm">Date</div>
          <div className="text-3xl font-bold tracking-tighter">
            {formatInTimeZone(date, tz, "MMMM do, yyyy")}
          </div>
        </div>
        <div>
          <div className="text-gray-500 text-sm">Time</div>
          <div className="text-3xl font-bold tracking-tighter tabular-nums">
            {formatInTimeZone(date, tz, "h:mm:ss a")}
          </div>
        </div>
        <div>
          <div className="text-gray-500 text-sm">Timezone</div>
          <div className="text-3xl font-bold tracking-tighter">{tz}</div>
        </div>
      </div> */}
      <RefreshOnFocus />
    </div>
  );
}

export const runtime = "edge";
