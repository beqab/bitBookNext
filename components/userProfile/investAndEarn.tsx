import React, { useState } from "react";
import classnames from "classnames";
import { Button } from "../common/form";

function InvestAndEarn() {
  const [activeTab, setActiveTab] = useState("Referral");
  return (
    <div className="investAndEarn">
      <div className="userProfile_title">Invite & Earn</div>
      <div className="tabMenu">
        <div
          onClick={() => {
            setActiveTab("Referral");
          }}
          className={classnames({
            active: activeTab === "Referral",
          })}
        >
          Referral info
        </div>
        <div
          onClick={() => {
            setActiveTab("Invited");
          }}
          className={classnames({
            active: activeTab === "Invited",
          })}
        >
          Invited People
        </div>
      </div>
      <div className="content">
        {activeTab === "Referral" ? (
          <div className="invest">
            <p>
              <b> Join our Influencer reward pool </b> and invite people to come
              book their trip on BitBook. Each person who signs up via your
              invite link will be connected to your account for 20 years,
              whenever this person
              <b> makes a booking </b> and complete their trip
              <b>you will get rewarded </b> a part of our influencer reward
              pool.
            </p>
            <div className="invest_cards">
              <div className="invest_cards_item invest_cards_item-first">
                <div className="itemContent">
                  <p>
                    Reward pool this month: <br /> 260,416.75 BBT
                  </p>
                  <p>Value $32,132.32</p>
                </div>
              </div>
              <div className="invest_cards_item invest_cards_item-middle">
                <div className="itemContent">
                  <p>
                    Reward pool last month: <br />
                    260,416.75 BBT
                  </p>
                  <p>
                    Invite rewards per completed <br />
                    stay: 5,208 BBT
                  </p>
                </div>
              </div>
              <div className="invest_cards_item invest_cards_item-last">
                <div className="itemContent">
                  <p>Your reward: 23,321.44BBT</p>
                  <p>
                    <button>Claim Now</button>
                  </p>
                </div>
              </div>
            </div>
            <div className="invest_footer">
              <div className="invest_footer_content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="384.434"
                  height="104.415"
                  viewBox="0 0 384.434 104.415"
                >
                  <g
                    id="Group_198"
                    data-name="Group 198"
                    transform="translate(-611.566 -516)"
                  >
                    <g
                      id="Group_197"
                      data-name="Group 197"
                      transform="translate(0 -9.221)"
                    >
                      <text
                        id="Refer_friends_Get_rewards."
                        data-name="Refer friends, Get rewards."
                        transform="translate(749 564)"
                        fill="#fff"
                        fontSize="18"
                        fontFamily="Montserrat-SemiBold, Montserrat"
                        fontWeight="600"
                      >
                        <tspan x="0" y="0">
                          Refer friends, Get rewards.
                        </tspan>
                      </text>
                      <text
                        id="NSX78DS"
                        transform="translate(819.046 603.857)"
                        fill="#fff"
                        fontSize="17"
                        fontFamily="Montserrat-Medium, Montserrat"
                        fontWeight="500"
                      >
                        <tspan x="0" y="0">
                          NSX78DS
                        </tspan>
                      </text>
                      <path
                        id="Icon_material-content-copy"
                        data-name="Icon material-content-copy"
                        d="M13.287,1.5H4.47A1.474,1.474,0,0,0,3,2.97V13.257H4.47V2.97h8.818Zm2.2,2.939H7.409a1.474,1.474,0,0,0-1.47,1.47V16.2a1.474,1.474,0,0,0,1.47,1.47h8.083a1.474,1.474,0,0,0,1.47-1.47V5.909A1.474,1.474,0,0,0,15.492,4.439Zm0,11.757H7.409V5.909h8.083Z"
                        transform="translate(908.992 588.274)"
                        fill="#fff"
                      />
                    </g>
                    <g id="gift-box" transform="translate(606.553 500.21)">
                      <path
                        id="Path_3469"
                        data-name="Path 3469"
                        d="M80.589,108.417H23.219L72.9,76.83a1.3,1.3,0,0,0,.4-1.8l-4.922-7.741A7.886,7.886,0,0,0,57.5,64.867l-6.991,4.445.554-2.65A7.458,7.458,0,1,0,36.507,63.42L32.875,79.733l-12.16-2.707A7.458,7.458,0,0,0,16.15,91.159L8.661,95.921A7.886,7.886,0,0,0,6.24,106.795l4.922,7.742a1.3,1.3,0,0,0,1.8.4l4.582-2.912v33.012a7.886,7.886,0,0,0,7.878,7.877H74.016a7.886,7.886,0,0,0,7.877-7.877V109.721a1.3,1.3,0,0,0-1.3-1.3ZM58.9,67.068a5.234,5.234,0,0,1,2.817-.825,5.321,5.321,0,0,1,1.155.128,5.236,5.236,0,0,1,3.3,2.316L70.4,75.328,49.86,88.387,42.81,77.3Zm-19.85-3.08a4.85,4.85,0,1,1,9.464,2.125l-1.071,5.121L35.782,78.677ZM40.609,78.7l7.05,11.087-11.9,7.567L28.707,86.266ZM15,86.908a4.85,4.85,0,0,1,5.146-7.336l10.538,2.346-11.7,7.333-.948-.211A4.818,4.818,0,0,1,15,86.908Zm-2.338,25.129L8.441,105.4a5.275,5.275,0,0,1,1.619-7.274L26.506,87.666l7.049,11.087Zm25.288,38.269H25.422a5.275,5.275,0,0,1-5.269-5.269V111.025h17.8Zm16.575,0H40.56V111.025H54.528Zm24.757-5.269a5.275,5.275,0,0,1-5.269,5.269H57.136V111.025H79.285Z"
                        transform="translate(0 -32.709)"
                        fill="#fff"
                      />
                      <path
                        id="Path_3470"
                        data-name="Path 3470"
                        d="M376.241,218.383l.624-3.637a1.3,1.3,0,0,0-1.892-1.375l-3.266,1.717-3.266-1.717a1.3,1.3,0,0,0-1.892,1.375l.624,3.637-2.642,2.576a1.3,1.3,0,0,0,.723,2.224l3.651.531,1.633,3.309a1.3,1.3,0,0,0,2.339,0l1.633-3.309,3.651-.531a1.3,1.3,0,0,0,.723-2.224Zm-2.786,2.847a1.3,1.3,0,0,0-.982.713l-.767,1.554-.767-1.554a1.3,1.3,0,0,0-.982-.713l-1.716-.249,1.241-1.21a1.3,1.3,0,0,0,.375-1.154l-.293-1.709,1.534.807a1.3,1.3,0,0,0,1.214,0l1.534-.807-.293,1.709a1.3,1.3,0,0,0,.375,1.154l1.241,1.21Z"
                        transform="translate(-281.071 -154.522)"
                        fill="#fff"
                      />
                      <path
                        id="Path_3471"
                        data-name="Path 3471"
                        d="M438.1,135.723l-3.586-.872L433.2,131.4a1.3,1.3,0,0,0-2.329-.22l-1.937,3.141-3.685.185a1.3,1.3,0,0,0-.928,2.146l2.389,2.813-.962,3.562a1.3,1.3,0,0,0,1.755,1.546l3.412-1.4,3.092,2.016A1.3,1.3,0,0,0,436.018,144l-.279-3.68L438.61,138a1.3,1.3,0,0,0-.51-2.282Zm-4.533,3a1.3,1.3,0,0,0-.482,1.114l.13,1.729-1.452-.947a1.3,1.3,0,0,0-1.208-.114l-1.6.659.452-1.674a1.3,1.3,0,0,0-.265-1.184l-1.122-1.321,1.731-.087a1.3,1.3,0,0,0,1.045-.618l.91-1.476.618,1.62a1.3,1.3,0,0,0,.91.8l1.685.409Z"
                        transform="translate(-327.931 -89.829)"
                        fill="#fff"
                      />
                      <path
                        id="Path_3472"
                        data-name="Path 3472"
                        d="M390.878,24.7l-.963,3.562a1.3,1.3,0,0,0,1.755,1.547l3.412-1.4,3.091,2.017a1.3,1.3,0,0,0,2.013-1.191l-.279-3.68,2.872-2.316a1.3,1.3,0,0,0-.51-2.282l-3.586-.871-1.315-3.448a1.3,1.3,0,0,0-2.329-.22L393.1,19.551l-3.686.185a1.3,1.3,0,0,0-.929,2.146Zm3.041-2.574a1.3,1.3,0,0,0,1.045-.618l.91-1.476.618,1.62a1.3,1.3,0,0,0,.91.8l1.684.409-1.349,1.088a1.3,1.3,0,0,0-.482,1.114l.13,1.729-1.452-.947a1.3,1.3,0,0,0-1.208-.114l-1.6.659.452-1.674a1.3,1.3,0,0,0-.265-1.185l-1.122-1.321Z"
                        transform="translate(-299.887 0)"
                        fill="#fff"
                      />
                      <path
                        id="Path_3473"
                        data-name="Path 3473"
                        d="M275.018,228.993a15,15,0,0,0-4.442,4.193,1.3,1.3,0,1,0,2.2,1.4c.2-.3,4.914-7.436,15.184-4.9a1.3,1.3,0,1,0,.627-2.532A17.042,17.042,0,0,0,275.018,228.993Z"
                        transform="translate(-207.687 -164.943)"
                        fill="#fff"
                      />
                      <path
                        id="Path_3474"
                        data-name="Path 3474"
                        d="M313.109,158.957a1.3,1.3,0,0,0,1-2.409c-9.284-3.853-16.031-.968-20.056,2.132a24.448,24.448,0,0,0-6.492,7.66,1.3,1.3,0,0,0,2.336,1.16,21.993,21.993,0,0,1,5.747-6.754c5.061-3.9,10.938-4.5,17.466-1.789Z"
                        transform="translate(-221.032 -108.718)"
                        fill="#fff"
                      />
                      <path
                        id="Path_3475"
                        data-name="Path 3475"
                        d="M337.949,94.89a1.3,1.3,0,0,0,.839,1.642,19.6,19.6,0,0,0,5.529.8,13.6,13.6,0,0,0,6.958-1.732c2.956-1.751,4.851-4.735,5.637-8.868a1.3,1.3,0,0,0-2.562-.487c-.639,3.36-2.116,5.751-4.393,7.1-4.33,2.576-10.273.732-10.367.7a1.3,1.3,0,0,0-1.641.839Z"
                        transform="translate(-260.526 -54.311)"
                        fill="#fff"
                      />
                      <path
                        id="Path_3476"
                        data-name="Path 3476"
                        d="M250.41,267.958a2.349,2.349,0,1,0-2.348-2.349A2.349,2.349,0,0,0,250.41,267.958Zm0-2.608a.26.26,0,1,1-.26.26A.26.26,0,0,1,250.41,265.35Z"
                        transform="translate(-190.225 -193.685)"
                        fill="#fff"
                      />
                      <path
                        id="Path_3477"
                        data-name="Path 3477"
                        d="M335.43,71.958a2.349,2.349,0,1,0-2.349-2.349,2.349,2.349,0,0,0,2.349,2.349Zm0-2.608a.26.26,0,1,1-.26.26A.26.26,0,0,1,335.43,69.35Z"
                        transform="translate(-256.765 -40.284)"
                        fill="#fff"
                      />
                      <path
                        id="Path_3478"
                        data-name="Path 3478"
                        d="M487.737,80.633a2.349,2.349,0,1,0,2.349,2.349A2.349,2.349,0,0,0,487.737,80.633Zm0,2.608a.26.26,0,1,1,.26-.26.26.26,0,0,1-.26.26Z"
                        transform="translate(-375.97 -50.75)"
                        fill="#fff"
                      />
                      <path
                        id="Path_3479"
                        data-name="Path 3479"
                        d="M237.529,215.57a2.349,2.349,0,1,0-2.347,2.349A2.349,2.349,0,0,0,237.529,215.57Zm-2.347.261a.26.26,0,1,1,.26-.261.26.26,0,0,1-.26.261Z"
                        transform="translate(-178.305 -154.521)"
                        fill="#fff"
                      />
                      <path
                        id="Path_3480"
                        data-name="Path 3480"
                        d="M469.943,230.812a2.349,2.349,0,1,0,2.349,2.349,2.349,2.349,0,0,0-2.349-2.349Zm0,2.608a.259.259,0,1,1,.26-.259A.26.26,0,0,1,469.943,233.42Z"
                        transform="translate(-362.043 -168.289)"
                        fill="#fff"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <div className="Invited_People">
            <table className="table">
              <thead>
                <tr>
                  <th>Friend`s name</th>
                  <th>Email</th>
                  <th>Completed Trips</th>
                  <th>Rewards Earned</th>
                  <th>
                    Registration time
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="14"
                      viewBox="0 0 8 14"
                    >
                      <g
                        id="Group_179"
                        data-name="Group 179"
                        transform="translate(-1234.736 -216.463)"
                      >
                        <path
                          id="Polygon_2"
                          data-name="Polygon 2"
                          d="M4,0,8,6H0Z"
                          transform="translate(1234.736 216.463)"
                          fill="#828384"
                        />
                        <path
                          id="Polygon_3"
                          data-name="Polygon 3"
                          d="M4,0,8,6H0Z"
                          transform="translate(1242.736 230.463) rotate(180)"
                          fill="#0068ef"
                        />
                      </g>
                    </svg>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>****ds@**.com</td>
                  <td>7</td>
                  <td>
                    6,433.23BTT{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9.308"
                      height="9.308"
                      viewBox="0 0 9.308 9.308"
                      style={{ marginBottom: "4px" }}
                    >
                      <g
                        id="Icon_feather-help-circle"
                        data-name="Icon feather-help-circle"
                        transform="translate(-2.5 -2.5)"
                      >
                        <path
                          id="Path_3481"
                          data-name="Path 3481"
                          d="M11.308,7.154A4.154,4.154,0,1,1,7.154,3,4.154,4.154,0,0,1,11.308,7.154Z"
                          fill="none"
                          stroke="#032087"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                        />
                        <path
                          id="Path_3482"
                          data-name="Path 3482"
                          d="M13.635,11.326a1.246,1.246,0,0,1,2.422.415c0,.831-1.246,1.246-1.246,1.246"
                          transform="translate(-7.69 -5.418)"
                          fill="none"
                          stroke="#032087"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                        />
                        <path
                          id="Path_3483"
                          data-name="Path 3483"
                          d="M18,25.5h0"
                          transform="translate(-10.846 -16.269)"
                          fill="none"
                          stroke="#032087"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                        />
                      </g>
                    </svg>
                  </td>
                  <td>7/13/2021 2:42PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default InvestAndEarn;
