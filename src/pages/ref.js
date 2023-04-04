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
      <h1 style={styles.title}>Items are in order of appearance</h1>
      <div style={styles.columns}>
        <div style={styles.column}>
          <h2 style={styles.header}>Card</h2>
          <div style={styles.item}>water softeners</div>
          <div style={styles.item}>water filtration</div>
          <div style={styles.item}>reverse osmosis</div>
          <div style={styles.item}>**Doors**</div>
          <div style={styles.item}>**Alkaline Water**</div>
          <div style={styles.item}>water treatment</div>
          <div style={styles.item}>house water systems</div>
          <div style={styles.item}>well water systems (word order?)</div>
        </div>
        <div style={styles.column}>
          <h2 style={styles.header}>Pages*</h2>
          <div style={styles.item}>water-softeners.js</div>
          <div style={styles.item}>water-filtration.js</div>
          <div style={styles.item}>reverse-osmosis.js</div>
          <div style={styles.item}>**doors**</div>
          <div style={styles.item}>hard-water-filters.js</div>
          <div style={styles.item}>house-water-filters.js</div>
          <div style={styles.item}>water-testing.js</div>
          <div style={styles.item}>water-treatment.js</div>
        </div>
        <div style={styles.column}>
          <h2 style={styles.header}>Footer Links</h2>
          <div style={styles.item}>water-softeners</div>
          <div style={styles.item}>water-filtrations</div>
          <div style={styles.item}>reverse-osmosis</div>
          <div style={styles.item}>under-sink-systems</div>
          <div style={styles.item}>alkaline-water-filters</div>
          <div style={styles.item}>hard-water-systems</div>
          <div style={styles.item}>whole-house-water-filtrations-systems</div>
          <div style={styles.item}>well-water-systems</div> 
        </div>
        <div style={styles.column}>
          <h2 style={styles.header}>Menu order</h2>
          <div style={styles.item}>WATER SOFTENERS</div>
          <div style={styles.item}>WATER FILTRATION</div>
          <div style={styles.item}>REVERSE OSMOSIS</div>
          <div style={styles.item}>**doors**</div>
          <div style={styles.item}>HARD WATER FILTERS</div>
          <div style={styles.item}>WATER TESTING</div>
          <div style={styles.item}>HOUSE WATER FILTERS</div>
          <div style={styles.item}>WATER WELL SYSTEMS</div>
        </div>
      </div>
      <p className="w-[80%]">
        *Pages: Page order in vscode is alphabetical. Make sure the other
        columns align and just arrange this to align with them.
      </p>
    </div>
  )
}

export default Ref
