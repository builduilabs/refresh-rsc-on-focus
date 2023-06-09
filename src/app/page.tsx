import { headers } from "next/headers";
import { formatInTimeZone } from "date-fns-tz";
import { RefreshOnFocus } from "./refresh-on-focus";

export default function Home() {
  const headersList = headers();

  let tz = headersList.get("x-vercel-ip-timezone") ?? "UTC";
  let date = new Date();

  return (
    <div className="m-3 sm:m-6">
      <h1 className="font-medium text-gray-900 text-lg tracking-tight">
        Refresh RSC on focus
      </h1>
      <div className="text-gray-900 max-w-prose mt-3">
        This page shows the datetime when this server component was rendered.
        Try refocusing this browser window to trigger a server side rerender.
      </div>

      <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-12 sm:items-center mt-6 sm:mt-8">
        <div>
          <div className="text-gray-500 text-sm">Date</div>
          <div className="text-3xl font-bold tracking-tighter text-gray-900">
            {formatInTimeZone(date, tz, "MMMM do, yyyy")}
          </div>
        </div>

        <div>
          <div className="text-gray-500 text-sm">Time</div>
          <div className="text-3xl font-bold tracking-tighter text-gray-900">
            {formatInTimeZone(date, tz, "h:mm:ss a")}
          </div>
        </div>

        <div>
          <div className="text-gray-500 text-sm">Timezone</div>
          <div className="text-3xl font-bold tracking-tighter text-gray-900">
            {formatInTimeZone(date, tz, "zzz")}
          </div>
        </div>
      </div>
      <RefreshOnFocus />
    </div>
  );
}

export const runtime = "edge";
