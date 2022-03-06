import { CheckIcon } from "@heroicons/react/solid";
import { ProgressCalendar } from "_client/progress-calendar";
import clsx from "clsx";
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
          <nav aria-label="Progress " className="max-w-[300px]">
            <ol className="overflow-hidden" role="list">
              {steps.map((step, stepIdx) => (
                <li
                  key={step.name}
                  className={clsx(stepIdx !== steps.length - 1 ? "pb-10" : "", "relative")}
                >
                  {step.status === "complete"
                    ? <>
                        {stepIdx !== steps.length - 1
                          ? <div
                              aria-hidden="true"
                              className="absolute top-4 left-4 mt-0.5 -ml-px w-0.5 h-full bg-indigo-600"
                            />
                          : null}
                        <button className="group flex relative items-start text-left">
                          <span className="flex items-center h-9">
                            <span className="flex relative z-10 justify-center items-center w-8 h-8 bg-indigo-600 group-hover:bg-indigo-800 rounded-full">
                              <CheckIcon aria-hidden="true" className="w-5 h-5 text-white" />
                            </span>
                          </span>
                          <span className="flex flex-col ml-4 min-w-0">
                            <span className="text-xs font-semibold tracking-wide uppercase">
                              {step.name}
                            </span>
                            <span className="text-[13px] text-gray-500">{step.description}</span>
                          </span>
                        </button>
                      </>
                    : step.status === "current"
                    ? <>
                        {stepIdx !== steps.length - 1
                          ? <div
                              aria-hidden="true"
                              className="absolute top-4 left-4 mt-0.5 -ml-px w-0.5 h-full bg-gray-300"
                            />
                          : null}
                        <button
                          aria-current="step"
                          className="group flex relative items-start text-left"
                        >
                          <span aria-hidden="true" className="flex items-center h-9">
                            <span className="flex relative z-10 justify-center items-center w-8 h-8 bg-white rounded-full border-2 border-indigo-600">
                              <span className="w-2.5 h-2.5 bg-indigo-600 rounded-full" />
                            </span>
                          </span>
                          <span className="flex flex-col ml-4 min-w-0">
                            <span className="text-xs font-semibold tracking-wide text-indigo-600 uppercase">
                              {step.name}
                            </span>
                            <span className="text-[13px] text-gray-500">{step.description}</span>
                          </span>
                        </button>
                      </>
                    : <>
                        {stepIdx !== steps.length - 1
                          ? <div
                              aria-hidden="true"
                              className="absolute top-4 left-4 mt-0.5 -ml-px w-0.5 h-full bg-gray-300"
                            />
                          : null}
                        <button className="group flex relative items-start text-left">
                          <span aria-hidden="true" className="flex items-center h-9">
                            <span className="flex relative z-10 justify-center items-center w-8 h-8 bg-white rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                              <span className="w-2.5 h-2.5 bg-transparent group-hover:bg-gray-300 rounded-full" />
                            </span>
                          </span>
                          <span className="flex flex-col ml-4 min-w-0">
                            <span className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                              {step.name}
                            </span>
                            <span className="text-[13px] text-gray-500">{step.description}</span>
                          </span>
                        </button>
                      </>}
                </li>
              ))}
            </ol>
          </nav>
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
