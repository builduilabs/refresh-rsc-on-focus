import { format } from "date-fns";
import { RefreshOnFocus } from "./refresh-on-focus";

export default function Home() {
  let date = new Date();

  return (
    <div className="mt-6">
      <h1 className="font-medium text-gray-900 text-lg tracking-tight">
        Refresh RSC on focus
      </h1>
      <div className="text-gray-900 max-w-prose mt-3">
        This page shows the datetime when this server component was rendered.
        Try refocusing the window to trigger a server side rerender.
      </div>

      <div className="flex space-x-12 items-center mt-8">
        <div>
          <div className="text-gray-500 text-sm">Date</div>
          <div className="text-3xl font-bold tracking-tighter text-gray-900">
            {format(date, "MMMM do, yyyy")}
          </div>
        </div>

        <div>
          <div className="text-gray-500 text-sm">Time</div>
          <div className="text-3xl font-bold tracking-tighter text-gray-900">
            {format(date, "h:mm:ss a")}
          </div>
        </div>

        <div>
          <div className="text-gray-500 text-sm">Timezone</div>
          <div className="text-3xl font-bold tracking-tighter text-gray-900">
            {format(date, "zzzz")}
          </div>
        </div>
      </div>
      <RefreshOnFocus />
    </div>
  );
}

export const runtime = "edge";
