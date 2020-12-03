export const LogoJacotStudio = ({Size, CircleColor, FillColor}) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={Size}
        height={Size}
        viewBox="0 0 80 80"
      >
        <defs />
        <g fill="none" fillRule="evenodd">
          <rect
            width={Size}
            height={Size}
            x="24"
            y="24"
            fill={CircleColor}
            rx="32"
          />
          <path
            fill={FillColor}
            d="M72.251625 53.6220278c-1.7625 4.1672222-4.2869444 7.9108333-7.5029167 11.1266666-3.2159722 3.2159723-6.9594444 5.7402778-11.1266666 7.5029167-4.3118056 1.82375-8.8948611 2.7483333-13.6220834 2.7483333-2.4186111 0-4.7991666-.2436111-7.1252777-.7243055 10.8606944-2.1545833 17.1252777-9.0233333 17.1252777-19.2756945v-12.5c0-4.1354166 3.3645834-7.5 7.5-7.5 1.3806945 0 2.5-1.1191666 2.5-2.5 0-1.3806944-1.1193055-2.5-2.5-2.5-6.8925 0-12.5 5.6075-12.5 12.5v12.5c0 4.9991667-1.8551389 8.8195834-5.5140277 11.3551389-3.4408334 2.3845834-8.45 3.6448611-14.4858334 3.6448611h-3.0429166c-2.4283334-1.4623611-4.6729167-3.2181944-6.7058334-5.25125-.085-.0848611-.1673611-.1716666-.2513889-.2572222V52.4999444c0-6.0354166-4.2997222-11.0855555-9.99680552-12.2480555-.00055556-.0840278-.00319445-.1677778-.00319445-.2519445 0-4.7270833.92472223-9.3102777 2.74847223-13.6219444 1.76263888-4.1672222 4.28680554-7.9108333 7.50291664-11.1268056 3.2158334-3.2158333 6.9594445-5.74027773 11.1266667-7.50277773 4.3116667-1.82375 8.8948611-2.74847223 13.6219444-2.74847223 2.4186111 0 4.7991667.24375 7.1252778.72444445C36.2648194 7.87883333 29.9999583 14.7475833 29.9999583 24.9999444v12.5c0 4.1355556-3.3644444 7.5-7.5 7.5-1.3806944 0-2.4998611 1.1193056-2.4998611 2.5 0 1.3808334 1.1193056 2.5 2.5 2.5 6.8925 0 12.4998611-5.6075 12.4998611-12.5v-12.5c0-4.9990277 1.8552778-8.8194444 5.5141667-11.355 3.4408333-2.3845833 8.45-3.64499996 14.4858333-3.64499996h3.0427778c2.4286111 1.46263886 4.6730556 3.21833336 6.7059722 5.25124996.085.085.1673611.1718056.25125.2573612v11.9913888c0 6.0355556 4.2998611 11.0855556 9.9970834 12.2480556.0005555.0841667.0029166.1679167.0029166.2519444 0 4.7272223-.9245833 9.3104167-2.7483333 13.6220834m5.2483333-18.6220834c-1.0454166 0-2.04125-.2155555-2.94625-.6036111-2.675-1.1472222-4.55375-3.80625-4.55375-6.8963889V13.5459167c-1.1102777-1.2581945-2.2983333-2.4458334-3.5568055-3.55569448-.4713889-.41555555-.9525-.82013889-1.4431945-1.21347222-1.7595833-1.41069444-3.6406944-2.67555556-5.6255555-3.77680556-5.7402778-3.18430555-12.3448611-5-19.3744445-5-22.0913889 0-39.99999997 17.90861116-39.99999997 39.99999996 0 1.6934723.1063889 3.3619445.31055556 5h2.18958333c1.04527778 0 2.04111111.2156945 2.94611111.6038889 2.675 1.1470834 4.55375 3.8061111 4.55375 6.8961111V66.4541111c1.11027777 1.2581945 2.29833337 2.4458333 3.55680557 3.5556945.4713889.4155555.9526389.8201388 1.4431944 1.2134722 1.7595834 1.4106944 3.6406945 2.6756944 5.6255556 3.7766666 5.7402778 3.1844445 12.345 5 19.3744444 5 22.0915278 0 40-17.9086111 40-40 0-1.6933333-.10625-3.3618055-.3104166-5h-2.1895834z"
          />
        </g>
      </svg>
    );
  };

  export const AddCardIcon = (props) => {

    return (
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill={props.fillColor}>
        <path d="M0 0h24v24H0zm18.31 6l-2.76 5z" fill="none"/>
        <path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/>
      </svg>
    )
}
  