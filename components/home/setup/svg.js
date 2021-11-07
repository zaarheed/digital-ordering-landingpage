export default function Svg({ option }) {

    if (option === 1) {
        return (
            <div className="hidden sm:block text-sunshine-500" style={{pointerEvents: "none", position: "absolute", left: -56, top: 32}}>
                <span style={{lineHeight: 0, display: "block"}}>
                    <svg width="120" height="160" viewBox="0 0 120 160">
                        <g fill="none" fillRule="evenodd" strokeWidth="2">
                            <path d="M56 31c-19.813 9.866-32.816 18.746-33.376 26.407C21.75 69.472 43.312 68.907 44.727 80 46.142 91.093 4 102.081 4 136.698c0 23.574 31.68 24.135 52 4.302" stroke="#FFFFFF">
                            </path>
                            <path d="M116 4c-22.05 9.87-43.445 18.756-60 27m0 110c5.665-5.529 10.557-12.28 13.5-21" stroke="#FFFFFF">
                            </path>
                        </g>
                    </svg>
                </span>
            </div>
        );
    }

    if (option === 2) {
        return (
            <div className="hidden sm:block" style={{pointerEvents:"none",position:"absolute",top:-56,right:64}}>
                <span style={{lineHeight:0,display:"block"}}>
                    <svg width="160" height="120" viewBox="0 0 160 120">
                        <g fill="none" fillRule="evenodd" strokeWidth="2">
                            <path d="M18.897 56.214C27.37 34.232 34.72 18.6 41.027 18.043 49.392 17.309 52.31 37.283 60 38.471c7.69 1.189 31.484-36.373 43.1-34.396 5.498.936 10.99 25.88 15.863 51.97" stroke="#FFFFFF">
                            </path>
                            <path d="M4 96.481c5.31-14.37 10.27-28.265 14.897-40.267m100.066-.17c5.422 29.018 10.08 59.454 13.14 59.852 5.81.755 6.957-54.298 14.337-53.881C153.82 62.432 156 116 156 116" stroke="#FFFFFF">
                            </path>
                        </g>
                    </svg>
                </span>
            </div>
        );
    }

    if (option === 3) {
        return (
            <div className="hidden sm:block" style={{pointerEvents:"none",position:"absolute",right:-64,bottom:32}}>
                <span style={{lineHeight:0,display:"block"}}>
                    <svg width="120" height="160" viewBox="0 0 120 160">
                        <g fill="none" fillRule="evenodd" strokeLinejoin="round" strokeWidth="2">
                            <path d="M56.247 6.734c39.286-13.399 67.173 25.028 57.997 59.302-10.6 39.597-56.535 30.094-16.254 72.858 20.746 22.025 6.767 22.781-41.937 2.269" stroke="#FFFFFF">
                            </path>
                            <path d="M37.215 16.936c6.555-4.79 12.93-8.121 19.032-10.202m-.194 134.429c-9.56-4.027-26.911-11.91-52.053-23.651" stroke="#FFFFFF">
                            </path>
                        </g>
                    </svg>
                </span>
            </div>
        )
    }
}