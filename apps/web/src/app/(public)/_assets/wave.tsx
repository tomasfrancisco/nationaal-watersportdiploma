export function Wave({
  className = "h-5 w-5 text-white",
}: {
  className?: string;
}) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={240.24}
      height={28}
      viewBox="0 0 240.24 28"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7909 8.78658C15.705 11.8351 10.4163 15 0 15V12C9.59474 12 14.316 9.17 19.2352 6.22142L19.2485 6.21343C24.3344 3.16488 29.6231 0 40.0394 0C50.4557 0 55.7444 3.16488 60.8303 6.21343L60.8436 6.22142C65.7628 9.17 70.4841 12 80.0788 12C89.6736 12 94.3949 9.17 99.314 6.22142L99.3273 6.21343C104.413 3.16488 109.702 0 120.118 0C130.535 0 135.823 3.16488 140.909 6.21343L140.922 6.22144C145.842 9.17002 150.563 12 160.158 12C169.752 12 174.474 9.17001 179.393 6.22144L179.406 6.21343C184.492 3.16488 189.781 0 200.197 0C210.613 0 215.902 3.16488 220.988 6.21343L221.001 6.22143C225.92 9.17001 230.642 12 240.236 12V15C229.82 15 224.531 11.8351 219.446 8.78658L219.432 8.77857C214.513 5.82999 209.792 3 200.197 3C190.602 3 185.881 5.83 180.962 8.77859L180.949 8.78658C175.863 11.8351 170.574 15 160.158 15C149.741 15 144.453 11.8351 139.367 8.78658L139.353 8.77859C134.434 5.83 129.713 3 120.118 3C110.523 3 105.802 5.82999 100.883 8.77857L100.87 8.78658C95.7838 11.8351 90.4951 15 80.0788 15C69.6625 15 64.3738 11.8351 59.2879 8.78658L59.2746 8.77858C54.3555 5.83 49.6342 3 40.0394 3C30.4447 3 25.7234 5.83 20.8042 8.77858L20.7909 8.78658Z"
        fill="currentColor"
      ></path>{" "}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7909 20.7866C15.705 23.8351 10.4163 27 0 27V24C9.59474 24 14.316 21.17 19.2352 18.2214L19.2485 18.2134C24.3344 15.1649 29.6231 12 40.0394 12C50.4557 12 55.7444 15.1649 60.8303 18.2134L60.8436 18.2214C65.7628 21.17 70.4841 24 80.0788 24C89.6736 24 94.3949 21.17 99.314 18.2214L99.3273 18.2134C104.413 15.1649 109.702 12 120.118 12C130.535 12 135.823 15.1649 140.909 18.2134L140.922 18.2214C145.842 21.17 150.563 24 160.158 24C169.752 24 174.474 21.17 179.393 18.2214L179.406 18.2134C184.492 15.1649 189.781 12 200.197 12C210.613 12 215.902 15.1649 220.988 18.2134L221.001 18.2214C225.92 21.17 230.642 24 240.236 24V27C229.82 27 224.531 23.8351 219.446 20.7866L219.432 20.7786C214.513 17.83 209.792 15 200.197 15C190.602 15 185.881 17.83 180.962 20.7786L180.949 20.7866C175.863 23.8351 170.574 27 160.158 27C149.741 27 144.453 23.8351 139.367 20.7866L139.353 20.7786C134.434 17.83 129.713 15 120.118 15C110.523 15 105.802 17.83 100.883 20.7786L100.87 20.7866C95.7838 23.8351 90.4951 27 80.0788 27C69.6625 27 64.3738 23.8351 59.2879 20.7866L59.2746 20.7786C54.3555 17.83 49.6342 15 40.0394 15C30.4447 15 25.7234 17.83 20.8042 20.7786L20.7909 20.7866Z"
        fill="currentColor"
      ></path>{" "}
    </svg>
  );
}

export function DoubleLine({
  className = "h-5 w-5 text-white",
}: {
  className?: string;
}) {
  return (
    <svg
      width="100%"
      height="15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line
        x1="0"
        y1="1.5"
        x2="100%"
        y2="1.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="0"
        y1="13.5"
        x2="100%"
        y2="13.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Line({
  className = "h-5 w-5 text-white",
}: {
  className?: string;
}) {
  return (
    <svg
      width="100%"
      height="3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line
        x1="0"
        y1="1.5"
        x2="100%"
        y2="1.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LineWave({ progress }: { progress: string }) {
  return (
    <div className="group relative w-full overflow-x-hidden py-3 text-branding-light/20">
      <div
        style={{
          width: progress,
        }}
      >
        <DoubleLine className="w-full" />
      </div>
      <div
        className="absolute top-0"
        style={{
          left: progress,
        }}
      >
        <Wave className="h-full" />
      </div>
      <div
        className="absolute right-0 top-[12px] translate-x-[240px]"
        style={{
          left: progress,
        }}
      >
        <DoubleLine className="w-full" />
      </div>
    </div>
  );
}
