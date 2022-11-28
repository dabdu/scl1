import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import InputField from "./Form/InputField";
import SubHeader from "./Form/SubHeader";
import Spinner from "./Spinner";

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
    dob: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      formData.lat = position.coords.latitude;
      formData.lng = position.coords.longitude;
    });
  }, []);
  const {
    firstName,
    lastName,
    middleName,
    nPowerNumber,
    email,
    phoneNumber,
    yearsOfExprience,
    lat,
    lng,
    address,
    state,
    town,
    dob,
  } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      !firstName ||
      !lastName ||
      !nPowerNumber ||
      !email ||
      !phoneNumber ||
      !yearsOfExprience ||
      // !lat ||
      // !lng ||
      !address ||
      !state ||
      !town ||
      !dob
    ) {
      setLoading(false);
      toast.error("All Field Must be Fill");
    } else {
      // Check Valid Email
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
            dob: "",
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
    <div className="">
      <div className="">
        <form className="flex items-center px-56 my-12">
          {/* Left Panel */}
          <div
            className="relative"
            style={{ width: "450px", marginRight: "50px" }}
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
                <InputField
                  title={"Date Of Birth"}
                  nameId={"dob"}
                  value={dob}
                  onChange={onChange}
                  required={true}
                  type="date"
                />
              </div>
            </div>
            {/* Address */}
            <div>
              <SubHeader title={"Address"} />
              <div>
                <div className={flexClass}>
                  {/* State Dropdown */}
                  <div
                    className="form-group border border-black rounded-sm py-1 px-2"
                    style={{ width: "45%" }}
                  >
                    {/* <label className="control-label">State</label> */}
                    <select
                      onChange={onChange}
                      name="state"
                      id="state"
                      className="form-control"
                    >
                      <option value="">- Select State -</option>
                      <option value="Abia">Abia</option>
                      <option value="Adamawa">Adamawa</option>
                      <option value="AkwaIbom">AkwaIbom</option>
                      <option value="Anambra">Anambra</option>
                      <option value="Bauchi">Bauchi</option>
                      <option value="Bayelsa">Bayelsa</option>
                      <option value="Benue">Benue</option>
                      <option value="Borno">Borno</option>
                      <option value="Cross River">Cross River</option>
                      <option value="Delta">Delta</option>
                      <option value="Ebonyi">Ebonyi</option>
                      <option value="Edo">Edo</option>
                      <option value="Ekiti">Ekiti</option>
                      <option value="Enugu">Enugu</option>
                      <option value="FCT">FCT</option>
                      <option value="Gombe">Gombe</option>
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
                      <option value="Taraba">Taraba</option>
                      <option value="Yobe">Yobe</option>
                      <option value="Zamfara">Zamafara</option>
                    </select>
                  </div>
                  <InputField
                    title={"Town"}
                    nameId={"town"}
                    value={town}
                    onChange={onChange}
                    required={true}
                  />
                </div>

                <InputField
                  title={"Residence Address"}
                  nameId={"address"}
                  value={address}
                  onChange={onChange}
                  required={true}
                />
              </div>
            </div>
            {/* Personal Information */}
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
                <InputField
                  title={"Phone Number"}
                  nameId={"phoneNumber"}
                  value={phoneNumber}
                  onChange={onChange}
                  required={true}
                />
              </div>
            </div>
            <button
              className="bg-black text-white px-14 py-2 font-medium rounded-md absolute right-0"
              onClick={onSubmit}
            >
              Register
            </button>
          </div>
          {/* Right Panel */}
          <div
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default FieldAgentForm;
