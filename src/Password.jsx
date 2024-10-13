import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"; // Import icons

function Password() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [darkMode, setDarkMode] = useState(false); // For toggling dark mode

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const createPassword = () => {
    let pass = name;

    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const special = "!@#$%^&*()_+";

    const total = upper + lower + number + special;
    pass += upper[Math.floor(Math.random() * upper.length)];
    pass += lower[Math.floor(Math.random() * lower.length)];
    pass += number[Math.floor(Math.random() * number.length)];
    pass += special[Math.floor(Math.random() * special.length)];

    while (length > pass.length) {
      pass += total[Math.floor(Math.random() * total.length)];
    }
    setPassword(pass);
  };

  const clearPassword = () => {
    setPassword("");
    setName("");
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const themeStyles = {
    backgroundColor: darkMode ? "#333" : "#f0f2f5",
    color: darkMode ? "#fff" : "#333",
    borderColor: darkMode ? "#555" : "#333",
    buttonBackground: darkMode ? "#555" : "#007bff",
    buttonHover: darkMode ? "#777" : "#0056b3",
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "16px",
          backgroundColor: themeStyles.backgroundColor,
          color: themeStyles.color,
          transition: "all 0.3s ease",
          position: "relative", // Positioning context for icon
        }}
      >
        {/* Dark Mode Icon */}
        <div
          style={{
            // position: "absolute",
            // top: "16px",
            // right: "16px",
            textAlign: "center",
            cursor: "pointer",
          }}
          onClick={toggleTheme}
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="2x" />
        </div>

        <h1
          style={{
            fontSize: "24px",
            textAlign: "center",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Random Password Generator
        </h1>

        <input
          type="text"
          value={name}
          style={{
            width: "100%",
            maxWidth: "300px",
            padding: "12px",
            border: `2px solid ${themeStyles.borderColor}`,
            borderRadius: "6px",
            marginBottom: "20px",
            fontSize: "20px",
            outline: "none",
            backgroundColor: darkMode ? "#555" : "#fff",
            color: darkMode ? "#fff" : "#333",
          }}
          placeholder="Enter Your Name"
          onChange={handleChange}
        />

        <input
          type="text"
          value={password}
          style={{
            width: "100%",
            maxWidth: "300px",
            padding: "12px",
            border: `2px solid ${themeStyles.borderColor}`,
            borderRadius: "6px",
            marginBottom: "20px",
            fontSize: "20px",
            outline: "none",
            backgroundColor: darkMode ? "#555" : "#fff",
            color: darkMode ? "#fff" : "#333",
          }}
          placeholder="Generated Password"
          readOnly // Make it read-only to avoid manual editing
        />

        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <button
            style={{
              padding: "12px 24px",
              backgroundColor: themeStyles.buttonBackground,
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onClick={createPassword}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = themeStyles.buttonHover)
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = themeStyles.buttonBackground)
            }
          >
            Generate Password
          </button>

          <button
            style={{
              padding: "12px 24px",
              backgroundColor: themeStyles.buttonBackground,
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onClick={clearPassword}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = themeStyles.buttonHover)
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = themeStyles.buttonBackground)
            }
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
}

export default Password;
