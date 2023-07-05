 interface CheckMarkIconProps {
    width: string;
    height: string;
    fill: string
}
 
 const CheckMarkIcon = ({width, height, fill }: CheckMarkIconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={width} height={height}>
        <path fill-rule="evenodd"
            d="M1,9.9C0.7,9.6,0.7,9.2,0.9,8.9C1.2,8.6,1.7,8.5,2,8.7l4.4,3.6l7.5-8.5c0.3-0.3,0.7-0.3,1.1-0.1c0,0,0,0,0,0 c0.3,0.3,0.3,0.7,0.1,1.1l-8,9c-0.3,0.3-0.7,0.3-1,0.1L1,9.9L1,9.9z"  fill={fill}/>
    </svg>
    )
}

export default CheckMarkIcon;
