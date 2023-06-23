import { headers } from "next/headers";
import { formatInTimeZone } from "date-fns-tz";
import { RefreshOnFocus } from "./refresh-on-focus";

export default function Home() {
  const headersList = headers();

  let tz = headersList.get("x-vercel-ip-timezone") ?? "UTC";
  let date = new Date();

  return (
    <div className="max-w-prose mx-auto w-full min-h-full flex flex-col justify-center">
      <h1 className="font-bold text-4xl tracking-tight">
        Refresh RSC On Focus
      </h1>
      <div className="mt-3 text-lg">
        This page shows the datetime when this server component was rendered.
        Try refocusing this browser window to trigger a server side rerender.
      </div>

      <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-12 sm:items-center mt-12">
        <div>
          <div className="text-gray-500 text-sm">Date</div>
          <div className="text-3xl font-bold tracking-tighter">
            {formatInTimeZone(date, tz, "MMMM do, yyyy")}
          </div>
        </div>
        <div>
          <div className="text-gray-500 text-sm">Time</div>
          <div className="text-3xl font-bold tracking-tighter">
            {formatInTimeZone(date, tz, "h:mm:ss a")}
          </div>
        </div>
        <div>
          <div className="text-gray-500 text-sm">Timezone</div>
          <div className="text-3xl font-bold tracking-tighter">{tz}</div>
        </div>
      </div>
      <RefreshOnFocus />
    </div>
  );
}

export const runtime = "edge";
