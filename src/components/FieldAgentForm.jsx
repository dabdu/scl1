import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import InputField from "./Form/InputField";
import SubHeader from "./Form/SubHeader";
import Spinner from "./Spinner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { lgaList } from "../constants/lgas";
import { wardsList } from "../constants/wards";
const FieldAgentForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    nPowerNumber: "",
    email: "",
    phoneNumber: "",
    yearsOfExprience: "",
    lat: null,
    lng: null,
    address: "",
    state: "",
    town: "",
    ward: "",
    // dob: new Date()
  });
  const [dob, setDob] = useState(null);
  const [showLgaInput, setShowLgaInput] = useState(false);
  const [filteredLga, setFilteredLga] = useState([]);
  const [showWardsInput, setShowWardsInput] = useState(false);
  const [filteredWards, setFilteredWards] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    // navigator.geolocation.getCurrentPosition((position) => {
    //   formData.lat = position.coords.latitude;
    //   formData.lng = position.coords.longitude;
    // });
    navigator.geolocation.getCurrentPosition((position) => {
      setFormData((prevState) => ({
        ...prevState,
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }));
    });
  }, []);
  const {
    firstName,
    lastName,
    middleName,
    email,
    phoneNumber,
    yearsOfExprience,
    lat,
    lng,
    address,
    state,
    town,
  } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onStateChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    let filtered = wardsList.filter(
      (item) => item.state === e.target.value.toUpperCase()
    );
    setFilteredLga(filtered);
    setShowLgaInput(true);
  };

  const onLgaChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    var selected = wardsList.find(function (item) {
      return item.lga === e.target.value.toUpperCase();
    });
    setFilteredWards(selected);
    setShowWardsInput(true);
  };
  const emailValidation = () => {
    const regEx =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEx.test(email)) {
      toast.error("Please Enter a Valid Email");
    }
  };
  // Phone Number Validation
  const phoneNumberValidation = () => {
    if (phoneNumber.length !== 11) {
      toast.error("Phone Number be 11 digits");
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const regEx =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const firstThree = phoneNumber.slice(0, 3);
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !yearsOfExprience ||
      !address ||
      !state ||
      !town ||
      !dob
    ) {
      setLoading(false);
      toast.error("All Field Must be Fill");
    } else if (!regEx.test(email)) {
      setLoading(false);
      // Check Valid Email
      toast.error("Please Enter a Valid Email");
    } else if (phoneNumber.length !== 11) {
      // Phone Number Validation
      setLoading(false);

      toast.error("Phone Number be 11 digits");
    } else if (!lat || !lng) {
      setLoading(false);
      toast.error(
        "Please Refresh Your Browser and Allow Us to Access Your Location"
      );
    }
    // else if (firstThree !== "080") {
    //   setLoading(false);
    //   toast.error(
    //     "Phone Number Must Start with any of this Format (080-090-070-081-091)"
    //   );
    // }
    // else if (firstThree !== "080") {
    //   setLoading(false);
    //   toast.error(
    //     "Phone Number Must Start with any of this Format (080-090-070-081-091)"
    //   );
    // }
    else {
      axios({
        method: "post",
        url: "http://api.sclng.com/api/add-field-agent",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((res) => {
          setLoading(false);
          setFormData((prevState) => ({
            ...prevState,
            firstName: "",
            lastName: "",
            middleName: "",
            nPowerNumber: "",
            email: "",
            phoneNumber: "",
            yearsOfExprience: "",
            address: "",
            state: "",
            town: "",
            dob: new Date(),
          }));
          navigate(`/`);
          toast.success("Form Data Saved Successfully!!!");
        })
        .catch((error) => {
          setLoading(false);
          toast.error("Error Occured, Please Try Again");
          console.log(error);
        });
    }
  };
  const flexClass = "flex justify-between pb-5";
  if (loading) return <Spinner />;
  return (
    <div className=" mb-24">
      <div className="">
        <form className="flex items-center px-56 my-12">
          {/* Left Panel */}
          <div
            className="relative"
            // style={{ width: "450px", marginRight: "50px" }}
          >
            {/* PersonalInformation */}
            <div>
              <SubHeader title={"Personal Information"} />
              <div className={flexClass}>
                <InputField
                  title={"First Name"}
                  nameId={"firstName"}
                  value={firstName}
                  onChange={onChange}
                  required={true}
                />
                <InputField
                  title={"Middle Name"}
                  nameId={"middleName"}
                  value={middleName}
                  onChange={onChange}
                />
              </div>
              <div className={flexClass}>
                <InputField
                  title={"Last Name"}
                  nameId={"lastName"}
                  value={lastName}
                  onChange={onChange}
                  required={true}
                />
                <div className="flex items-center font-semibold text-black ">
                  {/* <p className="mr-2">DOB</p> */}
                  {/* <InputField
                    title={"Date Of Birth"}
                    nameId={"dob"}
                    value={dob}
                    onChange={onChange}
                    required={true}
                    type="date"
                  /> */}
                  <DatePicker
                    selected={dob}
                    onChange={(date) => setDob(date)}
                    dateFormat={"yyyy/MM/dd"}
                    maxDate={new Date("2004/01/01")}
                    placeholderText="DOB (Atlest 18 Years)"
                    className="border border-black py-1 px-2 rounded-sm"
                  />
                </div>
              </div>
            </div>
            {/* Address */}
            <div>
              <SubHeader title={"Address"} />
              <div>
                <div>
                  {/* State Dropdown */}
                  <div
                  // className="form-group border border-black rounded-sm py-1 px-2"
                  // style={{ width: "45%" }}
                  >
                    <select
                      onChange={onStateChange}
                      name="state"
                      id="state"
                      className="form-group border border-black rounded-sm py-1 px-4 w-full"
                    >
                      <option value="">- Select State -</option>
                      {/* <option value="Abia">Abia</option> */}
                      <option value="Adamawa">Adamawa</option>{" "}
                      {/* <label className="control-label">State</label> */}
                      {/* <option value="AkwaIbom">AkwaIbom</option>
                      <option value="Anambra">Anambra</option> */}
                      <option value="Bauchi">Bauchi</option>
                      {/* <option value="Bayelsa">Bayelsa</option>
                      <option value="Benue">Benue</option>
                      <option value="Borno">Borno</option>
                      <option value="Cross River">Cross River</option>
                      <option value="Delta">Delta</option>
                      <option value="Ebonyi">Ebonyi</option>
                      <option value="Edo">Edo</option>
                      <option value="Ekiti">Ekiti</option>
                      <option value="Enugu">Enugu</option> */}
                      <option value="Abuja-Fct">ABUJA-FCT</option>
                      {/* <option value="Gombe">Gombe</option>
                      <option value="Imo">Imo</option>
                      <option value="Jigawa">Jigawa</option>
                      <option value="Kaduna">Kaduna</option>
                      <option value="Kano">Kano</option>
                      <option value="Katsina">Katsina</option>
                      <option value="Kebbi">Kebbi</option>
                      <option value="Kogi">Kogi</option>
                      <option value="Kwara">Kwara</option>
                      <option value="Lagos">Lagos</option>
                      <option value="Nasarawa">Nasarawa</option>
                      <option value="Niger">Niger</option>
                      <option value="Ogun">Ogun</option>
                      <option value="Ondo">Ondo</option>
                      <option value="Osun">Osun</option>
                      <option value="Oyo">Oyo</option>
                      <option value="Plateau">Plateau</option>
                      <option value="Rivers">Rivers</option>
                      <option value="Sokoto">Sokoto</option>
                      <option value="Taraba">Taraba</option> */}
                      {/* <option value="Yobe">Yobe</option>
                      <option value="Zamfara">Zamafara</option> */}
                    </select>
                  </div>
                  {/* Local Government Input */}
                  {showLgaInput && (
                    <select
                      onChange={onLgaChange}
                      name="town"
                      id="town"
                      className="form-group border border-black rounded-sm py-1 px-4 w-full my-6"
                    >
                      <option value="">- Select Local Government -</option>
                      {filteredLga.map((item, index) => (
                        <option value={item.lga} key={index}>
                          {item.lga}
                        </option>
                      ))}
                    </select>
                  )}
                  {/* Wards Input */}
                  {showWardsInput && (
                    <select
                      // onChange={onLgaChange}
                      name="ward"
                      id="ward"
                      className="form-group border border-black rounded-sm py-1 px-4 w-full "
                    >
                      <option value="">- Select Ward -</option>
                      {filteredWards.wards.map((item, index) => (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              </div>
            </div>
            {/* Conact Information */}
            <div className="mb-5">
              <SubHeader title={"Contact Information"} />
              <div className={flexClass}>
                <InputField
                  title={"Email Address"}
                  nameId={"email"}
                  value={email}
                  onChange={onChange}
                  required={true}
                  type="email"
                />
                <div>
                  {/* <p className="text-sm font-bold text-gray-700">
                    Number Must be in this Format(080 ,070 , 081 ,071, 090 ,
                    091)
                  </p> */}
                  <InputField
                    title={"Phone Number"}
                    nameId={"phoneNumber"}
                    value={phoneNumber}
                    onChange={onChange}
                    required={true}
                  />
                </div>
              </div>
            </div>
            <div className="">
              {/* Years of Exprience */}
              <div className="form-group my-8">
                <label className="control-label text-black block my-3">
                  Years of Exprience{" "}
                </label>
                <select
                  onChange={onChange}
                  name="yearsOfExprience"
                  id="yearsOfExprience"
                  className="form-group border border-black rounded-sm py-1 px-2"
                  style={{ width: "100%" }}
                >
                  <option value={""}>-- Years of Exprience --</option>
                  <option value={"1-3"}>{"1-3 Years"}</option>
                  <option value={"4-6"}>{"4-6 Years"}</option>
                  <option value={"6+"}>{"6+"}</option>
                </select>
              </div>
              {/* Climate Change */}
              <div>
                <p className="text-black my-2">
                  What are your ideas about the impact of climate change on
                  Africa?
                </p>
                <textarea
                  placeholder="40 Character Max"
                  rows={2}
                  className="w-full border border-black rounded-sm p-2"
                ></textarea>
              </div>
              <div>
                <p className="text-black my-2">
                  What are ideas on the use of agro allied chemicals on plant,
                  animals and environement?
                </p>
                <textarea
                  placeholder="40 Character Max"
                  rows={2}
                  className="w-full border border-black rounded-sm p-2"
                ></textarea>
              </div>
            </div>
            <button
              className="bg-black text-white px-14 py-2 font-medium rounded-md absolute right-0 mt-5"
              onClick={onSubmit}
            >
              Register
            </button>
          </div>
          {/* Right Panel */}
          {/* <div
            className="py-24 px-8"
            style={{
              width: "250px",
              height: "100%",
              background: "rgba(0, 0, 0, 0.03)",
            }}
          >
            <div
              style={{ width: "100%" }}
              className="border-b border-zinc-500 mb-10 py-2"
            >
              <h1 className="text-xl font-bold text-black">
                {"Other Information"}
              </h1>
            </div>{" "}
            <InputField
              title={"N Power Number"}
              nameId={"nPowerNumber"}
              value={nPowerNumber}
              onChange={onChange}
              required={true}
            />
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default FieldAgentForm;
