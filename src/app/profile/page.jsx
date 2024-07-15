import InputDefault from "@/Components/inputDefault/InputDefault";

export const metadata = {
  title: {
    absolute: "",
    default: "Profile | Exclusive E-commerce",
    template: "",
  },
  description: "The fully e-commerce website for shopping.",
};
function page() {
  return (
    <div className="profilePage">
      <form className="profileForm">
        <h5 className="text-primary">Edit Your Profile</h5>
        <div className="row ">
          <div className="d-flex align-items-center justify-content-between flex-wrap">
            <div className="half">
              <InputDefault
                type={"text"}
                label={"First Name"}
                holder={"Md"}
                id={"firstName"}
              />
            </div>
            <div className="half">
              <InputDefault
                type={"text"}
                label={"Last Name"}
                holder={"Rimel"}
                id={"lastName"}
              />
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between flex-wrap ">
            <div className="half">
              <InputDefault
                type={"email"}
                label={"Email"}
                holder={"Md"}
                id={"email"}
              />
            </div>
            <div className="half">
              <InputDefault
                type={"text"}
                label={"Address"}
                holder={"Kingston, 5236, United State"}
                id={"address"}
              />
            </div>
          </div>
          <div className="d-flex flex-column">
            <div className="full">
              <InputDefault
                type={"password"}
                label={"Password Changes"}
                holder={"Current Password"}
                id={"currentPassword"}
              />
            </div>
            <div className="full">
              <InputDefault
                type={"password"}
                label={""}
                holder={"New Password"}
                id={"newPassword"}
              />
            </div>
            <div className="full">
              <InputDefault
                type={"password"}
                label={""}
                holder={"Confirm New Password"}
                id={"confirmPassword"}
              />
            </div>
          </div>
          <div className="d-flex justify-content-end align-items-center">
            <button className="btn mx-4 fs-5" aria-label="cancel">
              Cancel
            </button>
            <button
              className="btn btn-primary text-white py-3 px-5 my-4"
              aria-label="save changes update"
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default page;
