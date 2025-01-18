import { useState } from "react";
import { AuthLayoutWithoutRightSidebar } from "../AuthLayoutWithoutRightSidebar";

// Sample data with image URLs for members and associations
const members = [
  {
    id: 1,
    name: "Alice",
    role: "Developer",
    imageUrl: "https://via.placeholder.com/80",
  },
  {
    id: 2,
    name: "Bob",
    role: "Designer",
    imageUrl: "https://via.placeholder.com/80",
  },
  {
    id: 3,
    name: "Charlie",
    role: "Manager",
    imageUrl: "https://via.placeholder.com/80",
  },
  // Add more members as needed
];

const associations = [
  {
    id: 1,
    name: "Tech Innovators",
    description: "Promoting tech advancements",
    imageUrl: "https://via.placeholder.com/80",
  },
  {
    id: 2,
    name: "Green Planet",
    description: "Focused on environmental sustainability",
    imageUrl: "https://via.placeholder.com/80",
  },
  {
    id: 3,
    name: "Creative Minds",
    description: "Supporting artists and designers",
    imageUrl: "https://via.placeholder.com/80",
  },
  // Add more associations as needed
];

const Connections = () => {
  const [activeTab, setActiveTab] = useState("members");

  return (
    <AuthLayoutWithoutRightSidebar>
      <div style={styles.container}>
        <h2 style={styles.title}>Connections</h2>

        {/* Tabs */}
        <div style={styles.tabs}>
          <button
            style={activeTab === "members" ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab("members")}
          >
            Members
          </button>
          <button
            style={activeTab === "associations" ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab("associations")}
          >
            Associations
          </button>
        </div>

        {/* Content */}
        <div style={styles.content}>
          {activeTab === "members" ? (
            <div style={styles.columns}>
              <div style={styles.column}>
                {members
                  .slice(0, Math.ceil(members.length / 2))
                  .map((member) => (
                    <div key={member.id} style={styles.card}>
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        style={styles.image}
                      />
                      <h3 style={styles.memberName}>{member.name}</h3>
                      <p style={styles.memberRole}>{member.role}</p>
                    </div>
                  ))}
              </div>
              <div style={styles.column}>
                {members.slice(Math.ceil(members.length / 2)).map((member) => (
                  <div key={member.id} style={styles.card}>
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      style={styles.image}
                    />
                    <h3 style={styles.memberName}>{member.name}</h3>
                    <p style={styles.memberRole}>{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div style={styles.columns}>
              <div style={styles.column}>
                {associations
                  .slice(0, Math.ceil(associations.length / 2))
                  .map((association) => (
                    <div key={association.id} style={styles.card}>
                      <img
                        src={association.imageUrl}
                        alt={association.name}
                        style={styles.image}
                      />
                      <h3 style={styles.associationName}>{association.name}</h3>
                      <p style={styles.associationDescription}>
                        {association.description}
                      </p>
                    </div>
                  ))}
              </div>
              <div style={styles.column}>
                {associations
                  .slice(Math.ceil(associations.length / 2))
                  .map((association) => (
                    <div key={association.id} style={styles.card}>
                      <img
                        src={association.imageUrl}
                        alt={association.name}
                        style={styles.image}
                      />
                      <h3 style={styles.associationName}>{association.name}</h3>
                      <p style={styles.associationDescription}>
                        {association.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </AuthLayoutWithoutRightSidebar>
  );
};

// CSS styles
const styles = {
  container: {
    padding: "1rem",
    maxWidth: "800px",
    margin: "0 auto",
  },
  title: {
    fontSize: "2rem",
    color: "#705eaa",
    textAlign: "center",
  },
  tabs: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1rem",
  },
  tab: {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    cursor: "pointer",
    border: "1px solid #ddd",
    backgroundColor: "#f5f5f5",
  },
  activeTab: {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    cursor: "pointer",
    border: "1px solid #ddd",
    backgroundColor: "#705eaa",
    color: "white",
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  columns: {
    display: "flex",
    gap: "1rem",
  },
  column: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  card: {
    padding: "1rem",
    borderRadius: "8px",
    backgroundColor: "#f5f5f5",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  image: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    marginBottom: "0.5rem",
  },
  memberName: {
    fontSize: "1.2rem",
    color: "#333",
  },
  memberRole: {
    fontSize: "1rem",
    color: "#777",
  },
  associationName: {
    fontSize: "1.2rem",
    color: "#333",
  },
  associationDescription: {
    fontSize: "1rem",
    color: "#777",
  },
};

export { Connections };
