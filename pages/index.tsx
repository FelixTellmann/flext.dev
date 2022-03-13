import { API } from "_client/hooks/trcpAPI";
import { ProgressButton } from "_client/progress-steps/progress-button";
import { ProgressCalendar } from "_client/progress-calendar";
import { ProgressSteps } from "_client/progress-steps/progress-steps";
import useProgressSteps from "_client/progress-steps/useProgressSteps";
import { PROCESS_STEPS } from "content/steps";
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
  const [steps, selectProcessStep] = useProgressSteps(PROCESS_STEPS);
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().split("T")[0]);
  const hello = API.useQuery(["hello", { text: "client" }]);

  console.log(hello?.data?.greeting);

  const handleSelectDay = useCallback((date) => setCurrentDate(date), []);

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
      <div className="flex gap-10 pb-36 mt-12">
        <div className="flex flex-1 justify-center items-center left">
          <ProgressSteps>
            {steps.map((step, index) => (
              <ProgressButton
                key={step.title}
                completed={step.completed}
                description={step.description}
                last={steps.length - 1 === index}
                selected={step.selected}
                title={step.title}
                onClick={() => selectProcessStep(index, true)}
              />
            ))}
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
