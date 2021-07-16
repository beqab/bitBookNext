import React from "react";
import LoginHeader from "../components/headers/loginHeader";
import Link from "next/link";
import ExhangeSvg from "../components/svgComponents/exchangesBg";
function exchanges() {
  return (
    <div className="exchangePage">
      <div style={{ position: "relative", zIndex: 2 }}>
        <LoginHeader />
      </div>
      <div className="container mt-5">
        <div className="row">
          <div style={{ position: "relative", zIndex: 2 }} className="col-md-4">
            <h2>BitBook Exchanges</h2>
            <Link href="/">
              <a className="exchangeLink exchangeLink1 ">
                <svg
                  id="Component_47_1"
                  data-name="Component 47 – 1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="289"
                  height="177"
                  viewBox="0 0 289 177"
                >
                  <defs>
                    <pattern
                      id="pattern"
                      preserveAspectRatio="none"
                      width="100%"
                      height="100%"
                      viewBox="0 0 556 129"
                    >
                      <image
                        width="556"
                        height="129"
                        xlinkHref="data:image/png;base64,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"
                      />
                    </pattern>
                  </defs>
                  <rect
                    id="Rectangle_353"
                    data-name="Rectangle 353"
                    width="289"
                    height="171"
                    rx="3"
                    fill="#fff"
                  />
                  <rect
                    id="_9a273c3a-4c44-461a-920d-02be54211894"
                    data-name="9a273c3a-4c44-461a-920d-02be54211894"
                    width="174"
                    height="41"
                    transform="translate(58 45)"
                    fill="url(#pattern)"
                  />
                  <g
                    id="Component_46_1"
                    data-name="Component 46 – 1"
                    transform="translate(0 132)"
                  >
                    <path
                      id="Rectangle_357"
                      data-name="Rectangle 357"
                      d="M0,0H289a0,0,0,0,1,0,0V42a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                      fill="#032087"
                    />
                    <g
                      id="Group_177"
                      data-name="Group 177"
                      transform="translate(67 13.152)"
                    >
                      <text
                        id="Go_to_Exchange"
                        data-name="Go to Exchange"
                        transform="translate(65 14.848)"
                        fill="#fff"
                        fontSize="16"
                        fontFamily="Montserrat-SemiBold, Montserrat"
                        fontWeight="600"
                      >
                        <tspan x="-64.872" y="0">
                          Go to Exchange
                        </tspan>
                      </text>
                      <g
                        id="Group_176"
                        data-name="Group 176"
                        transform="translate(140.397 1.848)"
                      >
                        <g
                          id="Icon_feather-arrow-right"
                          data-name="Icon feather-arrow-right"
                          transform="translate(0 7.566)"
                        >
                          <path
                            id="Path_1"
                            data-name="Path 1"
                            d="M22.842,18H7.5"
                            transform="translate(-7.5 -14.068)"
                            fill="none"
                            stroke="#fff"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            id="Path_2"
                            data-name="Path 2"
                            d="M23.465,7.5,18,11.432l5.465,3.932"
                            transform="translate(-18 -7.5)"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="1.5"
                          />
                        </g>
                        <g
                          id="Icon_feather-arrow-right-2"
                          data-name="Icon feather-arrow-right"
                          transform="translate(0)"
                        >
                          <path
                            id="Path_1-2"
                            data-name="Path 1"
                            d="M7.5,18H22.842"
                            transform="translate(-7.5 -14.068)"
                            fill="none"
                            stroke="#fff"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            id="Path_2-2"
                            data-name="Path 2"
                            d="M18,7.5l5.465,3.932L18,15.365"
                            transform="translate(-8.122 -7.5)"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="1.5"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </Link>
            <Link href="/">
              <a className="exchangeLink exchangeLink2 ">
                <svg
                  id="Component_48_1"
                  data-name="Component 48 – 1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="289"
                  height="171"
                  viewBox="0 0 289 171"
                >
                  <rect
                    id="Rectangle_354"
                    data-name="Rectangle 354"
                    width="289"
                    height="171"
                    rx="3"
                    fill="#fff"
                  />
                  <g id="页面-1" transform="translate(62.426 47.336)">
                    <g id="BitMart_logo" transform="translate(0 0)">
                      <g id="编组-2">
                        <g id="编组" transform="translate(0)">
                          <path
                            id="Fill-77"
                            d="M36.694,10.729q-3.761-3.1-10.35-3.1H15.4V9.159H26.142c3.734,0,7.115.77,9.179,2.552a10.138,10.138,0,0,1,3.629,7.717,9.043,9.043,0,0,1-3.5,7.281c-2.147,1.773-5.976,2.555-9.809,2.555H13.3v1.529l12.426,0q6.935,0,10.834-3.011a10.088,10.088,0,0,0,3.9-8.474,10.5,10.5,0,0,0-3.764-8.577"
                            transform="translate(-8.757 -7.63)"
                            fill="#1c1e1d"
                            fillRule="evenodd"
                          />
                          <path
                            id="Fill-79"
                            d="M55.178,23.958c-1.561-1.184-3.354-2.138-8.427-2.138-5.472,0-6.141,0-8.441,0v1.491s3.777-.049,8.253,0c4.326.045,5.913.533,7.368,1.61a6.522,6.522,0,0,1,3.018,5.454c0,2.293-1.173,3.916-3.045,5.293-1.914,1.411-4.84,1.426-6.032,1.453-.45.011-6.267,0-6.267,0v1.491s2.895.04,4.684,0c4.106-.092,6.542-.336,8.81-2.022a7.5,7.5,0,0,0,3.255-6.3,7.379,7.379,0,0,0-3.177-6.327"
                            transform="translate(-28.168 -18.643)"
                            fill="#1c1e1d"
                            fillRule="evenodd"
                          />
                          <path
                            id="Fill-80"
                            d="M19.265,35.9c-1.171-.734-2.2-1.229-7.046-1.229H6.152v.981h5.9c4.294,0,5.922.763,6.414,1.066A3.982,3.982,0,0,1,20.7,40.231a4.253,4.253,0,0,1-1.836,3.446c-1,.562-2.823,1.066-6.038,1.066H-6.99v.981H12.9c3.876,0,5.205-.43,6.571-1.184a4.728,4.728,0,0,0,2.284-4.3A4.936,4.936,0,0,0,19.265,35.9"
                            transform="translate(6.99 -28.616)"
                            fill="#1c1e1d"
                            fillRule="evenodd"
                          />
                        </g>
                        <path
                          id="Fill-81"
                          d="M46.414,77.731q-3.761-3.1-10.35-3.1c-5.875,0-4.852,0-7.321,0v1.529H35.86c3.734,0,7.117.77,9.182,2.552a10.137,10.137,0,0,1,3.627,7.72,9.04,9.04,0,0,1-3.5,7.279c-2.147,1.773-5.978,2.555-9.811,2.555H23.02v1.529l12.426,0q6.935,0,10.832-3.011a10.086,10.086,0,0,0,3.9-8.472,10.5,10.5,0,0,0-3.764-8.577"
                          transform="translate(-16.301 -59.629)"
                          fill="#1c1e1d"
                          fillRule="evenodd"
                        />
                        <path
                          id="Fill-82"
                          d="M54.382,90.958c-1.561-1.182-3.354-2.138-8.427-2.138-5.474,0-9.175,0-11.474,0v1.491s6.808-.049,11.286,0c4.326.045,5.911.533,7.366,1.61a6.521,6.521,0,0,1,3.02,5.454c0,2.293-1.173,3.916-3.045,5.295-1.914,1.408-4.84,1.426-6.034,1.453-.45.009-6.267,0-6.267,0v1.489s2.895.04,4.686,0c4.1-.094,6.542-.338,8.81-2.022a7.507,7.507,0,0,0,3.253-6.3,7.381,7.381,0,0,0-3.175-6.327"
                          transform="translate(-25.195 -70.642)"
                          fill="#1c1e1d"
                          fillRule="evenodd"
                        />
                        <path
                          id="Fill-83"
                          d="M45.45,118.083H56.2v-.833H45.45Z"
                          transform="translate(-33.709 -92.707)"
                          fill="#1c1e1d"
                          fillRule="evenodd"
                        />
                        <path
                          id="Fill-84"
                          d="M65.26,131.5h6.255v-.716H65.26Z"
                          transform="translate(-49.084 -103.208)"
                          fill="#1c1e1d"
                          fillRule="evenodd"
                        />
                        <path
                          id="Fill-85"
                          d="M23.02,118.083h3.186v-.833H23.02Z"
                          transform="translate(-16.301 -92.707)"
                          fill="#1c1e1d"
                          fillRule="evenodd"
                        />
                        <path
                          id="Fill-86"
                          d="M14.15,131.353h9.676v-.833H14.15Z"
                          transform="translate(-9.417 -103.006)"
                          fill="#1c1e1d"
                          fillRule="evenodd"
                        />
                        <path
                          id="Fill-87"
                          d="M24.8,36.377h3.77V35.69H24.8Z"
                          transform="translate(-17.683 -29.408)"
                          fill="#1c1e1d"
                          fillRule="evenodd"
                        />
                        <path
                          id="Fill-88"
                          d="M13.07,60.889h8.635v-.8H13.07Z"
                          transform="translate(-8.579 -48.345)"
                          fill="#1c1e1d"
                          fillRule="evenodd"
                        />
                        <path
                          id="Fill-89"
                          d="M14.15,159.9h9.106v-1H14.15Z"
                          transform="translate(-9.417 -125.032)"
                          fill="#1c1e1d"
                          fillRule="evenodd"
                        />
                        <path
                          id="Fill-90"
                          d="M4.01,172.806H6.287V171.36H4.01Z"
                          transform="translate(-1.547 -134.703)"
                          fill="#1c1e1d"
                          fillRule="evenodd"
                        />
                        <path
                          id="Fill-91"
                          d="M29.43,49.989h14.3v-.8H29.43Z"
                          transform="translate(-21.276 -39.885)"
                          fill="#1c1e1d"
                          fillRule="evenodd"
                        />
                        <path
                          id="Fill-92"
                          d="M61.36,60.889h6.878v-.8H61.36Z"
                          transform="translate(-46.057 -48.345)"
                          fill="#1c1e1d"
                          fillRule="evenodd"
                        />
                        <path
                          id="Fill-93"
                          d="M28.985,103.717c-1.173-.71-2.2-1.187-7.046-1.187H14.209v.947H21.77c4.294,0,5.924.737,6.417,1.03a3.844,3.844,0,0,1,2.237,3.392,4.06,4.06,0,0,1-1.838,3.325c-1,.544-2.823,1.03-6.038,1.03H2.73v.947l19.89,0c3.878,0,5.208-.414,6.573-1.142a4.536,4.536,0,0,0,2.281-4.151,4.74,4.74,0,0,0-2.49-4.189"
                          transform="translate(-0.554 -81.283)"
                          fill="#1c1e1d"
                          fillRule="evenodd"
                        />
                        <path
                          id="Fill-94"
                          d="M198.8,53.419v8.714h4.76a8.318,8.318,0,0,0,4.789-1.182,3.743,3.743,0,0,0,1.7-3.242q0-4.292-7.22-4.29Zm0-10.373v7.82h3.591a7.956,7.956,0,0,0,4.527-1.122,3.616,3.616,0,0,0,1.65-3.168q0-3.53-5.741-3.531ZM195.29,64.7V40.48h8.517a10.86,10.86,0,0,1,6.155,1.536,4.653,4.653,0,0,1,2.275,4,5.163,5.163,0,0,1-1.377,3.582,7.614,7.614,0,0,1-3.8,2.161v.067a8.454,8.454,0,0,1,4.84,1.849,5.11,5.11,0,0,1,1.816,4.064,5.887,5.887,0,0,1-2.754,5.033,11.856,11.856,0,0,1-6.95,1.925Z"
                          transform="translate(-150.222 -33.125)"
                          fill="#1c1e1d"
                          fillRule="evenodd"
                        />
                        <path
                          id="Fill-95"
                          d="M293.449,61.006h3.421v-17.3h-3.421ZM295.2,39.318a2.453,2.453,0,0,1-1.565-.506,1.562,1.562,0,0,1-.647-1.283,1.589,1.589,0,0,1,.647-1.294,2.434,2.434,0,0,1,1.565-.515,2.518,2.518,0,0,1,1.6.515,1.579,1.579,0,0,1,.656,1.294,1.563,1.563,0,0,1-.656,1.265,2.485,2.485,0,0,1-1.6.524Z"
                          transform="translate(-226.126 -29.431)"
                          fill="#1c1e1d"
                          fillRule="evenodd"
                        />
                        <path
                          id="Fill-96"
                          d="M334.65,70.8a7.927,7.927,0,0,1-3.193.54q-5.615,0-5.615-5.067V56.032H322.17V53.668h3.672V49.446l3.423-.9v5.118h5.385v2.364h-5.385v9.746a3.471,3.471,0,0,0,.73,2.483,3.305,3.305,0,0,0,2.422.743,4.178,4.178,0,0,0,2.232-.575V70.8"
                          transform="translate(-248.819 -39.388)"
                          fill="#1c1e1d"
                          fillRule="evenodd"
                        />
                        <path
                          id="Fill-97"
                          d="M419.4,71.421h-3.206V56.475a42.741,42.741,0,0,1,.269-4.337h-.076a12.142,12.142,0,0,1-.826,2.161l-9.408,17.123h-1.574l-9.388-17a11.514,11.514,0,0,1-.826-2.284h-.076a42.917,42.917,0,0,1,.154,4.366V71.421H391.33V49.14h4.263l8.447,15.538a17.658,17.658,0,0,1,1.267,2.673h.114q.826-1.834,1.325-2.736l8.62-15.475H419.4V71.421"
                          transform="translate(-302.615 -39.846)"
                          fill="#1c1e1d"
                          fillRule="evenodd"
                        />
                        <path
                          id="Fill-98"
                          d="M547.73,78.551l-5.154.575a9.732,9.732,0,0,0-3.591.954,2.546,2.546,0,0,0-1.209,2.422,2.445,2.445,0,0,0,1.117,2.071,4.987,4.987,0,0,0,2.973.8,6.173,6.173,0,0,0,4.2-1.444,4.636,4.636,0,0,0,1.659-3.656Zm3.423,8.75H547.73V84.6h-.083a7.582,7.582,0,0,1-6.573,3.108,8.118,8.118,0,0,1-5-1.368,4.334,4.334,0,0,1-1.8-3.631q0-4.846,7.055-5.642l6.406-.725q0-4.41-4.4-4.408a12.072,12.072,0,0,0-6.97,2.127V71.221A15.649,15.649,0,0,1,543.62,69.6q7.533,0,7.534,6.452V87.3Z"
                          transform="translate(-413.671 -55.726)"
                          fill="#1c1e1d"
                          fillRule="evenodd"
                        />
                        <path
                          id="Fill-99"
                          d="M641.985,73.158A4.939,4.939,0,0,0,639.4,72.6a4.682,4.682,0,0,0-3.663,1.672,6.664,6.664,0,0,0-1.471,4.561V87.65H630.84v-17.3h3.423v3.564h.083a6.074,6.074,0,0,1,2.234-2.848,5.837,5.837,0,0,1,3.358-1.021,6.77,6.77,0,0,1,2.046.237v2.87"
                          transform="translate(-488.754 -56.075)"
                          fill="#1c1e1d"
                          fillRule="evenodd"
                        />
                        <path
                          id="Fill-100"
                          d="M690.59,70.8a7.928,7.928,0,0,1-3.193.54q-5.615,0-5.615-5.067V56.032H678.11V53.668h3.672V49.446l3.423-.9v5.118h5.385v2.364h-5.385v9.746a3.471,3.471,0,0,0,.73,2.483,3.305,3.305,0,0,0,2.422.743,4.178,4.178,0,0,0,2.232-.575V70.8"
                          transform="translate(-525.441 -39.388)"
                          fill="#1c1e1d"
                          fillRule="evenodd"
                        />
                      </g>
                    </g>
                  </g>
                  <g
                    id="Component_46_2"
                    data-name="Component 46 – 2"
                    transform="translate(0 126)"
                  >
                    <path
                      id="Rectangle_357"
                      data-name="Rectangle 357"
                      d="M0,0H289a0,0,0,0,1,0,0V42a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                      fill="#032087"
                    />
                    <g
                      id="Group_177"
                      data-name="Group 177"
                      transform="translate(67 13.152)"
                    >
                      <text
                        id="Go_to_Exchange"
                        data-name="Go to Exchange"
                        transform="translate(65 14.848)"
                        fill="#fff"
                        fontSize="16"
                        fontFamily="Montserrat-SemiBold, Montserrat"
                        fontWeight="600"
                      >
                        <tspan x="-64.872" y="0">
                          Go to Exchange
                        </tspan>
                      </text>
                      <g
                        id="Group_176"
                        data-name="Group 176"
                        transform="translate(140.397 1.848)"
                      >
                        <g
                          id="Icon_feather-arrow-right"
                          data-name="Icon feather-arrow-right"
                          transform="translate(0 7.566)"
                        >
                          <path
                            id="Path_1"
                            data-name="Path 1"
                            d="M22.842,18H7.5"
                            transform="translate(-7.5 -14.068)"
                            fill="none"
                            stroke="#fff"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            id="Path_2"
                            data-name="Path 2"
                            d="M23.465,7.5,18,11.432l5.465,3.932"
                            transform="translate(-18 -7.5)"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="1.5"
                          />
                        </g>
                        <g
                          id="Icon_feather-arrow-right-2"
                          data-name="Icon feather-arrow-right"
                          transform="translate(0)"
                        >
                          <path
                            id="Path_1-2"
                            data-name="Path 1"
                            d="M7.5,18H22.842"
                            transform="translate(-7.5 -14.068)"
                            fill="none"
                            stroke="#fff"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            id="Path_2-2"
                            data-name="Path 2"
                            d="M18,7.5l5.465,3.932L18,15.365"
                            transform="translate(-8.122 -7.5)"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="1.5"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </Link>

            <Link href="/">
              <a className="exchangeLink exchangeLink3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="289"
                  height="171"
                  viewBox="0 0 289 171"
                >
                  <defs>
                    <pattern
                      id="pattern"
                      preserveAspectRatio="none"
                      width="100%"
                      height="100%"
                      viewBox="0 0 2560 396"
                    >
                      <image
                        width="2560"
                        height="396"
                        xlinkHref="data:image/png;base64,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"
                      />
                    </pattern>
                  </defs>
                  <g
                    id="Group_178"
                    data-name="Group 178"
                    transform="translate(-97 -568)"
                  >
                    <rect
                      id="Rectangle_355"
                      data-name="Rectangle 355"
                      width="289"
                      height="171"
                      rx="3"
                      transform="translate(97 568)"
                      fill="#fff"
                    />
                    <rect
                      id="_60a4784dad8d3b87e52301b2_Asset_1_2560x"
                      data-name="60a4784dad8d3b87e52301b2_Asset 1@2560x"
                      width="188"
                      height="29"
                      transform="translate(149 621)"
                      fill="url(#pattern)"
                    />
                    <g
                      id="Component_46_3"
                      data-name="Component 46 – 3"
                      transform="translate(97 694)"
                    >
                      <path
                        id="Rectangle_357"
                        data-name="Rectangle 357"
                        d="M0,0H289a0,0,0,0,1,0,0V42a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z"
                        fill="#032087"
                      />
                      <g
                        id="Group_177"
                        data-name="Group 177"
                        transform="translate(67 13.152)"
                      >
                        <text
                          id="Go_to_Exchange"
                          data-name="Go to Exchange"
                          transform="translate(65 14.848)"
                          fill="#fff"
                          fontSize="16"
                          fontFamily="Montserrat-SemiBold, Montserrat"
                          fontWeight="600"
                        >
                          <tspan x="-64.872" y="0">
                            Go to Exchange
                          </tspan>
                        </text>
                        <g
                          id="Group_176"
                          data-name="Group 176"
                          transform="translate(140.397 1.848)"
                        >
                          <g
                            id="Icon_feather-arrow-right"
                            data-name="Icon feather-arrow-right"
                            transform="translate(0 7.566)"
                          >
                            <path
                              id="Path_1"
                              data-name="Path 1"
                              d="M22.842,18H7.5"
                              transform="translate(-7.5 -14.068)"
                              fill="none"
                              stroke="#fff"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              id="Path_2"
                              data-name="Path 2"
                              d="M23.465,7.5,18,11.432l5.465,3.932"
                              transform="translate(-18 -7.5)"
                              fill="none"
                              stroke="#fff"
                              strokeWidth="1.5"
                            />
                          </g>
                          <g
                            id="Icon_feather-arrow-right-2"
                            data-name="Icon feather-arrow-right"
                            transform="translate(0)"
                          >
                            <path
                              id="Path_1-2"
                              data-name="Path 1"
                              d="M7.5,18H22.842"
                              transform="translate(-7.5 -14.068)"
                              fill="none"
                              stroke="#fff"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              id="Path_2-2"
                              data-name="Path 2"
                              d="M18,7.5l5.465,3.932L18,15.365"
                              transform="translate(-8.122 -7.5)"
                              fill="none"
                              stroke="#fff"
                              strokeWidth="1.5"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </Link>
          </div>
          <div className="">
            <div className="exchangeSvgWrapper">
              <ExhangeSvg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default exchanges;
