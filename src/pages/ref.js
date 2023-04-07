import React from "react"

const Ref = () => {
  const styles = {
    container: {
      display: "grid",
      gridTemplateRows: "auto 1fr",
      gap: "1rem",
      justifyItems: "center",
    },
    columns: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "1rem",
    },
    column: {
      display: "grid",
      gridTemplateRows: "auto repeat(3, 1fr)",
      gap: "0.5rem",
    },
    header: {
      fontSize: "1.5rem",
      marginBottom: "0.5rem",
    },
    item: {
      padding: "0.5rem",
      border: "1px solid black",
    },
    title: {
      fontSize: "2rem",
      marginBottom: "1rem",
    },
  }

  return (
    <div style={styles.container}>
      <h1 className="font-bold mt-4 text-3xl">WORKSHEET</h1>  
      <h2 style={styles.title}>
        Items Need To Be Consistent and Aligned Horizontally
      </h2>
      <div style={styles.columns}>
        <div style={styles.column}>
          <h3 style={styles.header}>Card (Service 1-8 order)</h3>
          <div style={styles.item}>water softeners</div>
          <div style={styles.item}>water filtration</div>
          <div style={styles.item}>reverse osmosis</div>
          <div style={styles.item}>hard water filters</div>
          <div style={styles.item}>water testing</div>
          <div style={styles.item}>water treatment</div>
          <div style={styles.item}>whole house systems</div>
          <div style={styles.item}>water well systems</div>
        </div>
        <div style={styles.column}>
          <h3 style={styles.header}>Footer Links</h3>
          <div style={styles.item}>water-softeners</div>
          <div style={styles.item}>water-filtration</div>
          <div style={styles.item}>reverse-osmosis</div>
          <div style={styles.item}>hard-water-filters</div>
          <div style={styles.item}>water-testing</div>
          <div style={styles.item}>water-treatment</div>
          <div style={styles.item}>whole-house-water-filtration-systems</div>
          <div style={styles.item}>water-well-systems</div>
        </div>
        <div style={styles.column}>
          <h3 style={styles.header}>Menu Order</h3>
          <div style={styles.item}>WATER SOFTENERS</div>
          <div style={styles.item}>WATER FILTRATION</div>
          <div style={styles.item}>REVERSE OSMOSIS</div>
          <div style={styles.item}>HARD WATER FILTERS</div>
          <div style={styles.item}>WATER TESTING</div>
          <div style={styles.item}>WATER TREATMENT</div>
          <div style={styles.item}>WHOLE HOUSE SYSTEMS</div>
          <div style={styles.item}>WATER WELL SYSTEMS</div>
        </div>
        <div style={styles.column}>
          <h3 style={styles.header}>Pages</h3>
          <div style={styles.item}>water-softeners.js</div>
          <div style={styles.item}>water-filtration.js</div>
          <div style={styles.item}>reverse-osmosis.js</div>
          <div style={styles.item}>hard-water-filters.js</div>
          <div style={styles.item}>water-testing.js</div>
          <div style={styles.item}>water-treatment.js</div>
          <div style={styles.item}>whole-house-water-filtration-systems.js</div>
          <div style={styles.item}>water-well-systems.js</div>
        </div>
      </div>
      <ul className="w-[75%] font-medium list-disc">
        <li>
          Cards are listed in the order currently presented on the homepage. The
          4th card is still CHS content and does not match the image. Other
          columns have been moved to best align with the cards and do not
          reflect the current code. Once we have resolved the issues, I will
          code it to match this grid.
        </li>
        <li>
          Page order in vscode is alphabetical. Make sure the other columns
          align and just arrange this to align with them.
        </li>
        <li>
          Service1...Service8 should match the card order for easy visual
          reference.
        </li>
      </ul>
    </div>
  )
}

export default Ref
