import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        padding: "24px 0",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          padding: "0 16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            alt="Logo"
            style={{
              height: "60px",
              width: "60px",
              overflow: "hidden",
              objectFit: "cover",
            }}
            src="pics/logo.jpeg"
          />

          <p style={{ fontSize: "20px", fontWeight: "500", color: "#777" }}>
            Connecting you with trusted professionals for all your needs.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          <a style={{ fontSize: "20px", color: "#777" }} href="#">
            <FacebookIcon style={{ width: "24px", height: "24px" }} />
          </a>
          <a style={{ fontSize: "20px", color: "#777" }} href="#">
            <TwitterIcon style={{ width: "24px", height: "24px" }} />
          </a>
          <a style={{ fontSize: "20px", color: "#777" }} href="#">
            <InstagramIcon style={{ width: "24px", height: "24px" }} />
          </a>
          <a style={{ fontSize: "20px", color: "#777" }} href="#">
            <LinkedinIcon style={{ width: "24px", height: "24px" }} />
          </a>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            fontSize: "12px",
            color: "#777",
          }}
        >
          <span>|</span>
          <span>contact@cityplus.com</span>
          <span>|</span>
          <span>1-800-123-4567</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            fontSize: "12px",
            color: "#777",
            marginTop: "16px",
          }}
        >
          <span>© City Plus</span>
          <span>|</span>
          <a style={{ textDecoration: "underline", color: "#333" }} href="#">
            Privacy Policy
          </a>
          <a style={{ textDecoration: "underline", color: "#333" }} href="#">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
