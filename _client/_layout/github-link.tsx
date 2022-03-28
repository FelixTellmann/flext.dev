import { fetchOnce, useQuery } from "_client/hooks/_useTRPC";
import { TelemetryLink } from "_client/telemetryLink";
import { FC, useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import ReactTooltip from "react-tooltip";

export const GithubLink: FC<{ href: string; githubStars?: number }> = ({ href, githubStars }) => {
  return (
    <TelemetryLink
      className="icon-button"
      href={href}
      name="GitHubLink"
      referrerPolicy="no-referrer"
      target="_blank"
      tooltip={`
        <div style="text:white; display:flex; gap: 0.5rem; align-items: center">
          <svg xmlns="http://www.w3.org/2000/svg"
               width="14"
               height="14"
               viewBox="0 0 14 14"
               fill="none">
            <g clip-path="url(#clip0)">
              <path d="M7.33093 0.544736L9.11174 4.75961L13.6708 5.15127C13.9871 5.17858 14.1157 5.57312 13.8757 5.78081L10.4175 8.77686L11.4538 13.2339C11.5257 13.5437 11.1901 13.7873 10.9184 13.6227L7.00035 11.2598L3.08227 13.6227C2.80991 13.7866 2.47502 13.5429 2.54688 13.2339L3.58317 8.77686L0.124315 5.78009C-0.115714 5.5724 0.0122059 5.17786 0.32913 5.15056L4.88824 4.75889L6.66905 0.544736C6.79266 0.251527 7.20732 0.251527 7.33093 0.544736Z"
                    fill="white" />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs> 
          </svg>
          <span>${githubStars} stars</span>
        </div>
      `}
    >
      <BsGithub />
    </TelemetryLink>
  );
};
