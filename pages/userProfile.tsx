import React from "react";
import LoginHeader from "../components/headers/loginHeader";
import { FormGroup, Input, Button } from "../components/common/form";
import styled from "styled-components";

const Label = styled.label`
  color: red;
  span {
    color: #4b4c4d52;
    fontsize: 13px;
  }
`;

const userProfile = () => {
  return (
    <div className="userProfile">
      <LoginHeader />

      <div className="container mt-5">
        <div className="row">
          <div className="col-3">
            <div className="sideMenu">
              <div className="sideMenu_title"> Account</div>
              <ul>
                <li className="active">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.222"
                    height="18"
                    viewBox="0 0 16.222 18"
                  >
                    <g
                      id="Icon_feather-user"
                      data-name="Icon feather-user"
                      transform="translate(1 1)"
                    >
                      <path
                        id="Path_1244"
                        data-name="Path 1244"
                        d="M20.222,27.833V26.056A3.556,3.556,0,0,0,16.667,22.5H9.556A3.556,3.556,0,0,0,6,26.056v1.778"
                        transform="translate(-6 -11.833)"
                        fill="none"
                        stroke="#032087"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                      <path
                        id="Path_1245"
                        data-name="Path 1245"
                        d="M19.111,8.056A3.556,3.556,0,1,1,15.556,4.5,3.556,3.556,0,0,1,19.111,8.056Z"
                        transform="translate(-8.444 -4.5)"
                        fill="none"
                        stroke="#032087"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </g>
                  </svg>
                  Personal Information
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.706"
                    height="15.107"
                    viewBox="0 0 17.706 15.107"
                  >
                    <g
                      id="Icon_feather-credit-card"
                      data-name="Icon feather-credit-card"
                      transform="translate(1 1)"
                    >
                      <path
                        id="Path_1248"
                        data-name="Path 1248"
                        d="M2.928,6h12.85a1.544,1.544,0,0,1,1.428,1.638v9.83a1.544,1.544,0,0,1-1.428,1.638H2.928A1.544,1.544,0,0,1,1.5,17.469V7.638A1.544,1.544,0,0,1,2.928,6Z"
                        transform="translate(-1.5 -6)"
                        fill="none"
                        stroke="#032087"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                      <path
                        id="Path_1249"
                        data-name="Path 1249"
                        d="M1.5,15H17.206"
                        transform="translate(-1.5 -10.085)"
                        fill="none"
                        stroke="#032087"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </g>
                  </svg>
                  Wallet Connection
                </li>
                <li>
                  <svg
                    id="XMLID_1127_"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.185"
                    height="17.185"
                    viewBox="0 0 17.185 17.185"
                  >
                    <g id="XMLID_1324_">
                      <path
                        id="XMLID_1353_"
                        d="M15.574,7.129a5.951,5.951,0,0,0-3.666-1.853A5.976,5.976,0,0,0,2.986.8a.336.336,0,0,0,.336.581A5.3,5.3,0,1,1,1.345,3.387a.336.336,0,0,0-.586-.328,5.976,5.976,0,0,0,4.518,8.85,5.975,5.975,0,1,0,10.3-4.779Zm-6.764,4.1a.683.683,0,0,0,.1.089l.79.571-.3.927a.657.657,0,0,0,.242.746.657.657,0,0,0,.785,0l.789-.575.785.57a.667.667,0,0,0,1.026-.748l-.3-.921.788-.572a.667.667,0,0,0-.392-1.207h-.978l-.3-.925a.655.655,0,0,0-.568-.458A5.938,5.938,0,0,0,11.7,7.686,3.558,3.558,0,1,1,7.686,11.7a5.938,5.938,0,0,0,1.124-.467Zm.7-.448H10.52a.336.336,0,0,0,.32-.233l.368-1.144.371,1.145a.336.336,0,0,0,.319.232h1.21l-.976.708a.336.336,0,0,0-.122.376l.374,1.141-.972-.706a.336.336,0,0,0-.395,0l-.976.711.374-1.148a.336.336,0,0,0-.123-.376l-.878-.634Zm1.7,5.73a5.321,5.321,0,0,1-5.252-4.565h.016a5.986,5.986,0,0,0,1.056-.093,4.229,4.229,0,1,0,4.825-4.825,5.988,5.988,0,0,0,.093-1.056c0-.005,0-.011,0-.016a5.3,5.3,0,0,1-.738,10.555Z"
                        transform="translate(0 0)"
                        fill="#032087"
                      />
                      <path
                        id="XMLID_1361_"
                        d="M56.229,60.458A4.229,4.229,0,1,0,52,56.229,4.234,4.234,0,0,0,56.229,60.458Zm0-7.787a3.558,3.558,0,1,1-3.558,3.558A3.562,3.562,0,0,1,56.229,52.671Z"
                        transform="translate(-50.255 -50.255)"
                        fill="#032087"
                      />
                      <path
                        id="XMLID_1387_"
                        d="M101.472,106.594l.79.571-.3.927a.657.657,0,0,0,.242.746.657.657,0,0,0,.785,0l.789-.575.785.57a.667.667,0,0,0,1.026-.748l-.3-.921.788-.572a.667.667,0,0,0-.392-1.207H104.7l-.3-.925a.657.657,0,0,0-.635-.461h0a.657.657,0,0,0-.634.463l-.3.923h-.974a.667.667,0,0,0-.39,1.208Zm1.609-.537a.336.336,0,0,0,.32-.233l.368-1.144.371,1.145a.336.336,0,0,0,.319.232h1.21l-.976.708a.336.336,0,0,0-.122.376l.374,1.141-.972-.706a.336.336,0,0,0-.395,0l-.976.711.374-1.148a.336.336,0,0,0-.123-.376l-.978-.706Z"
                        transform="translate(-97.797 -100.509)"
                        fill="#032087"
                      />
                      <path
                        id="XMLID_1390_"
                        d="M48.716,50.711a.336.336,0,1,0-.237-.1A.338.338,0,0,0,48.716,50.711Z"
                        transform="translate(-46.756 -48.36)"
                        fill="#032087"
                      />
                    </g>
                  </svg>
                  BitBook Reward
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.118"
                    height="19.118"
                    viewBox="0 0 19.118 19.118"
                  >
                    <path
                      id="Icon_awesome-history"
                      data-name="Icon awesome-history"
                      d="M19.181,9.854A9.309,9.309,0,0,1,4.029,17.119a.9.9,0,0,1-.069-1.337l.423-.423a.9.9,0,0,1,1.2-.074A6.907,6.907,0,1,0,5.139,4.839L7.045,6.744A.6.6,0,0,1,6.62,7.77H1.163a.6.6,0,0,1-.6-.6V1.712a.6.6,0,0,1,1.025-.425L3.441,3.141a9.309,9.309,0,0,1,15.74,6.713ZM12.39,12.811l.369-.474a.9.9,0,0,0-.158-1.264L11.073,9.885V5.968a.9.9,0,0,0-.9-.9h-.6a.9.9,0,0,0-.9.9V11.06l2.455,1.91a.9.9,0,0,0,1.264-.158Z"
                      transform="translate(-0.313 -0.313)"
                      fill="#032087"
                      stroke="#f9fafc"
                      strokeWidth="0.5"
                    />
                  </svg>
                  Booking History
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18.618"
                    height="19.047"
                    viewBox="0 0 18.618 19.047"
                  >
                    <g id="affiliate-marketing" transform="translate(0 0)">
                      <g
                        id="Group_83"
                        data-name="Group 83"
                        transform="translate(0 0)"
                      >
                        <path
                          id="Path_1257"
                          data-name="Path 1257"
                          d="M2.831,12.376a7.549,7.549,0,0,1-.323-2.206,7.329,7.329,0,0,1,5.273-7v.915l4.036-2.045L7.781,0V1.453A9.093,9.093,0,0,0,.894,10.17a8.927,8.927,0,0,0,.161,1.722l.108-.861Z"
                          transform="translate(-0.894)"
                          fill="#032087"
                        />
                        <path
                          id="Path_1258"
                          data-name="Path 1258"
                          d="M49.031,17.076l-.269,4.52,3.767-2.475-1.237-.754a8.11,8.11,0,0,0,.376-2.583A8.974,8.974,0,0,0,45.7,7.39l.7.43-2.045.861a7.313,7.313,0,0,1,5.7,7.1,8.863,8.863,0,0,1-.215,1.722Z"
                          transform="translate(-33.911 -5.615)"
                          fill="#032087"
                        />
                        <path
                          id="Path_1259"
                          data-name="Path 1259"
                          d="M18.047,54.55a7.225,7.225,0,0,1-10.385.323l.807-.431L4.7,51.967l.269,4.52,1.238-.754a8.855,8.855,0,0,0,6.457,2.8,8.748,8.748,0,0,0,5.758-2.152l-.807.323Z"
                          transform="translate(-3.788 -39.484)"
                          fill="#032087"
                        />
                        <path
                          id="Path_1260"
                          data-name="Path 1260"
                          d="M28.813,34.148c-.107-.215-.215-.215-.376-.269-.807-.323-1.506-.431-2.26-.7a.6.6,0,0,1-.269-.538c0-.162-.054-.269-.215-.269-.054,0-.054,0-.054-.108a3.993,3.993,0,0,1-.054-.592.185.185,0,0,1,.054-.107,2.589,2.589,0,0,0,.377-1.076s.054.054.107-.107.055-.215.108-.43c.054-.161.054-.43-.108-.43-.107.054-.107,0-.107-.108V28.392a.992.992,0,0,0-.431-.7,1.7,1.7,0,0,1-.43-.323.2.2,0,0,1,0-.323c.054-.054.161-.107.215-.161h-.054c-.055,0-.646.107-.861.161a3.6,3.6,0,0,0-1.238.538,1.161,1.161,0,0,0-.484.753V29.36c0,.054,0,.161-.108.107-.215-.054-.108.376-.108.43.054.162.108.269.161.43.054.107.108.107.108.107a3.227,3.227,0,0,0,.377,1.076.2.2,0,0,1,.054.161,1.828,1.828,0,0,0-.054.538.116.116,0,0,1-.108.107c-.161,0-.215.107-.215.269a.644.644,0,0,1-.269.538c-.377.161-1.776.592-2.206.7-.323.107-.376.215-.43.323v.538h8.878v-.538Z"
                          transform="translate(-15.361 -20.427)"
                          fill="#032087"
                        />
                      </g>
                    </g>
                  </svg>
                  Affiliation
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.706"
                    height="17.706"
                    viewBox="0 0 17.706 17.706"
                  >
                    <g
                      id="Icon_feather-settings"
                      data-name="Icon feather-settings"
                      transform="translate(1 1)"
                    >
                      <path
                        id="Path_1261"
                        data-name="Path 1261"
                        d="M17.783,15.642A2.142,2.142,0,1,1,15.642,13.5,2.142,2.142,0,0,1,17.783,15.642Z"
                        transform="translate(-7.789 -7.789)"
                        fill="none"
                        stroke="#032087"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                      <path
                        id="Path_1262"
                        data-name="Path 1262"
                        d="M14.636,11.494a1.178,1.178,0,0,0,.236,1.3l.043.043a1.429,1.429,0,1,1-2.02,2.02l-.043-.043a1.187,1.187,0,0,0-2.013.842v.121a1.428,1.428,0,0,1-2.856,0v-.064a1.178,1.178,0,0,0-.771-1.078,1.178,1.178,0,0,0-1.3.236l-.043.043a1.429,1.429,0,1,1-2.02-2.02l.043-.043a1.187,1.187,0,0,0-.842-2.013H2.928a1.428,1.428,0,0,1,0-2.856h.064A1.178,1.178,0,0,0,4.07,7.211a1.178,1.178,0,0,0-.236-1.3l-.043-.043a1.429,1.429,0,1,1,2.02-2.02l.043.043a1.178,1.178,0,0,0,1.3.236h.057a1.178,1.178,0,0,0,.714-1.078V2.928a1.428,1.428,0,0,1,2.856,0v.064a1.187,1.187,0,0,0,2.013.842l.043-.043a1.429,1.429,0,1,1,2.02,2.02l-.043.043a1.178,1.178,0,0,0-.236,1.3v.057a1.178,1.178,0,0,0,1.078.714h.121a1.428,1.428,0,0,1,0,2.856h-.064a1.178,1.178,0,0,0-1.078.714Z"
                        transform="translate(-1.5 -1.5)"
                        fill="none"
                        stroke="#032087"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </g>
                  </svg>
                  Settings
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.582"
                    height="13.5"
                    viewBox="0 0 16.582 13.5"
                  >
                    <g
                      id="Group_80"
                      data-name="Group 80"
                      transform="translate(1 1)"
                    >
                      <path
                        id="Path_1250"
                        data-name="Path 1250"
                        d="M-4280.461,552.946h-6.677v11.5h6.677"
                        transform="translate(4287.138 -552.946)"
                        fill="none"
                        stroke="#032087"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                      <g
                        id="Icon_feather-arrow-right"
                        data-name="Icon feather-arrow-right"
                        transform="translate(5.65 1.88)"
                      >
                        <path
                          id="Path_1251"
                          data-name="Path 1251"
                          d="M7.5,18h8.932"
                          transform="translate(-7.5 -14.13)"
                          fill="none"
                          stroke="#032087"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          id="Path_1252"
                          data-name="Path 1252"
                          d="M18,7.5l3.87,3.87L18,15.241"
                          transform="translate(-12.939 -7.5)"
                          fill="none"
                          stroke="#032087"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </g>
                    </g>
                  </svg>
                  Log Out
                </li>
              </ul>
            </div>
          </div>
          <div className="col-9">
            <div className=" userProfile_container ">
              <div className="userProfile_title">Personal Information</div>
              <div className="userProfile_form">
                <div className="userCard">
                  <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />
                  <div>
                    <div className="name">Nika Goguadze</div>
                    <div className="Link">Change profile picture</div>
                  </div>
                </div>
                <div className="row mt-4 pb-3 ">
                  <div className="col-md-6">
                    <FormGroup
                      Label={
                        <Label>
                          First Name <span>(optional)</span>{" "}
                        </Label>
                      }
                    >
                      <Input placeholder="First Name" />
                    </FormGroup>
                  </div>
                  <div className="col-md-6">
                    <FormGroup
                      Label={
                        <Label>
                          Last Name <span>(optional)</span>
                        </Label>
                      }
                    >
                      <Input placeholder="Last Name" />
                    </FormGroup>
                  </div>
                  <div className="col-md-6">
                    <FormGroup Label="Last Name">
                      <Input placeholder="example@bitbook.com" />
                    </FormGroup>
                  </div>
                  {/* <div className="col-12  ">
                    <div className="borderBottom"> </div>
                  </div> */}
                </div>
                {/* <div className="row">
                  <div className="col-12">
                    <h5>Physical Adress</h5>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label
                        className="form-control-label"
                        htmlFor="inputSuccess2"
                      >
                        Country
                      </label>
                      <select className="form-control">
                        <option>Georgia</option>
                      </select>
                      <div className="invalid-feedback">That didn`t work.</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label
                        className="form-control-label"
                        htmlFor="inputSuccess2"
                      >
                        City
                      </label>
                      <select className="form-control">
                        <option>Tbilisi</option>
                      </select>
                      <div className="invalid-feedback">That didn`t work.</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label
                        className="form-control-label"
                        htmlFor="inputSuccess2"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control text"
                        name="i2"
                        required
                        placeholder="Address"
                      />
                      <div className="invalid-feedback">That didn`t work.</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label
                        className="form-control-label"
                        htmlFor="inputSuccess2"
                      >
                        Postal Code
                      </label>
                      <input
                        type="text"
                        className="form-control text"
                        name="i2"
                        required
                        placeholder="Postal Code"
                      />
                      <div className="invalid-feedback">That didn`t work.</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label
                        className="form-control-label"
                        htmlFor="inputSuccess2"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control text"
                        name="i2"
                        required
                        placeholder="example@bitbook.com"
                      />
                      <div className="invalid-feedback">That didn`t work.</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label
                        className="form-control-label"
                        htmlFor="inputSuccess2"
                      >
                        phone number
                      </label>
                      <input
                        type="number"
                        className="form-control text"
                        name="i2"
                        required
                        placeholder="phone number"
                      />
                      <div className="invalid-feedback">That didn`t work.</div>
                    </div>
                  </div>
                  <div className="col-12 mb-3 mt-2  ">
                    <div className="borderBottom"> </div>
                  </div>
                </div> */}

                <div className="row">
                  {/* <div className="col-12">
                    <h5>Language & Currency</h5>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <select className="form-control">
                        <option>Georgia</option>
                      </select>
                      <div className="invalid-feedback">That didn`t work.</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <select className="form-control">
                        <option>GEL</option>
                      </select>
                      <div className="invalid-feedback">That didn`t work.</div>
                    </div>
                  </div> */}
                  <div className="col-12 text-right">
                    <Button className="btn btn-primary">Save Changess</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userProfile;
