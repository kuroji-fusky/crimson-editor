import { BlockRenderer, PlotBlock } from "@ce-internal/ui"

export default function App() {
  return (
    <BlockRenderer>
      <div>navbar</div>
      <div className="px-8 mx-auto max-w-screen-xl">
        <div className="flex flex-col gap-y-4">
          {/* for loop here */}
          <PlotBlock type="dialogue" />
          {/* for loop here */}
        </div>
      </div>
    </BlockRenderer>
  )
}
