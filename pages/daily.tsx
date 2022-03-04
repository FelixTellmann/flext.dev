import { AnnotatedLayout } from "_client/form/annotatedLayout";
import { HabitCheckbox } from "_client/form/habit-checkbox";
import { HabitTimePicker } from "_client/form/habit-time-picker";
import { useApi } from "_client/hooks/useApi";
import { HrBreak } from "_client/hrBreak";
import { Page } from "_client/page";
import { HABITS } from "content/habits";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

export const Daily = () => {
  const router = useRouter();
  const { api } = useApi();
  const { data: session, status } = useSession();

  const [loading, setLoading] = useState();
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [habits, setHabits] = useState(HABITS);

  const handleSave = useCallback(async () => {
    await api("saveDaily", { habits, date });
  }, [api, date, habits]);

  const updateHabits = useCallback((groupTitle, habitTitle, value) => {
    setHabits((data) => {
      data
        .find(({ title }) => title === groupTitle)
        .steps.find(({ title }) => title === habitTitle).value = value;
      return [...data];
    });
  }, []);

  useEffect(() => {
    if (!session && status !== "loading" && router.isReady) {
      router.push("/auth/sign-in");
    }
  }, [router, session, status]);

  return (
    <>
      <Page
        subtitle="Tracking Habits daily to analyze different correlations and measure success."
        title={`${date} - Habit Tracking`}
      >
        {habits.map((group) => (
          <>
            <AnnotatedLayout key={group.title} title={group.title}>
              {group.steps.map((habit) => {
                switch (habit.type) {
                  case "TIME": {
                    return (
                      <HabitTimePicker
                        key={habit.title}
                        setValue={(value) => updateHabits(group.title, habit.title, value)}
                        title={habit.title}
                        value={habit.value}
                      />
                    );
                  }
                  case "BOOLEAN": {
                    return (
                      <HabitCheckbox
                        key={habit.title}
                        setValue={(value) => updateHabits(group.title, habit.title, value)}
                        title={habit.title}
                        value={habit.value}
                      />
                    );
                  }
                }
                return "";
              })}
            </AnnotatedLayout>
            <HrBreak />
          </>
        ))}
        {/* <AnnotatedLayout title="Track your Habits today!">
          <CheckboxGroup
            items={[
              {
                title: "Teeth Care",
                subtitle: "Brushing & Flossing in the morning & evening.",
                value: habits.teeth,
                setValue: (val) => setHabits((data) => ({ ...data, teeth: val })),
              },
            ]}
            subtitle="Daily habits that relate to a healthier lifestyle."
            title="Health Habits"
          />
        </AnnotatedLayout>*/}

        {/*       <HrBreak />

        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Personal Information
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="py-5 px-4 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          className="block text-sm font-medium text-gray-700"
                          htmlFor="first-name"
                        >
                          First name
                        </label>
                        <input
                          autoComplete="given-name"
                          className="block mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm sm:text-sm"
                          id="first-name"
                          name="first-name"
                          type="text"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          className="block text-sm font-medium text-gray-700"
                          htmlFor="last-name"
                        >
                          Last name
                        </label>
                        <input
                          autoComplete="family-name"
                          className="block mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm sm:text-sm"
                          id="last-name"
                          name="last-name"
                          type="text"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          className="block text-sm font-medium text-gray-700"
                          htmlFor="email-address"
                        >
                          Email address
                        </label>
                        <input
                          autoComplete="email"
                          className="block mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm sm:text-sm"
                          id="email-address"
                          name="email-address"
                          type="text"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          className="block text-sm font-medium text-gray-700"
                          htmlFor="country"
                        >
                          Country
                        </label>
                        <select
                          autoComplete="country-name"
                          className="block py-2 px-3 mt-1 w-full bg-white rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm focus:outline-none sm:text-sm"
                          id="country"
                          name="country"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>

                      <div className="col-span-6">
                        <label
                          className="block text-sm font-medium text-gray-700"
                          htmlFor="street-address"
                        >
                          Street address
                        </label>
                        <input
                          autoComplete="street-address"
                          className="block mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm sm:text-sm"
                          id="street-address"
                          name="street-address"
                          type="text"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="city">
                          City
                        </label>
                        <input
                          autoComplete="address-level2"
                          className="block mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm sm:text-sm"
                          id="city"
                          name="city"
                          type="text"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="region">
                          State / Province
                        </label>
                        <input
                          autoComplete="address-level1"
                          className="block mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm sm:text-sm"
                          id="region"
                          name="region"
                          type="text"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          className="block text-sm font-medium text-gray-700"
                          htmlFor="postal-code"
                        >
                          ZIP / Postal code
                        </label>
                        <input
                          autoComplete="postal-code"
                          className="block mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm sm:text-sm"
                          id="postal-code"
                          name="postal-code"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="py-3 px-4 text-right bg-gray-50 sm:px-6">
                    <button
                      className="inline-flex justify-center py-2 px-4 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm focus:outline-none"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <HrBreak />

        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Decide which communications you'd like to receive and how.
                </p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="py-5 px-4 space-y-6 bg-white sm:p-6">
                    <fieldset>
                      <legend className="text-base font-medium text-gray-900">By Email</legend>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                              id="comments"
                              name="comments"
                              type="checkbox"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label className="font-medium text-gray-700" htmlFor="comments">
                              Comments
                            </label>
                            <p className="text-gray-500">
                              Get notified when someones posts a comment on a posting.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                              id="candidates"
                              name="candidates"
                              type="checkbox"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label className="font-medium text-gray-700" htmlFor="candidates">
                              Candidates
                            </label>
                            <p className="text-gray-500">
                              Get notified when a candidate applies for a job.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                              id="offers"
                              name="offers"
                              type="checkbox"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label className="font-medium text-gray-700" htmlFor="offers">
                              Offers
                            </label>
                            <p className="text-gray-500">
                              Get notified when a candidate accepts or rejects an offer.
                            </p>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset>
                      <div>
                        <legend className="text-base font-medium text-gray-900">
                          Push Notifications
                        </legend>
                        <p className="text-sm text-gray-500">
                          These are delivered via SMS to your mobile phone.
                        </p>
                      </div>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                            id="push-everything"
                            name="push-notifications"
                            type="radio"
                          />
                          <label
                            className="block ml-3 text-sm font-medium text-gray-700"
                            htmlFor="push-everything"
                          >
                            Everything
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                            id="push-email"
                            name="push-notifications"
                            type="radio"
                          />
                          <label
                            className="block ml-3 text-sm font-medium text-gray-700"
                            htmlFor="push-email"
                          >
                            Same as email
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                            id="push-nothing"
                            name="push-notifications"
                            type="radio"
                          />
                          <label
                            className="block ml-3 text-sm font-medium text-gray-700"
                            htmlFor="push-nothing"
                          >
                            No push notifications
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="py-3 px-4 text-right bg-gray-50 sm:px-6">
                    <button
                      className="inline-flex justify-center py-2 px-4 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm focus:outline-none"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>*/}
        <div className="flex justify-end mt-6">
          <button
            className="py-2 px-4 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm focus:outline-none"
            type="button"
          >
            Reset
          </button>
          <button
            className="inline-flex justify-center py-2 px-4 ml-3 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm focus:outline-none"
            type="button"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </Page>
    </>
  );
};

export default Daily;
