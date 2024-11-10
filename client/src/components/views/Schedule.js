import { AuthLayoutWithoutRightSidebar } from "../AuthLayoutWithoutRightSidebar";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";

const purple = "#705eaa";
const green = "#71a769";
const white = "#ffffff";

// Sample events with themes
const events = [
  {
    date: new Date(2024, 10, 15),
    title: "Team Meeting",
    theme: "Robotique",
    description: "A meeting to discuss robot development.",
  },
  {
    date: new Date(2024, 10, 20),
    title: "AI Workshop",
    theme: "IA",
    description: "An interactive workshop about AI applications.",
  },
  {
    date: new Date(2024, 10, 25),
    title: "Web Design Review",
    theme: "Design",
    description: "Reviewing the latest web design trends.",
  },
  {
    date: new Date(2024, 11, 5),
    title: "Embedded Systems Seminar",
    theme: "Embarqué",
    description: "Seminar on embedded systems programming.",
  },
  {
    date: new Date(2024, 11, 10),
    title: "Frontend Development",
    theme: "Web",
    description: "Workshop on frontend technologies and best practices.",
  },
  {
    date: new Date(2024, 11, 10),
    title: "robolympix",
    theme: "robotique",
    description: "compétition robotique",
  },
];

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTheme, setSelectedTheme] = useState("All");

  // Filter events based on the selected theme
  const filteredEvents =
    selectedTheme === "All"
      ? events
      : events.filter((event) => event.theme === selectedTheme);

  // Events for the selected date and theme
  const eventsForSelectedDate = filteredEvents.filter(
    (event) => event.date.toDateString() === selectedDate.toDateString()
  );

  const handleViewDetails = (event) => {
    // Here, you can add logic to show event details
    alert(`Event: ${event.title}\nDescription: ${event.description}`);
  };

  return (
    <AuthLayoutWithoutRightSidebar>
      <div style={styles.container}>
        <h2 style={styles.title}>full calendar events</h2>
        {/* Theme Filter */}
        <select
          value={selectedTheme}
          onChange={(e) => setSelectedTheme(e.target.value)}
          style={styles.dropdown}
        >
          <option value="All">All</option>
          <option value="Robotique">Robotique</option>
          <option value="IA">IA</option>
          <option value="Design">Design</option>
          <option value="Web">Web</option>
          <option value="Embarqué">Embarqué</option>
        </select>

        <Calendar
          value={selectedDate}
          onChange={setSelectedDate}
          tileContent={({ date }) => {
            const event = filteredEvents.find(
              (e) => e.date.toDateString() === date.toDateString()
            );
            return event ? (
              <div style={styles.eventLabel}>{event.title}</div>
            ) : null;
          }}
          tileClassName={({ date }) =>
            filteredEvents.some(
              (event) => event.date.toDateString() === date.toDateString()
            )
              ? "highlighted-day"
              : ""
          }
        />

        {/* Events List */}
        <div style={styles.eventsSection}>
          <h3 style={styles.eventsTitle}>
            Events on {selectedDate.toDateString()} ({selectedTheme})
          </h3>
          {eventsForSelectedDate.length > 0 ? (
            eventsForSelectedDate.map((event, index) => (
              <div key={index} style={styles.eventItem}>
                {event.title}
                <button
                  onClick={() => handleViewDetails(event)}
                  style={styles.viewDetailsButton}
                >
                  Voir Détails
                </button>
              </div>
            ))
          ) : (
            <p style={styles.noEvents}>No events for this date.</p>
          )}
        </div>
      </div>
    </AuthLayoutWithoutRightSidebar>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem", // Augmenter le padding pour donner plus d'espace autour du contenu
    backgroundColor: white,
    borderRadius: "8px",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)", // Ombre plus forte pour un effet plus prononcé
    maxWidth: "800px", // Augmenter la largeur maximale pour une vue plus large
    margin: "0 auto",
  },
  title: {
    color: purple,
    fontSize: "2rem", // Augmenter la taille du titre
    marginBottom: "2rem", // Espacement plus grand entre le titre et les autres éléments
  },
  dropdown: {
    marginBottom: "2rem", // Augmenter l'espace sous le dropdown
    padding: "0.75rem", // Plus de padding pour une zone de sélection plus grande
    fontSize: "1.2rem", // Augmenter la taille de la police
    borderRadius: "8px", // Bordure plus arrondie
    border: `2px solid ${green}`, // Bordure un peu plus épaisse
    color: purple,
  },
  eventLabel: {
    backgroundColor: green,
    color: white,
    borderRadius: "6px", // Bordure plus arrondie
    padding: "4px 8px", // Plus de padding pour les événements
    fontSize: "1rem", // Taille de texte un peu plus grande
    marginTop: "6px", // Augmenter l'espacement entre l'événement et le calendrier
    textAlign: "center",
  },
  eventsSection: {
    marginTop: "2rem", // Espacement plus grand entre le calendrier et la liste des événements
    textAlign: "center",
    width: "100%", // Prendre toute la largeur disponible
  },
  eventsTitle: {
    color: purple,
    fontSize: "1.5rem", // Augmenter la taille de la police
    marginBottom: "1rem", // Espacement plus grand sous le titre
  },
  eventItem: {
    padding: "1rem", // Plus de padding pour les éléments
    backgroundColor: green,
    color: white,
    borderRadius: "8px", // Bordure plus arrondie
    marginBottom: "10px", // Espacement plus grand entre les événements
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1rem", // Agrandir la taille du texte des événements
  },
  viewDetailsButton: {
    backgroundColor: purple,
    color: white,
    border: "none",
    borderRadius: "6px", // Plus d'arrondi pour le bouton
    padding: "6px 12px", // Plus de padding pour le bouton
    cursor: "pointer",
    fontSize: "1rem", // Agrandir le texte du bouton
    transition: "background-color 0.3s",
  },
  viewDetailsButtonHover: {
    backgroundColor: "#5d47a3", // Changement de couleur au survol
  },
  noEvents: {
    color: purple,
    fontStyle: "italic",
    fontSize: "1.1rem", // Agrandir la taille du texte pour le message "Aucun événement"
  },
};

export { Schedule };
