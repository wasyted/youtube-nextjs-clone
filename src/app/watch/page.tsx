import { Suspense } from 'react'
import WatchPage from "../components/ui/watch/WatchPage";

export default function Page() {
  return (
    <main className="w-full">
      <Suspense>
        <WatchPage />
      </Suspense>
    </main>
  );
}