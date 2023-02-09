import { Icon } from "@/shared/api/internal";

export const Favorite = (props: Icon) => {
  return (
    <svg
      {...props}
      width="25"
      height="20"
      viewBox="0 0 25 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.00174 0.545838C3.29393 0.849776 2.26144 1.58566 1.70746 2.1814C-1.32482 5.44373 -0.302282 9.68916 4.64693 14.3838C7.09247 16.7037 11.7106 20 12.515 20C13.3195 20 17.9376 16.7037 20.3832 14.3838C23.1627 11.7473 24.6952 9.33032 24.9521 7.17818C25.6564 1.27596 18.428 -2.26483 13.7768 1.70396L12.515 2.78078L11.2533 1.70396C9.21622 -0.0344348 6.40136 -0.483669 4.00174 0.545838ZM8.99078 2.41072C10.2253 3.00555 11.5516 4.804 11.5516 5.88295C11.5516 6.19963 11.8618 6.35008 12.515 6.35008C13.1683 6.35008 13.4785 6.19963 13.4785 5.88295C13.4785 5.62603 13.7695 4.87711 14.125 4.21888C14.852 2.873 16.7022 1.80011 18.2957 1.80011C20.7714 1.80011 23.1171 4.04841 23.1097 6.41378C23.1046 8.06239 21.652 10.5139 19.3401 12.7762C17.2292 14.8418 13.2264 17.8767 12.613 17.8767C11.9829 17.8767 8.1741 15.1373 6.04521 13.1529C3.62504 10.8967 1.91717 8.12033 1.91717 6.44108C1.91717 4.89895 3.0232 3.11718 4.4096 2.42558C5.95914 1.653 7.40848 1.64845 8.99078 2.41072Z"
        fill="currentColor"
      />
    </svg>
  );
};