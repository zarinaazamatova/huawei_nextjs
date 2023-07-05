 interface OKIconProps {
    width: string;
    height: string;
    fill: string
}
 
 const OKIcon = ({width, height, fill }: OKIconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 12 19">
            <path 
                d="M10.9901 11.2343C11.4099 10.8145 11.4699 10.2148 11.1101 9.61512C10.8102 9.13537 10.2705 8.89549 9.67083 9.01543C9.43095 9.0754 9.19107 9.19534 8.9512 9.37525C7.09216 10.6346 4.57348 10.5746 2.71444 9.31528C2.59451 9.25531 2.47457 9.19534 2.35463 9.13537C1.69497 8.83552 1.03532 8.95547 0.675509 9.55516C0.255727 10.1548 0.315689 10.8145 0.855408 11.3542C0.975346 11.4742 1.09528 11.5341 1.15525 11.6541L1.21522 11.714C2.05479 12.3737 3.07426 12.7935 4.39357 12.9734L3.61398 13.753C2.95432 14.4126 2.2347 15.1323 1.57504 15.7919C1.39513 15.9718 1.15525 16.2717 1.15525 16.6914C1.15525 17.2312 1.4551 17.7709 1.99482 18.0108C2.17473 18.1307 2.35463 18.1307 2.53454 18.1307C2.83438 18.1307 3.19419 18.0108 3.43407 17.7109C4.3336 16.8114 5.05323 16.0918 5.77286 15.3721C5.83283 15.3122 5.83282 15.3122 5.83282 15.3122C5.83282 15.3122 5.89279 15.3122 5.89279 15.3721C6.37254 15.9118 6.91226 16.3916 7.39201 16.9313C7.63189 17.1712 7.87176 17.4111 8.11164 17.6509C8.41148 17.9508 8.65136 18.0707 9.01117 18.0707C9.55089 18.1307 10.1506 17.7709 10.3905 17.2312C10.6303 16.7514 10.5104 16.1517 10.0906 15.7919C9.49092 15.1922 8.89123 14.5326 8.23157 13.9329L7.21211 12.9134C7.75182 12.8534 8.35151 12.7335 8.89123 12.4936C9.79077 12.1938 10.4504 11.774 10.9901 11.2343Z" />
            <path fill={fill}
                d="M5.83282 9.55515C8.41148 9.55515 10.5104 7.5162 10.5104 4.93754C10.5104 3.6782 10.0306 2.47883 9.1311 1.5793C8.23157 0.679764 7.09217 0.200012 5.89279 0.200012C3.31413 0.200012 1.27519 2.29892 1.21522 4.81761C1.21522 6.07695 1.69498 7.21636 2.59451 8.11589C3.43407 9.07539 4.57348 9.55515 5.83282 9.55515ZM4.51351 3.55827C4.87332 3.19846 5.35307 3.01854 5.83282 3.01854C6.91226 3.01854 7.69186 3.85811 7.69186 4.87758C7.69186 5.95702 6.85229 6.73661 5.83282 6.73661C4.75338 6.73661 3.97379 5.89705 3.97379 4.87758C3.97379 4.39783 4.1537 3.91808 4.51351 3.55827Z" />
            <path fill={fill}
                d="M10.9901 11.2343C11.4099 10.8145 11.4699 10.2148 11.1101 9.61512C10.8102 9.13537 10.2705 8.89549 9.67083 9.01543C9.43095 9.0754 9.19107 9.19534 8.9512 9.37525C7.09216 10.6346 4.57348 10.5746 2.71444 9.31528C2.59451 9.25531 2.47457 9.19534 2.35463 9.13537C1.69497 8.83552 1.03532 8.95547 0.675509 9.55516C0.255727 10.1548 0.315689 10.8145 0.855408 11.3542C0.975346 11.4742 1.09528 11.5341 1.15525 11.6541L1.21522 11.714C2.05479 12.3737 3.07426 12.7935 4.39357 12.9734L3.61398 13.753C2.95432 14.4126 2.2347 15.1323 1.57504 15.7919C1.39513 15.9718 1.15525 16.2717 1.15525 16.6914C1.15525 17.2312 1.4551 17.7709 1.99482 18.0108C2.17473 18.1307 2.35463 18.1307 2.53454 18.1307C2.83438 18.1307 3.19419 18.0108 3.43407 17.7109C4.3336 16.8114 5.05323 16.0918 5.77286 15.3721C5.83283 15.3122 5.83282 15.3122 5.83282 15.3122C5.83282 15.3122 5.89279 15.3122 5.89279 15.3721C6.37254 15.9118 6.91226 16.3916 7.39201 16.9313C7.63189 17.1712 7.87176 17.4111 8.11164 17.6509C8.41148 17.9508 8.65136 18.0707 9.01117 18.0707C9.55089 18.1307 10.1506 17.7709 10.3905 17.2312C10.6303 16.7514 10.5104 16.1517 10.0906 15.7919C9.49092 15.1922 8.89123 14.5326 8.23157 13.9329L7.21211 12.9134C7.75182 12.8534 8.35151 12.7335 8.89123 12.4936C9.79077 12.1938 10.4504 11.774 10.9901 11.2343Z" />
        </svg>
    )
}
export default OKIcon;
