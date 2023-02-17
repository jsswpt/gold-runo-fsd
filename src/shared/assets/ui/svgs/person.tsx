import { Icon } from "@/shared/api/internal";

export const Person = (props: Icon) => {
  return (
    <svg
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.16291 0.551974C2.82049 2.37925 1.63959 7.38839 4.81046 10.5333L5.91359 11.6273L4.466 12.4619C2.66161 13.5019 1.13325 15.3877 0.484061 17.3742C-0.257922 19.6456 -0.189831 20 0.988062 20C1.69199 20 1.98939 19.8529 1.98939 19.5043C1.98939 16.2423 6.14923 12.7188 10 12.7188C13.8508 12.7188 18.0106 16.2423 18.0106 19.5043C18.0106 19.8529 18.308 20 19.0119 20C20.1898 20 20.2579 19.6456 19.5159 17.3742C18.8667 15.3877 17.3384 13.5019 15.534 12.4619L14.0864 11.6273L15.1895 10.5333C17.55 8.19236 17.572 4.6088 15.2416 2.19631C13.2009 0.0835517 9.88118 -0.592081 7.16291 0.551974ZM12.3451 2.40776C13.8261 3.09462 15.0066 4.84241 15.0066 6.34779C15.0066 8.66654 12.539 10.8985 9.9753 10.8985C7.52005 10.8985 4.99337 8.59039 4.99337 6.34779C4.99337 4.88883 6.1746 3.09887 7.5838 2.42263C9.19427 1.64992 10.7006 1.64536 12.3451 2.40776Z"
        fill="currentColor"
      />
    </svg>
  );
};
