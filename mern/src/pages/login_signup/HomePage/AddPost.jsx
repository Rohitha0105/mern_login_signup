import React, { useState } from "react";

const Addpost = () => {
  const [Branch, setBranch] = useState("");
  const [Experience, setExperience] = useState("");
  const [Nofopenings, setNofOpenings] = useState("");
  const [Salary, setsalary] = useState("");
  const [Designation, setDesignation] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await localStorage.getItem("token");

      const SendPost = await fetch('http://localhost:2000/user/addpost', {
        method: "POST",
        headers: {
          token: `${token}`,
        },
        body: JSON.stringify({
          Branch,
          Designation,
          Experience,
          Nofopenings,
          Salary,
        }),
      });

      const response = await SendPost.json();
      if (SendPost.ok) {
        alert("Post Added successfully");
      } else {
        alert("Error while sending post");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDesignation = (e) => {
    const value = e.target.value;
    if (Designation.includes(value)) {
      setDesignation(Designation.filter((item) => item !== value));
    } else {
      setDesignation([...Designation, value]);
    }
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "20px",
    maxWidth: "400px",
    margin: "0 auto",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  };

  const selectStyle = {
    ...inputStyle,
    appearance: "none",
    backgroundColor: "#fff",
    cursor: "pointer",
  };

  const checkboxContainerStyle = {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  };

  const checkboxStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "8px",
  };

  const labelStyle = {
    marginLeft: "10px",
    fontSize: "16px",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
    alignSelf: "center",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Add Post</h2>
      <label htmlFor="branch" style={{ marginBottom: "5px" }}>
        Select Branch
      </label>
      <select
        name="branch"
        id="branch"
        style={selectStyle}
        value={Branch}
        onChange={(e) => setBranch(e.target.value)}
      >
        <option value="Select Branch">Select Branch</option>
        <option value="CSE">Computer Science</option>
        <option value="ECE">Electronics</option>
        <option value="EEE">Electrical</option>
        <option value="Civil">Civil</option>
        <option value="Mechanical">Mechanical</option>
        <option value="IT">Information Technology</option>
        <option value="Metallurgy">Metallurgy</option>
        <option value="Automobile">Automobile</option>
      </select>
      <div style={checkboxContainerStyle}>
        <div style={checkboxStyle}>
          <input
            type="checkbox"
            id="ug"
            value="UG"
            onChange={handleDesignation}
            checked={Designation.includes("UG")}
          />
          <label htmlFor="ug" style={labelStyle}>
            UG
          </label>
        </div>
        <div style={checkboxStyle}>
          <input
            type="checkbox"
            id="pg"
            value="PG"
            onChange={handleDesignation}
            checked={Designation.includes("PG")}
          />
          <label htmlFor="pg" style={labelStyle}>
            PG
          </label>
        </div>
        <div style={checkboxStyle}>
          <input
            type="checkbox"
            id="phd"
            value="PHD"
            onChange={handleDesignation}
            checked={Designation.includes("PHD")}
          />
          <label htmlFor="phd" style={labelStyle}>
            PHD
          </label>
        </div>
      </div>
      <input
        type="text"
        name="experience"
        id="experience"
        placeholder="Experience"
        style={inputStyle}
        onChange={(e) => setExperience(e.target.value)}
        value={Experience}
      />
      <input
        type="text"
        name="noOfOpenings"
        id="noOfOpenings"
        placeholder="No of Openings"
        style={inputStyle}
        onChange={(e) => setNofOpenings(e.target.value)}
        value={Nofopenings}
      />
      <input
        type="text"
        name="salary"
        id="salary"
        placeholder="Salary"
        style={inputStyle}
        onChange={(e) => setsalary(e.target.value)}
        value={Salary}
      />
      <button
        type="submit"
        style={buttonStyle}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
        }
        onMouseOut={(e) =>
          (e.target.style.backgroundColor = buttonStyle.backgroundColor)
        }
      >
        Submit
      </button>
    </div>
  );
};

export default Addpost;
