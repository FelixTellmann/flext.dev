import { ProgressButton } from "_client/progress-button";
import { ProgressCalendar } from "_client/progress-calendar";
import { ProgressSteps } from "_client/progress-steps";
import { FC, useCallback, useState } from "react";

type indexProps = {};

const Page: FC<{ subtitle: string; title: string }> = ({ title, subtitle, children }) => (
  <div className="min-h-[calc(100vh-66px)] bg-bg dark:bg-dark-bg">
    <div className="px-4 mx-auto max-w-[1024px]">
      <>
        <div className="pt-12 pb-5">
          <div className="sm:flex sm:justify-between sm:items-end">
            <div className="sm:flex-1 sm:w-0">
              <h1
                className="text-lg font-medium text-gray-900 dark:text-dark-headings"
                id="message-heading"
              >
                {title}
              </h1>
              <p className="overflow-hidden mt-1 text-sm text-gray-500 dark:text-dark-text overflow-ellipsis">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </>
      {children}
    </div>
  </div>
);

const Index: FC<indexProps> = ({}) => {
  const title = "Full-Stack Developer";
  const subtitle = "Tracking Habits daily to analyze different correlations and measure success.";
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().split("T")[0]);

  const handleSelectDay = useCallback((date) => setCurrentDate(date), []);
  const steps = [
    {
      name: "Rise & Shine",
      description: "Getting ready in the morning for a fresh start in the day.",
      status: "complete",
    },
    {
      name: "Exercise",
      description: "Do something today that your future self will thank you for.",
      status: "current",
    },
    {
      name: "Food & Drinks",
      description: "Nothing tastes as good as Slim feels.",
      status: "upcoming",
    },
    {
      name: "Household",
      description: "Why can’t the house clean itself? It seems to get dirty by itself.",
      status: "upcoming",
    },
    {
      name: "Wind Down",
      description: "Your future depends on your dreams, so go to sleep",
      status: "upcoming",
    },
  ];
  return (
    <Page
      subtitle={subtitle}
      title={new Date(currentDate).toLocaleDateString(undefined, {
        weekday: "long",
        day: "2-digit",
        month: "short",
        year: "numeric",
      })}
    >
      <ProgressCalendar handleSelectDay={handleSelectDay} />
      <div className="flex gap-10 mt-12 mb-36">
        <div className="flex flex-1 justify-center items-center left">
          <ProgressSteps>
            <ProgressButton
              step={steps[0]}
              onClick={() => {
                console.log(steps[0]);
              }}
            />
            <ProgressButton
              step={steps[1]}
              onClick={() => {
                console.log(steps[1]);
              }}
            />
            <ProgressButton
              step={steps[2]}
              onClick={() => {
                console.log(steps[2]);
              }}
            />
            <ProgressButton
              step={steps[3]}
              onClick={() => {
                console.log(steps[3]);
              }}
            />
            <ProgressButton
              step={steps[4]}
              onClick={() => {
                console.log(steps[4]);
              }}
            />
          </ProgressSteps>
        </div>
        <div className="flex-1 right ">
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="py-5 px-4 space-y-6 min-h-[500px] max-h-[600px] bg-white sm:p-6">
              asdasdasd
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Index;
