import { ResponsiveBar } from "@nivo/bar";
import { sets } from "@nivo/generators";
import { ResponsiveLine } from "@nivo/line";
import { random, range } from "lodash";
import { useEffect, useState } from "react";

export const Charts = ({ barData }) => {
  const [isClient, setIsClient] = useState(false);
  // const data = [
  //   { x: 0, y: 8 },
  //   { x: 1, y: 5 },
  //   { x: 2, y: 4 },
  //   { x: 3, y: 9 },
  //   { x: 4, y: 1 },
  //   { x: 5, y: 7 },
  //   { x: 6, y: 6 },
  //   { x: 7, y: 3 },
  //   { x: 8, y: 2 },
  //   { x: 9, y: 0 },
  // ];

  const data2 = [
    { x: -5, y: 8 },
    { x: -4, y: 3 },
    { x: -3, y: 4 },
    { x: -2, y: 9 },
    { x: -1, y: 1 },
    { x: 0, y: 7 },
    { x: 1, y: 6 },
    { x: 2, y: 5 },
    { x: 3, y: 2 },
    { x: 4, y: 0 },
  ];

  useEffect(() => {
    if (window) {
      setIsClient(true);
    }
  }, []);

  const keys = ["hot dogs", "burgers", "sandwich", "kebab", "fries", "donut"];

  const commonProps = {
    margin: { top: 60, right: 110, bottom: 60, left: 80 },
    indexBy: "country",
    keys,
    padding: 0.2,
    labelTextColor: "inherit:darker(1.4)",
    labelSkipWidth: 16,
    labelSkipHeight: 16,
  };

  return (
    <>
      {/*<div className="absolute inset-0 h-full w-full">
        {isClient
          ? <ResponsiveLine
              data={[
                {
                  id: "weight",
                  data,
                },
              ]}
              margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
              xScale={{ type: "point" }}
              yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: true,
                reverse: false,
              }}
              curve="monotoneX"
              yFormat=" >-.2f"
              axisTop={null}
              axisRight={null}
              animate={false}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "transportation",
                legendOffset: 36,
                legendPosition: "middle",
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "count",
                legendOffset: -40,
                legendPosition: "middle",
              }}
              pointSize={10}
              pointColor={{ theme: "background" }}
              pointBorderWidth={2}
              pointBorderColor={{ from: "serieColor" }}
              pointLabelYOffset={-12}
              useMesh={true}
              legends={[
                {
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: "left-to-right",
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: "circle",
                  symbolBorderColor: "rgba(0, 0, 0, .5)",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemBackground: "rgba(0, 0, 0, .03)",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
            />
          : null}
      </div>*/}
      <div className="absolute inset-0 h-full w-full">
        {isClient
          ? <ResponsiveBar
              {...{
                ...commonProps,
                data: barData,
                keys: [
                  "exerciseDuration",
                  "exerciseIntensity",
                  "foodHealthiness",
                  "foodQuantity",
                  "alcohol",
                ],
                indexBy: "date",
                minValue: 0,
                maxValue: 10,
                enableGridX: true,
                enableGridY: false,
                valueFormat: (value: number) => `${Math.abs(value)}`,
                labelTextColor: "inherit:darker(1.2)",
                axisBottom: {
                  legendPosition: "middle" as const,
                  legendOffset: 50,
                  tickSize: 0,
                  tickPadding: 12,
                },
              }}
              // keys={keys}
              margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
              enableGridY={false}
              enableGridX={true}
              // data={data.map((dot) => ({
              //   "hot dogs": dot.x,
              //   burgers: dot.y,
              //   sandwich: dot.x,
              //   kebab: dot.y,
              //   fries: dot.x,
              //   donut: 12,
              // }))}
            />
          : null}
      </div>
    </>
  );
};
